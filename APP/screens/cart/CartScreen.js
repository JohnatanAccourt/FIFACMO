import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, useEffect, forceUpdate} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, RefreshControl, AsyncStorage, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from '../cart/styles';
import api from '../../services/api';
import Toast from 'react-native-tiny-toast'
import { useFocusEffect } from '@react-navigation/native';

export default function StarScreen({ navigation }) {
  const [total, setTotal] = useState(0);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [listState, setListState] = useState('Carregando');
  const [respTotal, setRespTotal] = useState('');
  const [modal, setModal] = useState(false);
  const [budget, setBudget] = useState('');
  const [rest, setRest] = useState(0);

  async function loadPlayers(){
    const team_id = await AsyncStorage.getItem('@team_id');
    setBudget(await AsyncStorage.getItem("@budget"))
    
    setLoading(true);
    setTimeout(()=>{setShimmer(true)}, 2000)

    const response = await api.get(`/cart`, {
      headers:{
        Authorization: team_id 
      }
    })

    setPlayers(response.data);
    setLoading(false);
    setRefresh(false);
    if(players == 0) setListState('Nenhum resultado encontrado, adicione jogadores em "Mercado"!');

    const responsetotal = await api.get('/cart/total', {
      headers:{
        Authorization: team_id
      }
    })
    setRespTotal(responsetotal.data[0][0])
  }

  async function deletePlayer(id){
    try{
      const team_id = await AsyncStorage.getItem('@team_id');
      await api.delete(`/cart/${id}`, {
        headers:{
          Authorization: team_id
        }
      })

      loadPlayers();
      Toast.show('Removido do carrinho ✌');

    }catch(err){
      Toast.show('Algo deu errado, tente novamente');
      console.log(err)
    }
  }

  async function handleBuyCart(){
    const team_id = await AsyncStorage.getItem('@team_id');

    try{
      await api.post(`/squad/${team_id}`)
      loadPlayers()
      setModal(false)

    }catch(err){
      if((parseInt(budget) - parseInt(respTotal.total_amount)) < 0) return Alert.alert('Você não possui dinheiro suficiente.', 'Fiado só amanha!! 🤷‍♂️')
      console.log(err)
    }

  }

  function navigateToPlayerInfo(player){
    navigation.navigate('PlayerInfo', { player })
  }

  function ListEmpty(){
    return(
      <View style={styles.listEmptyContainer}>
        <Text style={styles.listEmptyText}>{listState}</Text>
      </View>
    )
  }

  useFocusEffect(
    React.useCallback(() => {
      loadPlayers(); 
    }, [])
  )

  return (
    <View style={styles.container}> 
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalH1}>Tem certeza?</Text>
            <View style={styles.modalWrapper}>
              <View style={styles.modalDesc}><Text style={styles.modalH2}> Preço do Carrinho: </Text></View>
              <View style={styles.modalPrice}><Text style={styles.modalH2}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(respTotal.total_amount)} </Text></View>
            </View>

            <View style={styles.modalWrapper}>
              <View style={styles.modalDesc}><Text style={styles.modalH2}> Você possui: </Text></View>
              <View style={styles.modalPrice}><Text style={styles.modalH2}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(budget)} </Text></View>
            </View>

            <View style={styles.modalWrapper}>
              <View style={styles.modalDesc}><Text style={styles.modalH2}> Vai restar: </Text></View>
              <View style={styles.modalPrice}><Text style={styles.modalH2}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(parseInt(budget) - parseInt(respTotal.total_amount))}</Text></View>
            </View>

            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.modalbtnConfirm} onPress={handleBuyCart}>
                <Text style={styles.modalbtnTxt}> Confirmar </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.modalbtnCancel} onPress={() => setModal(false)}>
                <Text style={styles.modalbtnTxt}> Cancelar </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Ionicons
          style={styles.header_icon}
          name="md-arrow-back"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header_title}>FIFACMO</Text>
      </View>

      {respTotal.total_amount != NaN ? 
      <Text style={styles.h1}>Preço total do Carrinho: { Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(respTotal.total_amount)}</Text>
      :
      <Text style={styles.h1}>Preço total do Carrinho: { Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(0)}</Text>
      }
      
      <FlatList
        data={players}
        extraData={refresh}
        refreshControl={<RefreshControl onRefresh={loadPlayers} refreshing={refresh}/>}
        style={styles.fav_scroll}
        keyExtractor={player => String(player.sofifa_id)}
        ListEmptyComponent={() => ListEmpty()}
        renderItem={({ item: player }) => (
          <ShimmerPlaceHolder style={[styles.fav_wrapper, {borderRadius: 10}]} autoRun={true} visible={shimmer} colorShimmer={['#333', '#444', '#555']}>
          <View style={styles.fav_container}>
            <View style={styles.fav_wrapper}>
              <View style={styles.player_IMG_COUNTRY}>
                <TouchableOpacity
                  title={"Informação do Jogador"}
                  onPress={() => navigateToPlayerInfo(player)}
                  activeOpacity={0.5}
                >
                  <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.players[0].sofifa_id}.png`}}/>
                </TouchableOpacity>

                <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${player.players[0].nationality}.png`}}/>
                
              </View> 

              <View style={styles.fav_wrapperInformation}>
                <Text style={styles.fav_name}>{player.players[0].short_name}</Text>
                <Text style={styles.fav_information}>
                  {player.players[0].player_positions} | {player.players[0].age} Anos | {player.players[0].height_cm}Cm | {player.players[0].weight_kg}Kg
                </Text>
                <Text style={styles.fav_value}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(player.players[0].value_eur)}</Text>
              </View>

              <View style={styles.fav_wrapperButtons}> 
                <View style={      
                  player.players[0].overall < 50 ? styles.fav_overall00 :
                  player.players[0].overall < 60 ? styles.fav_overall60 : 
                  player.players[0].overall < 70 ? styles.fav_overall70 : 
                  player.players[0].overall < 80 ? styles.fav_overall80 : 
                  player.players[0].overall < 99 ? styles.fav_overall90 : styles.fav_overall90
                }>
                  
                  <Text style={styles.text_overall}>{player.players[0].overall}</Text>
                </View>

                <TouchableOpacity style={styles.fav_removeFromCart} onPress={() => deletePlayer(player.players[0].sofifa_id)}>
                  <Image style={styles.add_cart} source={require('../../assets/icon/remove_cart.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </ShimmerPlaceHolder>
        )}
      />

      <TouchableOpacity style={styles.btn_Confirm} onPress={() => players != 0 ? setModal(true): Alert.alert('Não foi possível concluir a compra', 'Adicione pelo menos um jogador ao carrinho para efetuar a compra')}>
        <Text style={styles.txt_Confirm}>Concluir compra</Text>
      </TouchableOpacity>
    </View>
  );
}

