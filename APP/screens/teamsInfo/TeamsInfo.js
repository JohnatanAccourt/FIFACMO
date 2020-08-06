import React, {Component, useState, useEffect} from 'react';
import { Image, Text, TouchableOpacity, View, AsyncStorage, FlatList, ScrollView, Modal, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useRoute } from '@react-navigation/native';
import NumericInput from '@wwdrew/react-native-numeric-textinput';
import styles from '../teamsInfo/styles';
import api from '../../services/api';
import Toast from 'react-native-tiny-toast';

export default function HomeScreen({ navigation }) {
  const [modal, setModal] = useState(false)
  const [valueEur, setValueEur] = useState('');
  const [proposeValue, setProposeValue] = useState('')
  const [customMessage, setCustomMessage] = useState('')
  const [teamIdReceived, setTeamIdReceived] = useState('');
  const [teamIdSent, setTeamIdSent] = useState('');
  const [idPlayer, setIdPlayer] = useState('');
  const [teamIMG, setTeamIMG] = useState('');
  const [nameTeam, setNameTeam] = useState('');
  const [playerValue, setPlayerValue] = useState('');
  
  const [namePlayer, setNamePlayer] = useState('');

  const route = useRoute();
  const team = route.params.team
  const players = team.players

  useEffect(() => {
    loadAsyncData();
  }, [])

  async function loadAsyncData(){
    try{
      setNameTeam(await AsyncStorage.getItem('@name_team'));
      setTeamIMG(await AsyncStorage.getItem('@teamIMG'));
      setTeamIdSent(await AsyncStorage.getItem('@team_id'));
      setTeamIdReceived(team.team_id);

    }catch(err){
      console.log(err);
    }

  }

  async function createNotification(){
    const data = {
      propose_value: proposeValue,
      message: customMessage,
      team_id_sent: teamIdSent,
      team_id_received: teamIdReceived,
      player_id: idPlayer,
      team_img: teamIMG,
      team_name: nameTeam,
      allow_btn: 'true',
      player_value: playerValue,
      player_name: namePlayer
    }

    try{
      await api.post('/notification', data, {
        headers:{
          Authorization: teamIdSent
        }
      })
      setModal(false);
      Toast.show('Proposta enviada ✔');

    }catch(err){
      let resp = err.response.data.error;

      if(resp === 'You`ve already propose for this player'){
        resp = 'Você já fez proposta por esse jogador';

      }else if(resp === "You haven't money enough"){
        resp = 'Você não tem dinheiro suficiente';

      } else if(resp === 'On negotiation with another team'){
        resp = 'Este jogador está em negociação com outro time'
      }
      
      setModal(false);
      Toast.show(resp);

    }
  }

  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalH1}>Realizar Proposta pelo {namePlayer}</Text>
            <Text style={styles.modalH2}>Proponha um valor:</Text>

            <NumericInput
              type='currency'
              locale='pt-BR'
              style={styles.modalTextInput}
              currency='EUR'
              value={proposeValue}
              onUpdate={proposeValue => setProposeValue(proposeValue)}
            />

            <Text style={styles.modalH2}>Mensagem Personalizada:</Text>

            <TextInput 
              style={styles.modalTextInput}
              multiline={true}
              numberOfLines={4}
              onChangeText={customMessage => setCustomMessage(customMessage)}
              defaultValue={customMessage}
            />

            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.modalbtnConfirm} onPress={() => createNotification()}>
                <Text style={styles.modalbtnTxt}> Confirmar </Text>
              </TouchableOpacity> 
              
              <TouchableOpacity style={styles.modalbtnCancel} onPress={() => setModal(false)}>
                <Text style={styles.modalbtnTxt}> Cancelar </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalH2}>Valor de mercado do {namePlayer} é: {Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(valueEur)}</Text>
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

      <View style={styles.back_logo}>
        <View style={styles.wrapperTitles}>
          <View style={styles.innerTitles}>
              <Text style={styles.titleNumber}>{team.leagues}</Text>
            <Text style={styles.titleText}>Ligas</Text>
          </View>

          <View style={styles.innerTitles}>
            <Text style={styles.titleNumber}>{team.cups}</Text>
            <Text style={styles.titleText}>Copas</Text>
          </View>
        </View>
      </View>

      <View style={styles.logoWrapper}>
        <Image style={styles.teamImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${team.team_img}`}}/> 
      </View>

      <View style={styles.wrapperNameTeam}>
        <Text style={styles.teamName}>{team.name_team}</Text>
      </View>

      <View style={styles.wrapperCircular}>
        <View style={styles.innerCircular}>
          <AnimatedCircularProgress 
            size={110}
            width={10}
            fill={team.attack}
            tintColor="#77F677"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}>
            <Text style={styles.overallNumber}>{team.attack}</Text>
            <Text style={styles.overallText}>Ataque</Text>
          </View>
        </View>

        <View style={styles.innerCircular}>
          <AnimatedCircularProgress 
            size={110}
            width={10}
            fill={team.midfield}
            tintColor="#00e0ff"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}> 
            <Text style={styles.overallNumber}>{team.midfield}</Text>
            <Text style={styles.overallText}>Meio</Text>
          </View>
        </View>

        <View style={styles.innerCircular}>
          <AnimatedCircularProgress 
            size={110}
            width={10}
            fill={team.defense}
            tintColor="#AE0F0F"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}>
            <Text style={styles.overallNumber}>{team.defense}</Text>
            <Text style={styles.overallText}>Defesa</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={players}
        contentContainerStyle={styles.fav_scroll}
        columnWrapperStyle={{justifyContent:'space-evenly'}}
        numColumns={2}
        keyExtractor={players => String(players.sofifa_id)}
        renderItem={({ item: players }) => (
          <View style={styles.squadContainer}>
            <View style={styles.squadBackground}></View>
            <View style={styles.removePlayer}>
              <TouchableOpacity onPress={() => [
                setModal(true), 
                setValueEur(players.value_eur),
                setIdPlayer(players.sofifa_id),
                setNamePlayer(players.short_name),
                setIdPlayer(players.sofifa_id),
                setPlayerValue(players.value_eur)
              ]}
              >
                <Ionicons style={styles.header_icon} name="md-chatbubbles" size={33}/>
              </TouchableOpacity>
            </View>
            <View style={styles.squadDesc}>
              <Text style={styles.squadOverall_Player}>{players.overall}</Text>
              <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${players.nationality}.png`}}/>
            </View>
            <View style={styles.squadInner}>
              <View style={styles.btnPlayer}>
                <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${players.sofifa_id}.png`}}/> 
              </View>
              <View style={styles.squadName_player}>
                <Text style={styles.squadName_player_txt}>{players.short_name}</Text>
              </View>

              <View style={styles.squadFooter}>
                {players.player_positions != 'GK' ?
                <View style={styles.squadFooter_Wrapper}>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.pace}</Text> PAC</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.shooting}</Text> SHO</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.passing}</Text> PAS</Text>             
                  </View>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.dribbling}</Text> PAC</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.defending}</Text> SHO</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.physic}</Text> PASS</Text>
                  </View>
                </View>
                  :
                <View style={styles.squadFooter_Wrapper}>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_diving}</Text> DIV</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_handling}</Text> HAN</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_kicking}</Text> KIC</Text>             
                  </View>
                  <View style={styles.squadFooter_Inner}>
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_reflexes}</Text> REF</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_speed}</Text> SPE</Text>             
                    <Text style={styles.squadText}><Text style={styles.squadTextBold}>{players.gk_positioning}</Text> POS</Text>
                  </View>
                </View>
                }
                <View style={styles.squadFooter_Inner}>
                  <Text style={styles.proposeText}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(players.value_eur)}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.footerInfo}>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerText_TeamMoney}>Verba</Text>
        </View>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerText_TeamValueNumber}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(team.budget)}</Text>
        </View>
      </View>

    </ScrollView>
  );
}
