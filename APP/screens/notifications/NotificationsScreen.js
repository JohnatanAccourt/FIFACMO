import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, AsyncStorage, FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-tiny-toast';

import api from '../../services/api';
import styles from '../notifications/styles';

export default function NotificationsScreen({ navigation }) { 
  const [respCount, setRespCount] = React.useState('');
  const [notifications, setNotifications] = React.useState('');
  const [oldNotifications, setOldNotifications] = React.useState('');
  const [listState, setListState] = React.useState('Carregando');
  const [oldListState, setOldList] = React.useState('Carregando');
  const [tabs, setTabs] = React.useState('new');

  //color

  const [primaryColor, setPrimaryColor] = React.useState('#333');
  const [secondColor, setSecondColor] = React.useState('#111');

  const [btnNew, setBtnNew] = React.useState('#333');
  const [btnOld, setBtnOld] = React.useState('#444');

  async function cartCount(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const responsetotal = await api.get('/cart/total', {
      headers:{
        Authorization: team_id
      }

    })
    setRespCount(responsetotal.data[0][0])
    
  }

  async function loadNewMessages(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const response = await api.get('/notification', {
      headers:{
        Authorization: team_id
      }
    })

    setNotifications(response.data)
    if(notifications == 0) setListState('Nenhuma Mensagem Nova')
    
  }

  async function loadOldMessages(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const response = await api.get('/notification/old', {
      headers:{
        Authorization: team_id
      }
    })

    setOldNotifications(response.data)
    if(oldNotifications == 0) setOldList('Nenhuma Mensagem Antiga')
    
  }

  async function setMsgRead(id){
    const team_id = await AsyncStorage.getItem('@team_id');
    try{
      await api.post(`/notification/${team_id}/${id}`);

      Toast.show('Mensagem movida para "antigas".');
      loadNewMessages();

    }catch(err){
      console.log(err.response.data);
      Toast.show('Não foi possível marcar como lida');

    }
  }

  async function deleteMsg(id){
    const team_id = await AsyncStorage.getItem('@team_id');
    try{
      await api.delete(`/notification/old/${id}`, {
        headers:{
          Authorization: team_id
        }
      })

      Toast.show('Mensagem removida com sucesso.');
      loadOldMessages();

    }catch(err){
      // console.log(err.response.data)
      let resp = err.response.data.error;

      if(resp === 'Negociation still in operation.'){
        resp = 'Você Precisa responder a proposta para excluir';
        Toast.show(resp);
      }

      }
  }

  function navigateToMessage(notifications){
    navigation.navigate('Message', { notifications })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadNewMessages();
      loadOldMessages();
      cartCount();
    }, [])
  )

  const ListEmpty = () => {
      return(
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listEmptyText}>{listState}</Text>
        </View>
      )
  }

  const oldListEmpty = () => {
    return(
      <View style={styles.listEmptyContainer}>
        <Text style={styles.listEmptyText}>{oldListState}</Text>
      </View>
    )
}

  return (
    <View style={[styles.container, {backgroundColor: primaryColor}]}>
      <View style={styles.header}>
        <Text style={styles.header_title}>FIFACMO</Text>
        <TouchableOpacity
          title="Carrinho"
          onPress={() => navigation.navigate('CartScreen')}
        >
        <Ionicons
          style={styles.header_icon}
          name="md-cart"
          size={30}
        />
        {respCount.total_players != 0 ? 
        <Text style={styles.header_span}>{respCount.total_players}</Text>
        :
        <Text style={styles.header_EmptySpan}></Text>
        }
        </TouchableOpacity>
      </View>

      <View style={styles.btnOptions}>
        <TouchableOpacity style={[styles.btnNewMessages, {backgroundColor: btnNew}]} onPress={() => [setTabs('new'), setPrimaryColor('#333'), setSecondColor('#222'), setBtnNew('#333'), setBtnOld('#222'), loadNewMessages()]}><Text style={styles.btnText}>Novas</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnOldMessages, {backgroundColor: btnOld}]} onPress={() => [setTabs('old'), setPrimaryColor('#333'), setSecondColor('#222'), setBtnOld('#333'), setBtnNew('#222'), loadOldMessages()]}><Text style={styles.btnText}>Antigas</Text></TouchableOpacity>
      </View>

      {tabs == 'new' ?
        <FlatList
        keyExtractor={notifications => String(notifications.notifications_id)}
        overScrollMode={'never'}
        data={notifications}
        ListEmptyComponent={() => ListEmpty()}
        renderItem={({ item : notifications }) => (
          <View style={styles.notifications_container}>
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.notification_wrapper, {backgroundColor: secondColor}]}
            title="Message"
            onPress={() => navigateToMessage(notifications)} 
          >
            <TouchableOpacity style={styles.btnIcon}>
              <Ionicons
                style={styles.notification_icon}
                name="md-eye-off"
                size={30}
                onPress={() => setMsgRead(notifications.notifications_id)} 
            />
            </TouchableOpacity>
            <View style={styles.innerTeam}>
              <Image style={styles.teamImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${notifications.team_img}`}}/>
              <Text style={styles.notifications_teamName}>{notifications.team_name}</Text>
            </View>

            <View style={styles.innerMessage}>
              <Text style={styles.notification_h1}>Proposta pelo {notifications.player_name}</Text>
              <Text style={styles.notification_h2}>{notifications.message}</Text>
            </View>

            <Text style={styles.notification_h3}>Data de envio: {notifications.notification_date.slice(0, 10)}</Text>
          </TouchableOpacity>
          </View>
        )}
        />
        :
        <FlatList
        keyExtractor={notifications => String(notifications.notifications_id)}
        overScrollMode={'never'}
        data={oldNotifications}
        ListEmptyComponent={() => oldListEmpty()}
        renderItem={({ item : notifications }) => (
          <View style={styles.notifications_container}>
          <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.notification_wrapper, {backgroundColor: secondColor}]}
            title="Message"
            onPress={() => navigateToMessage(notifications)} 
          >
            <TouchableOpacity style={styles.btnIcon}>
              <Ionicons
                style={styles.notification_icon}
                name="md-close"
                size={30}
                onPress={() => deleteMsg(notifications.notifications_id)}
              />
            </TouchableOpacity>
            <View style={styles.innerTeam}>
              <Image style={styles.teamImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${notifications.team_img}`}}/>
              <Text style={styles.notifications_teamName}>{notifications.team_name}</Text>
            </View>

            <View style={styles.innerMessage}>
              <Text style={styles.notification_h1}>Proposta pelo {notifications.player_name}</Text>
              <Text style={styles.notification_h2}>{notifications.message}</Text>
            </View>

            <Text style={styles.notification_h3}>Data de envio: {notifications.notification_date.slice(0, 10)}</Text>
          </TouchableOpacity>
          </View>
        )}
      />
      }
      
    </View>
  );
}


