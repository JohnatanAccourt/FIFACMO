import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TouchableOpacityBase, AsyncStorage} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../message/styles';
import api from '../../services/api';

export default function MessageScreen({ navigation }) {
  const [disableBTN, setDisableBTN] = React.useState(false);

  const route = useRoute();
  const notifications = route.params.notifications;

  async function refusePropose(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const player_id = notifications.player_id;

    const response = await api.get(`notification/findOne/${team_id}/${player_id}`)

    try{
      const data = {
        propose_value: response.data.propose_value,
        message: 'Sua proposta foi recusada. O dinheiro da proposta foi realocado a sua verba.',
        team_id_sent: team_id,
        team_id_received: response.data.team_id_sent,
        player_id: response.data.player_id,
        team_img: response.data.team_img,
        team_name: response.data.team_name,
        allow_btn: 'false',
        player_value: response.data.player_value,
        player_name: response.data.player_name
      }
      console.log(data)
  
      await api.post('/notificationResponse', data, {
        headers:{
          Authorization: team_id
        }
      })

    }catch(err){
      console.log(err.response.data)

    }
    
    await api.post(`notification/read/${team_id}/${player_id}`);
    
    setDisableBTN(true);
    navigation.goBack();
  }

  async function acceptPropose(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const player_id = notifications.player_id;

    await api.post(`notification/add/${team_id}/${player_id}`);
    setDisableBTN(true);
    navigation.goBack();
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.header}> 
        <Ionicons
          style={styles.header_icon}
          name="md-arrow-back"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header_title}>FIFAMall</Text>
      </View>

      <View style={styles.message_container}>
        <View style={styles.message_img}>
          <View style={styles.message_inner_img}>
            <Image style={styles.message_img_team} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${notifications.team_img}`}}/>
            <Image style={styles.message_img_player} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${notifications.player_id}.png`}}/> 
          </View>
        </View>

        <Text style={styles.message_h1}>{notifications.team_name}</Text>
        <Text style={styles.message_h2}>Proposta pelo {notifications.player_name}</Text>
        <Text style={styles.message_h3}>
          {notifications.message}
        </Text>
        <Text style={styles.message_Price}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(notifications.propose_value)}</Text>
        <Text style={styles.message_h4}>Esse jogador vale: {Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(notifications.player_value)}</Text>
        
        {notifications.allow_btn == 'true' ?
        <View style={styles.message_buttons}>
          <TouchableOpacity 
            disabled={disableBTN}
            onPress={() => refusePropose()}
            style={styles.message_btnRefuse}
          >
            <Text style={styles.message_btnText}>Recusar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            disabled={disableBTN}
            onPress={() => acceptPropose()}
            style={styles.message_btnAccept}
          >
            <Text style={styles.message_btnText}>Aceitar</Text>
          </TouchableOpacity>
        </View>
        :
        <View></View>
        }
      </View>
    </View>
  );
}


