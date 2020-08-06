import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, RefreshControl, AsyncStorage, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from '../clipboard/styles';
import api from '../../services/api'; 
import Toast from 'react-native-tiny-toast'
import { useFocusEffect } from '@react-navigation/native';
import Draggable from 'react-native-draggable';

import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default function StarScreen({ navigation }) {
  const [total, setTotal] = useState(0);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [listState, setListState] = useState('Carregando');
  const [modal, setModal] = useState(false);
  const [lockScroll, setLockScroll] = useState(true);

  const height = Dimensions.get('window').height - 100 

  async function loadPlayers(){
    const team_id = await AsyncStorage.getItem('@team_id');

    if(loading){
      return;
    }

    if(total > 0 && players.length == total){
      return;
    }

    setLoading(true);
    // setRefresh(true); 
    setTimeout(()=>{setShimmer(true)}, 4000)

    const response = await api.get(`/squad`, {
      headers:{
        Authorization: team_id 
      }
    })

    setPlayers(response.data);
    // setTotal(response.headers['x-total-count']); 
    setLoading(false);
    setRefresh(false);
    if(players == 0) setListState('Nenhum resultado encontrado, adicione jogadores em "Mercado"!');
  }

  async function handleFav(id){
    try{
      const team_id = await AsyncStorage.getItem('@team_id');
      await api.delete(`/favorites/${id}`, {
        headers:{
          Authorization: team_id
        }
      })

      loadPlayers();
      Toast.show('Contrato rescindido com sucesso ✔');

    }catch(err){
      Toast.show('Algo deu errado, tente novamente');
      console.log(err)
    }
  }

  function navigateToPlayerInfo(player){
    navigation.navigate('PlayerInfo', { player })
  }

  async function handleTerminateContract(){
    try{
      const team_id = await AsyncStorage.getItem('@team_id');
      await api.delete(`/squad/${idPlayer}`, {
        headers:{
          Authorization: team_id
        }
      })

      loadPlayers();
      setModal(false)
      Toast.show('Removido com sucesso ✌');

    }catch(err){
      console.log(err)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      loadPlayers();
    }, [])
  )

  return (
    <View style={styles.container}>
      {/* <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalH1}>Tem certeza?</Text>

            <Text style={styles.modalH2}>Deseja mesmo rescindir com o jogador? Você comprou este jogador por {Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(valueEur)} e vai ficar com 85% do valor {Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format((85 / 100) * valueEur)} e o restante vai ficar para o jogador, gostaria de proceder?</Text>

            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.modalbtnConfirm} onPress={() => handleTerminateContract()}>
                <Text style={styles.modalbtnTxt}> Confirmar </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.modalbtnCancel} onPress={() => setModal(false)}>
                <Text style={styles.modalbtnTxt}> Cancelar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}
      <View style={styles.header}>
        <TouchableOpacity
          title="Carrinho"
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons
            style={styles.header_icon}
            name="md-menu"
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.header_title}>FIFACMO</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.containerField}
        horizontal={true}
        overScrollMode={'never'}
        decelerationRate={0}
        scrollEnabled={lockScroll}
      >
        <View style={styles.bench}>
          <Text style={styles.textH1}>Banco de reservas:</Text>
        </View>
        <View style={styles.ContainerFieldIMG}>
          <Image style={styles.fieldIMG} source={require('../../assets/images/field_clipboard_.jpg')}/>
        </View>

        {players.map((player) => {
        return (
          <Draggable 
            key={player.players[0].sofifa_id} 
            x={0} y={0}
            minX={1} maxX={600}
            minY={Constants.statusBarHeight} maxY={height}

            onPressIn={() => setLockScroll(false)}
            onPressOut={() => setLockScroll(true)}

            onDragRelease={() => setLockScroll(true)}
            renderSize={70} renderColor='black'
            imageSource={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.players[0].sofifa_id}.png`}}
          />
        )
      })}

      </ScrollView>
      
    </View>
  );
}

