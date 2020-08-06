import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState, forceUpdate} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useFocusEffect } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import api from '../../services/api';
import styles from '../home/styles';

export default function HomeScreen({ navigation }) {
  const [respCount, setRespCount] = useState([]);
  const [respTeamValue, setRespTeamValue] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const [attack, setAttack] = useState(0);
  const [midfield, setMidfield] = useState(0);
  const [defense, setDefense] = useState(0);

  const [shimmer, setShimmer] = useState(false);

  async function loadInformations(){
    const team_id = await AsyncStorage.getItem('@team_id');
    await api.post(`/teamoverall/${team_id}`)

    const responseInfo = await api.get(`/sessions`, {
      headers:{
        Authorization: team_id
      }
    })


    await AsyncStorage.setItem("@budget", responseInfo.data.budget.toString())
    await AsyncStorage.setItem("@teamIMG", responseInfo.data.team_img.toString())
    await AsyncStorage.setItem("@name_team", responseInfo.data.name_team.toString())
    setTeamData(responseInfo.data)
    setAttack(responseInfo.data.attack)
    setMidfield(responseInfo.data.midfield)
    setDefense(responseInfo.data.defense)
    
    setShimmer(true)
  }

  async function cartCount(){
    const team_id = await AsyncStorage.getItem('@team_id');

    const responsetotal = await api.get('/cart/total', {
      headers:{
        Authorization: team_id
      }

    })
    setRespCount(responsetotal.data[0][0])
    setRespTeamValue(responsetotal.data[1][0])
  }

  useFocusEffect(
    React.useCallback(() => {
      loadInformations();
      cartCount();
    }, [])
  )

  return (
    <View style={styles.container}>
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

      <View style={styles.back_logo}>
        <View style={styles.wrapperTitles}>
          <View style={styles.innerTitles}>
            <ShimmerPlaceHolder style={[styles.innerTitles, {width: 50, height: 50}]} 
              autoRun={true} 
              visible={shimmer} 
              colorShimmer={['#333', '#444', '#555']}
            >
              <Text style={styles.titleNumber}>{teamData.leagues}</Text>
            </ShimmerPlaceHolder>
            <Text style={styles.titleText}>Ligas</Text>
          </View>

          <View style={styles.innerTitles}>
            <ShimmerPlaceHolder style={[styles.innerTitles, {width: 50, height: 50}]} 
              autoRun={true} 
              visible={shimmer} 
              colorShimmer={['#333', '#444', '#555']}
            >
              <Text style={styles.titleNumber}>{teamData.cups}</Text>
            </ShimmerPlaceHolder>
            <Text style={styles.titleText}>Copas</Text>
          </View>
        </View>
      </View>

      <View style={styles.logoWrapper}>
        <ShimmerPlaceHolder style={[styles.teamImg, {width: 130, height: 130, borderRadius: 100}]} 
          autoRun={true} 
          visible={shimmer} 
          colorShimmer={['#333', '#444', '#555']}
        >
        <Image style={styles.teamImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${teamData.team_img}`}}/> 
        </ShimmerPlaceHolder>
      </View>

      <View style={styles.wrapperNameTeam}>
        <ShimmerPlaceHolder style={[styles.teamImg, {width: '50%', height: 30, borderRadius: 100}]} 
          autoRun={true} 
          visible={shimmer} 
          colorShimmer={['#333', '#444', '#555']}
        >
          <Text style={styles.teamName}>{teamData.name_team}</Text>
        </ShimmerPlaceHolder>
      </View>

      <ShimmerPlaceHolder style={[styles.teamImg, {width: '90%', height: 130}]} 
        autoRun={true} 
        visible={shimmer} 
        colorShimmer={['#333', '#444', '#555']}
      >
      <View style={styles.wrapperCircular}>
        <View style={styles.innerCircular}>
          <AnimatedCircularProgress
            duration={2000} 
            size={110}
            width={10}
            fill={attack}
            tintColor="#77F677"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}>
            <Text style={styles.overallNumber}>{attack}</Text>
            <Text style={styles.overallText}>Ataque</Text>
          </View>
        </View>

        <View style={styles.innerCircular}>
          <AnimatedCircularProgress
            duration={4000} 
            size={110}
            width={10}
            fill={midfield}
            tintColor="#00e0ff"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}> 
            <Text style={styles.overallNumber}>{midfield}</Text>
            <Text style={styles.overallText}>Meio</Text>
          </View>
        </View>

        <View style={styles.innerCircular}>
          <AnimatedCircularProgress
            duration={4000} 
            size={110}
            width={10}
            fill={defense}
            tintColor="#AE0F0F"
            // onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#222"
          />
          <View style={styles.wrapperText}>
            <Text style={styles.overallNumber}>{defense}</Text>
            <Text style={styles.overallText}>Defesa</Text>
          </View>
        </View>
      </View>
      </ShimmerPlaceHolder>

      <View style={styles.footerInfo}>
        <View style={styles.footerWrapper}>
          <Text style={styles.footerText_TeamMoney}>Verba</Text>
          <Text style={styles.footerText_TeamValue}>Valor do Time</Text>
        </View>

        <ShimmerPlaceHolder style={[styles.teamImg, {width: '100%', height: '100%'}]} 
          autoRun={true} 
          visible={shimmer} 
          colorShimmer={['#333', '#444', '#555']}
        >
          <View style={styles.footerWrapper}>
            <Text style={styles.footerText_TeamValueNumber}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(teamData.budget)}</Text>
            <Text style={styles.footerText_TeamMoneyNumber}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(respTeamValue.total_squad)}</Text>
          </View>
        </ShimmerPlaceHolder>
      </View>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
