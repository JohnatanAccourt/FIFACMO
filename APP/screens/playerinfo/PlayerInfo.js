import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

import RowStars from '../../components/RowStars';
import MentalityOver from '../../components/MentalityOver';
import Traits from '../../components/Traits';
import FindOverall from '../../components/FieldOverall';

import styles from '../playerinfo/styles';
import Colors from '../../constants/Colors';

export default function PlayerInfo({ Props, navigation }) {
  const [text, setText] = useState('');
  
  const route = useRoute();
  const player = route.params.player
  
  // translating to portuguese
  let preferredFoot = player.players[0].preferred_foot;

  if(preferredFoot === "Right"){
    preferredFoot = "Direita";
  } else if(preferredFoot === "Left"){
    preferredFoot = "Esquerda";
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
        <TouchableOpacity>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.playerInfo_basicInfo_container}>
          <View style={      
              player.players[0].overall < 50 ? styles.fav_overall00 :
              player.players[0].overall < 60 ? styles.fav_overall60 : 
              player.players[0].overall < 70 ? styles.fav_overall70 : 
              player.players[0].overall < 80 ? styles.fav_overall80 : 
              player.players[0].overall < 99 ? styles.fav_overall90 : styles.fav_overall90
            }> 
            <Text style={styles.text_overall}>{player.players[0].overall}</Text>
            <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${player.players[0].nationality}.png`}}/>
          </View>

          
          
          <View style={styles.playerInfo_basicInfo_wrapper}>
          <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.players[0].sofifa_id}.png`}}/>

            <View style={styles.playerInfo_basicInfo_inner}>
              <Text style={styles.playerInfo_basicInfo_name}>{player.players[0].short_name}</Text>
              <Text style={styles.playerInfo_basicInfo_info}>
              {player.players[0].player_positions} | {player.players[0].age} Anos | {player.players[0].height_cm}Cm | {player.players[0].weight_kg}Kg
              </Text>
              <Text style={styles.playerInfo_basicInfo_realClub}>Clube Real: {player.players[0].club}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.playerInfo_basicInfo_price}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(player.players[0].value_eur)}</Text>

        {player.players[0].player_positions === 'GK' ?
        <View style={styles.playerInfo_mainlyStats_container}>
          <View style={styles.playerInfo_mainlyStats_wrapper}>
            <View style={styles.playerInfo_mainlyStats_inner}>
              <View style={[styles.playerInfo_mainlyStats_Pace, {height: `${player.players[0].gk_diving}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_diving}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Shoot, {height: `${player.players[0].gk_handling}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_handling}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Pass, {height: `${player.players[0].gk_kicking}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_kicking}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Drible, {height: `${player.players[0].gk_reflexes}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_reflexes}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Defense, {height: `${player.players[0].gk_speed}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_speed}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Physic, {height: `${player.players[0].gk_positioning}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].gk_positioning}</Text>
              </View>

            </View>
          </View>
        </View>
        :
        <View style={styles.playerInfo_mainlyStats_container}>
          <View style={styles.playerInfo_mainlyStats_wrapper}>
            <View style={styles.playerInfo_mainlyStats_inner}>
              <View style={[styles.playerInfo_mainlyStats_Pace, {height: `${player.players[0].pace}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].pace}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Shoot, {height: `${player.players[0].shooting}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].shooting}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Pass, {height: `${player.players[0].passing}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].passing}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Drible, {height: `${player.players[0].dribbling}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].dribbling}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Defense, {height: `${player.players[0].defending}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].defending}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Physic, {height: `${player.players[0].physic}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.players[0].physic}</Text>
              </View>

            </View>
          </View>
        </View>
        }

        {player.players[0].player_positions === 'GK' ?
        <View style={styles.playerInfo_footer}> 
          <Text style={styles.playerInfo_footer_text}>DIVID..</Text>
          <Text style={styles.playerInfo_footer_text}>MANUS..</Text>
          <Text style={styles.playerInfo_footer_text}>CHUTÃO</Text>
          <Text style={styles.playerInfo_footer_text}>REFLEXO</Text>
          <Text style={styles.playerInfo_footer_text}>VELOC..</Text>
          <Text style={styles.playerInfo_footer_text}>POSIC..</Text>
        </View>
        :
        <View style={styles.playerInfo_footer}> 
          <Text style={styles.playerInfo_footer_text}>PIQUE</Text>
          <Text style={styles.playerInfo_footer_text}>CHUTE</Text>
          <Text style={styles.playerInfo_footer_text}>PASSE</Text>
          <Text style={styles.playerInfo_footer_text}>DRIBLE</Text>
          <Text style={styles.playerInfo_footer_text}>DEFESA</Text>
          <Text style={styles.playerInfo_footer_text}>FÍSICO</Text>
        </View>
        }


        <View style={styles.playerInfo_perfil_container}>
          <View style={styles.playerInfo_perfil_wrapper}>
            <View style={styles.playerInfo_perfil_weakfoot}>
              <Image style={styles.playerInfo_img} source={require('../../assets/icon/pernaruim.png')}/>
              <Text style={styles.playerInfo_h3}>Perna ruim:</Text>
              {
                player.players[0].weak_foot == 1 ? <RowStars one="md-star" two="md-star-outline" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].weak_foot == 2 ? <RowStars one="md-star" two="md-star" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].weak_foot == 3 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].weak_foot == 4 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star-outline"/> :
                player.players[0].weak_foot == 5 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/> : <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/>
              }
            </View>

            <View style={styles.playerInfo_perfil_skills}>
              <Image style={styles.playerInfo_img} source={require('../../assets/icon/habilidade.png')}/>
              <Text style={styles.playerInfo_h3}>Habilidade:</Text>
              {
                player.players[0].skill_moves == 1 ? <RowStars one="md-star" two="md-star-outline" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].skill_moves == 2 ? <RowStars one="md-star" two="md-star" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].skill_moves == 3 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star-outline" five="md-star-outline"/> :
                player.players[0].skill_moves == 4 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star-outline"/> :
                player.players[0].skill_moves == 5 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/> : <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/>
              }
            </View>

            <View style={styles.playerInfo_perfil_bestfoot}>
              <Image 
                style={styles.playerInfo_img} 
                source={
                player.players[0].preferred_foot == "Left" ?
                  require(`../../assets/icon/Left.png`):
                  require(`../../assets/icon/Right.png`) 
                }
              />
              <Text style={styles.playerInfo_h3}>Perna boa:</Text>
              <Text style={styles.playerInfo_h3}>{preferredFoot}</Text>
            </View>
          </View>
        </View>

        <View style={styles.playerInfo_mentality_container}>
          <View style={styles.playerInfo_mentality_wrapper}>
            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Ataque</Text>
              </View>

              <MentalityOver name={"Cruzamento"} over={player.players[0].attacking_crossing.substring(0,2)} />
              <MentalityOver name={"Finalização"} over={player.players[0].attacking_finishing.substring(0,2)} />
              <MentalityOver name={"Prec. Cabeceio"} over={player.players[0].attacking_heading_accuracy.substring(0,2)} />
              <MentalityOver name={"Passe Curto"} over={player.players[0].attacking_short_passing.substring(0,2)} />
              <MentalityOver name={"Voleio"} over={player.players[0].attacking_volleys.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Habilidade</Text>
              </View>

              <MentalityOver name={"Drible"} over={player.players[0].skill_dribbling.substring(0,2)} />
              <MentalityOver name={"Curva"} over={player.players[0].skill_curve.substring(0,2)} />
              <MentalityOver name={"Precisão Falta"} over={player.players[0].skill_fk_accuracy.substring(0,2)} />
              <MentalityOver name={"Passe Longo"} over={player.players[0].skill_long_passing.substring(0,2)} />
              <MentalityOver name={"Ctrl de Bola"} over={player.players[0].skill_ball_control.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Movimento</Text>
              </View>

              <MentalityOver name={"Aceleração"} over={player.players[0].movement_acceleration.substring(0,2)} />
              <MentalityOver name={"Vel. Corrida"} over={player.players[0].movement_sprint_speed.substring(0,2)} />
              <MentalityOver name={"Agilidade"} over={player.players[0].movement_agility.substring(0,2)} />
              <MentalityOver name={"Reação"} over={player.players[0].movement_reactions.substring(0,2)} />
              <MentalityOver name={"Equilíbrio"} over={player.players[0].movement_balance.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Força</Text>
              </View>

              <MentalityOver name={"Força chute"} over={player.players[0].power_shot_power.substring(0,2)} />
              <MentalityOver name={"Salto"} over={player.players[0].power_jumping.substring(0,2)} />
              <MentalityOver name={"Vigor/Stamina"} over={player.players[0].power_stamina.substring(0,2)} />
              <MentalityOver name={"Força"} over={player.players[0].power_strength.substring(0,2)} />
              <MentalityOver name={"Chute de longe"} over={player.players[0].power_long_shots.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Mentalidade</Text>
              </View>

              <MentalityOver name={"Agressão"} over={player.players[0].mentality_aggression.substring(0,2)} />
              <MentalityOver name={"Interceptação"} over={player.players[0].mentality_interceptions.substring(0,2)} />
              <MentalityOver name={"Ment. Posição"} over={player.players[0].mentality_positioning.substring(0,2)} />
              <MentalityOver name={"Visão"} over={player.players[0].mentality_vision.substring(0,2)} />
              <MentalityOver name={"Penalidades"} over={player.players[0].mentality_penalties.substring(0,2)} />
              <MentalityOver name={"Compostura"} over={player.players[0].mentality_composure.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Defesa</Text>
              </View>

              <MentalityOver name={"Marcação"} over={player.players[0].defending_marking.substring(0,2)} />
              <MentalityOver name={"Resistência"} over={player.players[0].defending_standing_tackle.substring(0,2)} />
              <MentalityOver name={"Manter em Pé"} over={player.players[0].defending_sliding_tackle.substring(0,2)} />
            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Catando no gol</Text>
              </View>

              <MentalityOver name={"Mergulho"} over={player.players[0].goalkeeping_diving.substring(0,2)} />
              <MentalityOver name={"Hab. Mãos"} over={player.players[0].goalkeeping_handling.substring(0,2)} />
              <MentalityOver name={"Chutão"} over={player.players[0].goalkeeping_kicking.substring(0,2)} />
              <MentalityOver name={"Posição no gol"} over={player.players[0].goalkeeping_positioning.substring(0,2)} />
              <MentalityOver name={"Reflexo"} over={player.players[0].goalkeeping_reflexes.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Especiality}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Traço do jogador</Text>
              </View>

              <View style={styles.playerInfo_mentality_data_traits}>
                <Traits trait={player.players[0].player_traits}/>
              </View>
            </View>


            <View style={styles.playerInfo_mentality_Especiality}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Especialidade do Jogador</Text>
              </View>

              <View style={styles.playerInfo_mentality_data_traits}>
                <Traits trait={player.players[0].player_tags}/>
              </View>
            </View>

            <Text style={styles.mentality_field_h1}>Overall em outras Posições</Text>

            <View style={styles.mentality_field_container}>
              <Image style={styles.field_img} source={require('../../assets/images/field.jpg')}/>
              <View style={styles.mentality_field_positions}>
                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ATE" overallInEachPosition={player.players[0].ls}/>
                  <FindOverall positionInField="ATA" overallInEachPosition={player.players[0].st}/>
                  <FindOverall positionInField="ATD" overallInEachPosition={player.players[0].rs}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="PE" overallInEachPosition={player.players[0].lw}/>
                  <FindOverall positionInField="MAE" overallInEachPosition={player.players[0].lf}/>
                  <FindOverall positionInField="SA" overallInEachPosition={player.players[0].cf}/>
                  <FindOverall positionInField="MAD" overallInEachPosition={player.players[0].rf}/>
                  <FindOverall positionInField="PD" overallInEachPosition={player.players[0].rw}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="MEE" overallInEachPosition={player.players[0].lam}/>
                  <FindOverall positionInField="MEI" overallInEachPosition={player.players[0].cam}/>
                  <FindOverall positionInField="MED" overallInEachPosition={player.players[0].ram}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ME" overallInEachPosition={player.players[0].lm}/>
                  <FindOverall positionInField="MCE" overallInEachPosition={player.players[0].lcm}/>
                  <FindOverall positionInField="MC" overallInEachPosition={player.players[0].cm}/>
                  <FindOverall positionInField="MCD" overallInEachPosition={player.players[0].rcm}/>
                  <FindOverall positionInField="MD" overallInEachPosition={player.players[0].rm}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ADE" overallInEachPosition={player.players[0].lwb}/>
                  <FindOverall positionInField="VLD" overallInEachPosition={player.players[0].ldm}/>
                  <FindOverall positionInField="VOL" overallInEachPosition={player.players[0].cdm}/>
                  <FindOverall positionInField="VLD" overallInEachPosition={player.players[0].rdm}/>
                  <FindOverall positionInField="ADD"overallInEachPosition={player.players[0].rwb}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="LE" overallInEachPosition={player.players[0].lb}/>
                  <FindOverall positionInField="ZGE" overallInEachPosition={player.players[0].lcb}/>
                  <FindOverall positionInField="ZAG" overallInEachPosition={player.players[0].cb}/>
                  <FindOverall positionInField="ZGD" overallInEachPosition={player.players[0].rcb}/>
                  <FindOverall positionInField="LD"overallInEachPosition={player.players[0].rb}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="GOL"overallInEachPosition={player.players[0].goalkeeping_handling}/>
                </View>
                
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}

