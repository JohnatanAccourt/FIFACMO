import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, useEffect, forceUpdate} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, RefreshControl, AsyncStorage } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from '../star/styles';
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
  const [respCount, setRespCount] = useState('');

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

    const response = await api.get(`/favorites`, {
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
      Toast.show('Removido com sucesso ✌');

    }catch(err){
      Toast.show('Algo deu errado, tente novamente');
      console.log(err)
    }
  }

  async function cartCount(){
    const team_id = await AsyncStorage.getItem('@team_id');

    const responsetotal = await api.get('/cart/total', {
      headers:{
        Authorization: team_id
      }

    })
    setRespCount(responsetotal.data[0][0])
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

  async function handleAddToCart(id){

    // if(id == undefined) return
    
    try{
      const data = {
        sofifa_id: id
      }
      
      await api.post('/cart', data, { 
        headers:{ 
          Authorization : await AsyncStorage.getItem("@team_id")
       }
     })

     loadPlayers();
     Toast.show('Adicionado ao carrinho 👌')

    }catch(err){
      Toast.show('Jogador já está no carrinho 😁')
      console.log(err) 
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      loadPlayers();
      cartCount();
    }, [])
  )

  return (
    <View style={styles.container}>
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

      <Text style={styles.h1}>Seus Jogador(es) Favoritos:</Text>

      <FlatList
        data={players}
        extraData={refresh}
        refreshControl={
          <RefreshControl onRefresh={loadPlayers}
          refreshing={refresh}/>
        }
        style={styles.fav_scroll}
        keyExtractor={player => String(player.players[0].sofifa_id)}
        onEndReached={loadPlayers}
        onEndReachedThreshold={0.2}
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
                <TouchableOpacity style={[styles.fav_button]} onPress={() => handleFav(player.players[0].sofifa_id)}>
                  <Ionicons
                    style={{color: "#fff"}}
                    name="md-star-outline"
                    size={20}
                  />
                  <Text style={styles.fav_addtext}>remover</Text>
              </TouchableOpacity>
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

                <TouchableOpacity style={styles.fav_addToCart} onPress={() => handleAddToCart(player.players[0].sofifa_id)}>
                  <Image style={styles.add_cart} source={require('../../assets/icon/add_cart.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </ShimmerPlaceHolder>
        )}
      />
    </View>
  );
}

