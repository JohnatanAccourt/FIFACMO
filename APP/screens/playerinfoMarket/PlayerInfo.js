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

import styles from './styles';
import Colors from '../../constants/Colors';

export default function PlayerInfo({ Props, navigation }) {
  const [text, setText] = useState('');
  
  const route = useRoute();
  const player = route.params.player
  
  // translating to portuguese
  let preferredFoot = player.preferred_foot;

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
              player.overall < 50 ? styles.fav_overall00 :
              player.overall < 60 ? styles.fav_overall60 : 
              player.overall < 70 ? styles.fav_overall70 : 
              player.overall < 80 ? styles.fav_overall80 : 
              player.overall < 99 ? styles.fav_overall90 : styles.fav_overall90
            }> 
            <Text style={styles.text_overall}>{player.overall}</Text>
            <Image style={styles.player_country} source={{uri: `https://res.cloudinary.com/fifacmo/image/upload/flags/flag-of-${player.nationality}.png`}}/>
          </View>

          
          
          <View style={styles.playerInfo_basicInfo_wrapper}>
          <Image style={styles.player_img} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/minifaces/p${player.sofifa_id}.png`}}/>

            <View style={styles.playerInfo_basicInfo_inner}>
              <Text style={styles.playerInfo_basicInfo_name}>{player.short_name}</Text>
              <Text style={styles.playerInfo_basicInfo_info}>
              {player.player_positions} | {player.age} Anos | {player.height_cm}Cm | {player.weight_kg}Kg
              </Text>
              <Text style={styles.playerInfo_basicInfo_realClub}>Clube Real: {player.club}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.playerInfo_basicInfo_price}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(player.value_eur)}</Text>

        {player.player_positions === 'GK' ?
        <View style={styles.playerInfo_mainlyStats_container}>
          <View style={styles.playerInfo_mainlyStats_wrapper}>
            <View style={styles.playerInfo_mainlyStats_inner}>
              <View style={[styles.playerInfo_mainlyStats_Pace, {height: `${player.gk_diving}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_diving}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Shoot, {height: `${player.gk_handling}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_handling}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Pass, {height: `${player.gk_kicking}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_kicking}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Drible, {height: `${player.gk_reflexes}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_reflexes}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Defense, {height: `${player.gk_speed}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_speed}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Physic, {height: `${player.gk_positioning}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.gk_positioning}</Text>
              </View>

            </View>
          </View>
        </View>
        :
        <View style={styles.playerInfo_mainlyStats_container}>
          <View style={styles.playerInfo_mainlyStats_wrapper}>
            <View style={styles.playerInfo_mainlyStats_inner}>
              <View style={[styles.playerInfo_mainlyStats_Pace, {height: `${player.pace}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.pace}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Shoot, {height: `${player.shooting}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.shooting}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Pass, {height: `${player.passing}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.passing}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Drible, {height: `${player.dribbling}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.dribbling}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Defense, {height: `${player.defending}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.defending}</Text>
              </View>

              <View style={[styles.playerInfo_mainlyStats_Physic, {height: `${player.physic}%`}]}>
                <Text style={styles.playerInfo_mainlyStats_Overall}>{player.physic}</Text>
              </View>

            </View>
          </View>
        </View>
        }

        {player.player_positions === 'GK' ?
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
                player.weak_foot == 1 ? <RowStars one="md-star" two="md-star-outline" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.weak_foot == 2 ? <RowStars one="md-star" two="md-star" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.weak_foot == 3 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star-outline" five="md-star-outline"/> :
                player.weak_foot == 4 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star-outline"/> :
                player.weak_foot == 5 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/> : <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/>
              }
            </View>

            <View style={styles.playerInfo_perfil_skills}>
              <Image style={styles.playerInfo_img} source={require('../../assets/icon/habilidade.png')}/>
              <Text style={styles.playerInfo_h3}>Habilidade:</Text>
              {
                player.skill_moves == 1 ? <RowStars one="md-star" two="md-star-outline" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.skill_moves == 2 ? <RowStars one="md-star" two="md-star" three="md-star-outline" four="md-star-outline" five="md-star-outline"/> :
                player.skill_moves == 3 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star-outline" five="md-star-outline"/> :
                player.skill_moves == 4 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star-outline"/> :
                player.skill_moves == 5 ? <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/> : <RowStars one="md-star" two="md-star" three="md-star" four="md-star" five="md-star"/>
              }
            </View>

            <View style={styles.playerInfo_perfil_bestfoot}>
              <Image 
                style={styles.playerInfo_img} 
                source={
                player.preferred_foot == "Left" ?
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

              <MentalityOver name={"Cruzamento"} over={player.attacking_crossing.substring(0,2)} />
              <MentalityOver name={"Finalização"} over={player.attacking_finishing.substring(0,2)} />
              <MentalityOver name={"Prec. Cabeceio"} over={player.attacking_heading_accuracy.substring(0,2)} />
              <MentalityOver name={"Passe Curto"} over={player.attacking_short_passing.substring(0,2)} />
              <MentalityOver name={"Voleio"} over={player.attacking_volleys.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Habilidade</Text>
              </View>

              <MentalityOver name={"Drible"} over={player.skill_dribbling.substring(0,2)} />
              <MentalityOver name={"Curva"} over={player.skill_curve.substring(0,2)} />
              <MentalityOver name={"Precisão Falta"} over={player.skill_fk_accuracy.substring(0,2)} />
              <MentalityOver name={"Passe Longo"} over={player.skill_long_passing.substring(0,2)} />
              <MentalityOver name={"Ctrl de Bola"} over={player.skill_ball_control.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Movimento</Text>
              </View>

              <MentalityOver name={"Aceleração"} over={player.movement_acceleration.substring(0,2)} />
              <MentalityOver name={"Vel. Corrida"} over={player.movement_sprint_speed.substring(0,2)} />
              <MentalityOver name={"Agilidade"} over={player.movement_agility.substring(0,2)} />
              <MentalityOver name={"Reação"} over={player.movement_reactions.substring(0,2)} />
              <MentalityOver name={"Equilíbrio"} over={player.movement_balance.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Força</Text>
              </View>

              <MentalityOver name={"Força chute"} over={player.power_shot_power.substring(0,2)} />
              <MentalityOver name={"Salto"} over={player.power_jumping.substring(0,2)} />
              <MentalityOver name={"Vigor/Stamina"} over={player.power_stamina.substring(0,2)} />
              <MentalityOver name={"Força"} over={player.power_strength.substring(0,2)} />
              <MentalityOver name={"Chute de longe"} over={player.power_long_shots.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Mentalidade</Text>
              </View>

              <MentalityOver name={"Agressão"} over={player.mentality_aggression.substring(0,2)} />
              <MentalityOver name={"Interceptação"} over={player.mentality_interceptions.substring(0,2)} />
              <MentalityOver name={"Ment. Posição"} over={player.mentality_positioning.substring(0,2)} />
              <MentalityOver name={"Visão"} over={player.mentality_vision.substring(0,2)} />
              <MentalityOver name={"Penalidades"} over={player.mentality_penalties.substring(0,2)} />
              <MentalityOver name={"Compostura"} over={player.mentality_composure.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Defesa</Text>
              </View>

              <MentalityOver name={"Marcação"} over={player.defending_marking.substring(0,2)} />
              <MentalityOver name={"Resistência"} over={player.defending_standing_tackle.substring(0,2)} />
              <MentalityOver name={"Manter em Pé"} over={player.defending_sliding_tackle.substring(0,2)} />
            </View>

            <View style={styles.playerInfo_mentality_Table}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Catando no gol</Text>
              </View>

              <MentalityOver name={"Mergulho"} over={player.goalkeeping_diving.substring(0,2)} />
              <MentalityOver name={"Hab. Mãos"} over={player.goalkeeping_handling.substring(0,2)} />
              <MentalityOver name={"Chutão"} over={player.goalkeeping_kicking.substring(0,2)} />
              <MentalityOver name={"Posição no gol"} over={player.goalkeeping_positioning.substring(0,2)} />
              <MentalityOver name={"Reflexo"} over={player.goalkeeping_reflexes.substring(0,2)} />

            </View>

            <View style={styles.playerInfo_mentality_Especiality}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Traço do jogador</Text>
              </View>

              <View style={styles.playerInfo_mentality_data_traits}>
                <Traits trait={player.player_traits}/>
              </View>
            </View>


            <View style={styles.playerInfo_mentality_Especiality}>
              <View style={styles.playerInfo_mentality_header}>
                <Text style={styles.mentality_h1}>Especialidade do Jogador</Text>
              </View>

              <View style={styles.playerInfo_mentality_data_traits}>
                <Traits trait={player.player_tags}/>
              </View>
            </View>

            <Text style={styles.mentality_field_h1}>Overall em outras Posições</Text>

            <View style={styles.mentality_field_container}>
              <Image style={styles.field_img} source={require('../../assets/images/field.jpg')}/>
              <View style={styles.mentality_field_positions}>
                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ATE" overallInEachPosition={player.ls}/>
                  <FindOverall positionInField="ATA" overallInEachPosition={player.st}/>
                  <FindOverall positionInField="ATD" overallInEachPosition={player.rs}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="PE" overallInEachPosition={player.lw}/>
                  <FindOverall positionInField="MAE" overallInEachPosition={player.lf}/>
                  <FindOverall positionInField="SA" overallInEachPosition={player.cf}/>
                  <FindOverall positionInField="MAD" overallInEachPosition={player.rf}/>
                  <FindOverall positionInField="PD" overallInEachPosition={player.rw}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="MEE" overallInEachPosition={player.lam}/>
                  <FindOverall positionInField="MEI" overallInEachPosition={player.cam}/>
                  <FindOverall positionInField="MED" overallInEachPosition={player.ram}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ME" overallInEachPosition={player.lm}/>
                  <FindOverall positionInField="MCE" overallInEachPosition={player.lcm}/>
                  <FindOverall positionInField="MC" overallInEachPosition={player.cm}/>
                  <FindOverall positionInField="MCD" overallInEachPosition={player.rcm}/>
                  <FindOverall positionInField="MD" overallInEachPosition={player.rm}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="ADE" overallInEachPosition={player.lwb}/>
                  <FindOverall positionInField="VLD" overallInEachPosition={player.ldm}/>
                  <FindOverall positionInField="VOL" overallInEachPosition={player.cdm}/>
                  <FindOverall positionInField="VLD" overallInEachPosition={player.rdm}/>
                  <FindOverall positionInField="ADD"overallInEachPosition={player.rwb}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="LE" overallInEachPosition={player.lb}/>
                  <FindOverall positionInField="ZGE" overallInEachPosition={player.lcb}/>
                  <FindOverall positionInField="ZAG" overallInEachPosition={player.cb}/>
                  <FindOverall positionInField="ZGD" overallInEachPosition={player.rcb}/>
                  <FindOverall positionInField="LD"overallInEachPosition={player.rb}/>
                </View>

                <View style={styles.mentality_field_position}>
                  <FindOverall positionInField="GOL"overallInEachPosition={player.goalkeeping_handling}/>
                </View>
                
              </View>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
}

