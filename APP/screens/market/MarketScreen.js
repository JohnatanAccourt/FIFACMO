import { Ionicons } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, useEffect, forceUpdate} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Picker, RefreshControl, Button, Alert, AsyncStorage } from 'react-native';
import { RectButton, ScrollView, FlatList } from 'react-native-gesture-handler';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import countryList from '../../constants/coutryname';
import Modal from 'react-native-modal';
import Toast from 'react-native-tiny-toast';
import { useFocusEffect } from '@react-navigation/native';


import api from '../../services/api';
import styles from '../market/styles';

export default function MarketScreen({ navigation }) {
  const [text, setText] = useState('');

  const [total, setTotal] = useState(0);
  const [filterTotal, setFilterTotal] = useState(0);
  const [searchTotal, setSearchTotal] = useState(0);

  const [loading, setLoading] = useState(false);
  const [shimmer, setShimmer] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [nationality, setNationality] = useState("");
  const [nation, setNation] = useState([]);

  const [players, setPlayers] = useState([]);
  const [filtPlayers, setFiltPlayers] = useState([]);
  const [searchPlayers, setSearchPlayers] = useState([]);
  const [page, setPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  
  const [selectedPositionValue, setPositionValue] = useState("");
  const [starSkills, setStarSkills] = useState("");
  const [selectedRealFace, setRealFace] = useState('');
  const [selectedWeakFoot, setWeakFoot] = useState('');

  const [textMinAge, setMinAge] = useState('');
  const [textMaxAge, setMaxAge] = useState('');
  
  const [textMinPlayerValue, setMinPlayerValue] = useState('');
  const [textMaxPlayerValue, setMaxPlayerValue] = useState('');

  const [playerMinOveral, setPlayerMinOveral] = useState('');
  const [playerMaxOveral, setPlayerMaxOveral] = useState('');

  const [listState, setListState] = useState('Carregando');
  const [respCount, setRespCount] = useState('');

  async function loadPlayers(){

    // console.log(total)
    // console.log(searchTotal)
    // console.log(filterTotal)

    if(loading){
      return;
    }

    if(total > 0 && players.length == total){
      return;
    }

    if(searchTotal > 0 && filtPlayers.length == searchTotal){
      return;
    }

    if(filterTotal > 0 && searchTotal.length == filterTotal){
      return;
    }

    setLoading(true);
    setRefresh(true);
    setTimeout(()=>{setShimmer(true)}, 4000)

    
    if(nationality === ''){
      const response = await api.get(`/market?page=${page}`);
      setPlayers([...players,...response.data]);
      setPage(page + 1);
      setTotal(response.headers['x-total-count']);
      if(players == 0) setListState('Nenhum resultado encontrado');
    }
    else if(nationality != ''){
      setText('')
      const responseFilter = await api.get(`/market/${nationality}?position=${selectedPositionValue}&skill=${starSkills}&realface=${selectedRealFace}&weakfoot=${selectedWeakFoot}&minage=${textMinAge}&maxage=${textMaxAge}&minvalue=${textMinPlayerValue}&maxvalue=${textMaxPlayerValue}&minOverall=${playerMinOveral}&maxOverall=${playerMaxOveral}`);
      setFiltPlayers(responseFilter.data);
      setFilterTotal(responseFilter.headers['x-total-count']);
      if(filtPlayers == 0) setListState('Nenhum resultado encontrado');
    }
    
    setLoading(false);
    setRefresh(false);
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlerFilter = () => {
    loadPlayers();
    setModalVisible(!isModalVisible);
  }

  function navigateToPlayerInfo(player){
    navigation.navigate('PlayerInfoMarket', { player })
  }

  async function handleFav(id){

    try{
      const data = {
        sofifa_id: id
      }
      
      await api.post('/favorites', data, { 
        headers:{ 
          Authorization : await AsyncStorage.getItem("@team_id")
        }
      })

     Toast.show('Adicionado com sucesso 👌')

    }catch(err){
      Toast.show('Jogador já está nos favoritos 😁')
      console.log(err) 
    }

  }

  async function handleAddToCart(id){
    
    try{
      const data = {
        sofifa_id: id
      }
      
      await api.post('/cart', data, { 
        headers:{ 
          Authorization : await AsyncStorage.getItem("@team_id")
       }
     })

     cartCount();
     Toast.show('Adicionado ao carrinho 👌')

    }catch(err){
      Toast.show('Jogador já está no carrinho 😁')
      console.log(err) 
    }
  }

  async function getNationality(id){
    const nationResponse = await api.get('/nationality')
    setNation(nationResponse.data)
  }

  const ListEmpty = () => {
      return(
        <View style={styles.listEmptyContainer}>
          <Text style={styles.listEmptyText}>{listState}</Text>
        </View>
      )
  }

  async function searchbar(){
    setRefresh(true);

    if(text.length > 1){
      setText(text)
      const responseSearch = await api.get(`/market/search/${text}`);
      setSearchPlayers(responseSearch.data);
      setSearchTotal(responseSearch.headers['x-total-count']);
      if(searchPlayers == 0) setListState('Nenhum resultado encontrado');
    }


    setRefresh(false);
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

  useEffect (() => {
    loadPlayers();
    getNationality();
    searchbar();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      cartCount();
    }, [])
  )

  return (
    <View style={styles.container}> 
      <View style={styles.header}>
        <TouchableOpacity 
              style={styles.btn_filter}
              onPress={toggleModal}
              activeOpacity={0.3}
            >
              <Ionicons
                style={styles.header_icon}
                name="md-options" 
                size={30}
              /> 
          </TouchableOpacity>

        <Text style={styles.header_title}>
          Mercado
        </Text>

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

      <View style={styles.filterContainer}>
        <Modal isVisible={isModalVisible} >
          <View style={styles.filterModal}>
            <View style={styles.wrapperModalTitle}>
              <TouchableOpacity style={styles.closeModal} onPress={toggleModal}>
                <Ionicons
                  style={styles.header_icon}
                  name="md-close" 
                  size={30}
                /> 
              </TouchableOpacity>
              <Text style={styles.textModal}>Filtrar busca:</Text>
              <Ionicons
                  style={{opacity: 0}}
                  name="md-close" 
                  size={30}
              />
            </View>
            <Picker
                mode={'dropdown'}
                style={styles.drawer_picker}
                selectedValue={nationality}
                onValueChange={(players, indexValue) => setNationality(players)}
            >
              <Picker.Item label="Escolha a nacionalidade" value="" />
              <Picker.Item label="Todas nacionalidades" value="1" />
              {nation.map((nt, index) => {
                return <Picker.Item label={nt.nationality} value={nt.nationality} key={index} />                
              })}
            </Picker>
            <View style={styles.drawer_yearold_wrapper}>
              <Picker
                  mode={'dropdown'}
                  style={styles.small_picker}
                  selectedValue={selectedPositionValue}
                  onValueChange={(itemValue2) => setPositionValue(itemValue2)}
              >
                  <Picker.Item label="Todas as posições" value="" />
                  <Picker.Item label="GOL" value="GK" />

                  <Picker.Item label="LD" value="RB" />
                  <Picker.Item label="ZAG" value="CB" />
                  <Picker.Item label="LE" value="LB" />

                  <Picker.Item label="ADD" value="RWB" />
                  <Picker.Item label="VOL" value="CDM" />
                  <Picker.Item label="ADE" value="LMB" />

                  <Picker.Item label="MD" value="RM" />
                  <Picker.Item label="MC" value="CM" />
                  <Picker.Item label="ME" value="LM" />
                  <Picker.Item label="MEI" value="CAM" />

                  <Picker.Item label="PD" value="RW" />
                  <Picker.Item label="MAD" value="RF" />
                  <Picker.Item label="SA" value="CF" />
                  <Picker.Item label="MAE" value="LF" />
                  <Picker.Item label="PE" value="LW" />
                  <Picker.Item label="ATA" value="ST" />
                  
              </Picker>

              <Picker
                  mode={'dropdown'}
                  style={styles.small_picker}
                  selectedValue={starSkills}
                  onValueChange={(itemValue3) => setStarSkills(itemValue3)}
              >
                  <Picker.Item label="Estrela Drible" value="" />
                  <Picker.Item label="5 Estrelas" value="5" />
                  <Picker.Item label="4 Estrelas" value="4" />
                  <Picker.Item label="3 Estrelas" value="3" />
                  <Picker.Item label="2 Estrelas" value="2" />
                  <Picker.Item label="1 Estrelas" value="1" />
                  
              </Picker>
            </View>

            <View style={styles.drawer_yearold_wrapper}>
              <Picker
                  mode={'dropdown'}
                  style={styles.small_picker}
                  selectedValue={selectedRealFace}
                  onValueChange={(itemFace) => setRealFace(itemFace)}
              >
                  <Picker.Item label="Face Real? (Essa opcão filtra ambos)" value="" />
                  <Picker.Item label="Sim" value="Yes" />
                  <Picker.Item label="Não" value="No" />
                  
              </Picker>

              <Picker
                  mode={'dropdown'}
                  style={styles.small_picker}
                  selectedValue={selectedWeakFoot}
                  onValueChange={(itemValue3) => setWeakFoot(itemValue3)}
              >
                  <Picker.Item label="Perna Ruim" value="" />
                  <Picker.Item label="5 Estrelas" value="5" />
                  <Picker.Item label="4 Estrelas" value="4" />
                  <Picker.Item label="3 Estrelas" value="3" />
                  <Picker.Item label="2 Estrelas" value="2" />
                  <Picker.Item label="1 Estrelas" value="1" />
                  
              </Picker>
            </View>

            <Text style={styles.drawer_h2}>Filtrar Idade:</Text>

            <View style={styles.drawer_yearold_wrapper}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="Idade Min"
                    onChangeText={textMinAge => setMinAge(textMinAge)}
                    defaultValue={textMinAge}         
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="Idade Max"
                    onChangeText={textMaxAge => setMaxAge(textMaxAge)}
                    defaultValue={textMaxAge}          
                />
            </View>

            <Text style={styles.drawer_h2}>Filtrar Preço:</Text>

            <View style={styles.drawer_yearold_wrapper}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="0"
                    onChangeText={textMinPlayerValue => setMinPlayerValue(textMinPlayerValue)}
                    defaultValue={textMinPlayerValue}          
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="215.000.000.000"
                    onChangeText={textMaxPlayerValue => setMaxPlayerValue(textMaxPlayerValue)}
                    defaultValue={textMaxPlayerValue}          
                />
            </View>

            <Text style={styles.drawer_h2}>Filtrar Overall:</Text>

            <View style={styles.drawer_yearold_wrapper}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="46"
                    onChangeText={playerMinOveral => setPlayerMinOveral(playerMinOveral)}
                    defaultValue={playerMinOveral}          
                />
                <TextInput
                    keyboardType='numeric'
                    style={styles.drawer_search}
                    placeholder="98"
                    onChangeText={playerMaxOveral => setPlayerMaxOveral(playerMaxOveral)}
                    defaultValue={playerMaxOveral}          
                />
            </View>
            
            <TouchableOpacity style={styles.BtnModal} onPress={handlerFilter}>
              <Text style={styles.textModal}>Filtrar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>

      <FlatList
        data={ 
          text.length > 1 ? searchPlayers : 
          nationality != '' ? filtPlayers : players
        }
        refreshControl={
          <RefreshControl onRefresh={loadPlayers}
          refreshing={refresh}/>
        }
        ListHeaderComponent={
          <TextInput
            style={styles.market_search}
            placeholder="Search bar quase pronta :P"//Pesquise o jogador que quiser :)
            onChangeText={text => setText(text)}
            onChange={searchbar}
            defaultValue={text}
          />
        }
        style={styles.fav_scroll}
        keyExtractor={player => String(player.sofifa_id)}
        onEndReached={loadPlayers}
        onEndReachedThreshold={0.3}
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
                  <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.sofifa_id}.png`}}/> 
                </TouchableOpacity>

                <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${player.nationality}.png`}}/>
                
              </View> 

              <View style={styles.fav_wrapperInformation}>
                <Text style={styles.fav_name}>{player.short_name}</Text>
                <Text style={styles.fav_information}>
                  {player.player_positions} | {player.age} Anos | {player.height_cm}Cm | {player.weight_kg}Kg
                </Text>
                <Text style={styles.fav_value}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(player.value_eur)}</Text>
                <TouchableOpacity style={[styles.fav_button]} onPress={() => handleFav(player.sofifa_id)}>
                  <Ionicons
                    style={{color: "#fff"}}
                    name="md-star"
                    size={20}
                  />
                  <Text style={styles.fav_addtext}>Add aos favoritos</Text>
              </TouchableOpacity>
              </View>

              <View style={styles.fav_wrapperButtons}> 
                <View style={      
                  player.overall < 50 ? styles.fav_overall00 :
                  player.overall < 60 ? styles.fav_overall60 : 
                  player.overall < 70 ? styles.fav_overall70 : 
                  player.overall < 80 ? styles.fav_overall80 : 
                  player.overall < 99 ? styles.fav_overall90 : styles.fav_overall90
                }>
                  
                  <Text style={styles.text_overall}>{player.overall}</Text>
                </View>

                <TouchableOpacity style={styles.fav_addToCart} onPress={() => handleAddToCart(player.sofifa_id)}>
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