import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList, RefreshControl, AsyncStorage, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styles from '../squad/styles';
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

  const [modal, setModal] = useState(false);
  const [valueEur, setValueEur] = useState('');
  const [idPlayer, setIdPlayer] = useState('');

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
      setModal(false);
      Toast.show('Removido com sucesso ✌');

    }catch(err){
      console.log(err)
    }
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
      </Modal>
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

      <Text style={styles.h1}>Seu Grupo de jogadores:</Text>

      <FlatList
        data={players}
        extraData={refresh}
        refreshControl={<RefreshControl onRefresh={loadPlayers} refreshing={refresh}/>}
        style={styles.fav_scroll}
        ListEmptyComponent={() => ListEmpty()}
        columnWrapperStyle={{justifyContent:'space-evenly'}}
        numColumns={2}
        keyExtractor={player => String(player.players[0].sofifa_id)}
        renderItem={({ item: player }) => (
          <View style={styles.squadContainer}>
            
            <View style={styles.squadBackground}></View>
            <View style={styles.removePlayer}>
              <TouchableOpacity onPress={() => [
                setModal(true), 
                setValueEur(player.players[0].value_eur),
                setIdPlayer(player.players[0].sofifa_id)
              ]}
              >
                <Ionicons style={styles.header_icon} name="md-trash" size={33}/>
              </TouchableOpacity>
            </View>
            <View style={styles.squadDesc}>
              <Text style={styles.squadOverall_Player}>{player.players[0].overall}</Text>
              <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${player.players[0].nationality}.png`}}/>
            </View>
            <View style={styles.squadInner}>
              <TouchableOpacity style={styles.btnPlayer} onPress={() => navigateToPlayerInfo(player)}>
                <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.players[0].sofifa_id}.png`}}/> 
              </TouchableOpacity>
              <View style={styles.squadName_player}>
                <Text style={styles.squadName_player_txt}>{player.players[0].short_name}</Text>
              </View>

              <View style={styles.squadFooter}>
                {player.players[0].player_positions != 'GK' ?
                <View style={styles.squadFooter_Wrapper}>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].pace}</Text> PAC</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].shooting}</Text> SHO</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].passing}</Text> PAS</Text>             
                  </View>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].dribbling}</Text> PAC</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].defending}</Text> SHO</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].physic}</Text> PASS</Text>
                  </View>
                </View>
                  :
                <View style={styles.squadFooter_Wrapper}>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_diving}</Text> DIV</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_handling}</Text> HAN</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_kicking}</Text> KIC</Text>             
                  </View>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_reflexes}</Text> REF</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_speed}</Text> SPE</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{player.players[0].gk_positioning}</Text> POS</Text>
                  </View>
                </View>
                }
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

