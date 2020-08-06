import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { useState, useCallback} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import api from '../../services/api';

import styles from '../friends/styles';

export default function HomeScreen({ navigation }) {
  const [teams, setTeams] = useState([]);
  
  const [bestATA, setBestATA] = useState([]);
  const [bestMC, setBestMC] = useState([]);
  const [bestDEF, setBestDEF] = useState([]);

  const [moreRich, setMoreRich] = useState([]);
  const [moreExpensive, setMoreExpensive] = useState([]);
  const [morePoor, setMorePoor] = useState([]);

  const [moreCups, setMoreCups] = useState([]);
  const [moreLeagues, setMoreLeagues] = useState([]);

  const [valueEur, setValueEur] = useState('');
  const [shimmer, setShimmer] = useState(false);

  async function loadData(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const respSocial = await api.get('/social', {
      headers:{
        Authorization: team_id
      }
    });
    setTeams(respSocial.data)

    const respMoreMoney = await api.get('/social/moreMoney');
    setMoreRich(respMoreMoney.data[0])
    setMorePoor(respMoreMoney.data[1])

    const respBestOverall = await api.get('/social/bestOverall');
    setBestATA(respBestOverall.data[2])
    setBestMC(respBestOverall.data[1])
    setBestDEF(respBestOverall.data[0])

    const respMoreTitles = await api.get('/social/moreTitles');
    setMoreCups(respMoreTitles.data[0])
    setMoreLeagues(respMoreTitles.data[1])

    const responseExpensive = await api.get('/social/moreExpensive');
    setMoreExpensive(responseExpensive.data)
    setValueEur(responseExpensive.data.players[0])
    setShimmer(true)
  }

  function navigateToTeamsInfo(team){
    navigation.navigate('TeamsInfo', { team })
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
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
        <Text style={styles.header_title}>Social ⚽</Text>
      </View>
      <ScrollView overScrollMode={'never'}>
          <View style={styles.socialContent}>
          <View style={styles.socialDescListTeams}>
            <Text style={styles.socialDescListTeamsText}>Participantes do server</Text>
          </View>
          <FlatList
              contentContainerStyle={styles.listTeams}
              keyExtractor={team => String(team.team_id)}
              showsHorizontalScrollIndicator={false}
              overScrollMode={'never'}
              horizontal={true}
              data={teams}
              ListHeaderComponent={
                <TouchableOpacity>
                  <Image style={styles.mainSocialImg} source={require('../../assets/images/icon.png')}/>
                </TouchableOpacity>
              }
              renderItem={({ item: team }) => (
                <TouchableOpacity onPress={() => navigateToTeamsInfo(team)}>
                <ShimmerPlaceHolder style={[styles.socialImg, {borderRadius: 100}]} 
                  autoRun={true} 
                  visible={shimmer} 
                  colorShimmer={['#333', '#444', '#555']}
                >
                {/* <TouchableOpacity > */}
                  {team.team_img != null ?
                  <Image style={styles.socialImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${team.team_img}`}}/>
                  :
                  // <TouchableOpacity>
                    <View style={styles.socialWithoutImg}></View>
                  // </TouchableOpacity>
                  }
                {/* </TouchableOpacity> */}
                </ShimmerPlaceHolder>
                </TouchableOpacity>
              )}
            />
          <View style={styles.socialNews}>
            <View style={styles.socialBackgroundFront}></View>
            <Image style={styles.socialBackground} source={{uri:`https://cdn.pixabay.com/photo/2017/06/29/10/28/games-2453777_960_720.jpg`}}/>
            <View style={styles.socialWrapperConsoles}>
              <Image style={styles.socialPlaystationIMG} source={{uri:`https://www.iconsdb.com/icons/preview/white/consoles-ps-xxl.png`}}/>
              <Image style={styles.socialPC_IMG} source={{uri:`https://www.logolynx.com/images/logolynx/80/80a285c3c7c38cbe2235d86384696b92.png`}}/>
              <Image style={styles.socialXboxIMG} source={{uri:`https://www.freepnglogos.com/uploads/xbox-logo-green-png-0.png`}}/>
              <View style={styles.socialLine}></View>
              <Text style={styles.socialConsoleTxt}>Confira estatísticas gerais</Text>
            </View>

          </View>

          <View style={styles.socialTeamTitles}>
            <ShimmerPlaceHolder style={{width: '100%', height: 300}} 
              autoRun={true} 
              visible={shimmer} 
              colorShimmer={['#333', '#444', '#555']}
            >
            <View style={styles.socialTeam_TrophiesWrapper}>
              {moreCups.team_img != null ?
              <Image style={styles.socialImgBigTitles} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${moreCups.team_img}`}}/>
              :
              <TouchableOpacity>
                <View style={styles.socialWithoutImgBig}></View>
              </TouchableOpacity>
              }
              <View style={styles.socialWrapperDescTitles}>
                <Text style={styles.socialWrapperDescH1}>{moreCups.cups}</Text>
                <Text style={styles.socialWrapperDescH2}>{moreCups.name_team} Possui mais Copas</Text>
              </View>

            </View>
            </ShimmerPlaceHolder>

            <ShimmerPlaceHolder style={{width: '100%', height: 300}} 
              autoRun={true} 
              visible={shimmer} 
              colorShimmer={['#333', '#444', '#555']}
            >
            <View style={styles.socialTeam_TrophiesWrapper}>
              {moreLeagues.team_img != null ?
              <Image style={styles.socialImgBigTitles} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${moreLeagues.team_img}`}}/>
              :
              <TouchableOpacity>
                <View style={styles.socialWithoutImgBig}></View>
              </TouchableOpacity>
              }
              <View style={styles.socialWrapperDescTitles}>
                <Text style={styles.socialWrapperDescH1}>{moreLeagues.leagues}</Text>
                <Text style={styles.socialWrapperDescH2}>{moreLeagues.name_team} Possui mais Ligas</Text>
              </View>

            </View>
            </ShimmerPlaceHolder>
          </View>

          <View style={styles.socialDesc}>
            <Text style={styles.socialH3}>Melhor ATA</Text>
            <Text style={styles.socialH3}>Melhor MC</Text>
            <Text style={styles.socialH3}>Melhor DEF</Text>
          </View>

          <View style={styles.socialTeam}>
            <View style={styles.socialTeamWrapper}>
            <Text style={styles.socialOverall}>{bestATA.attack}</Text>
              <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                autoRun={true} 
                visible={shimmer} 
                colorShimmer={['#333', '#444', '#555']}
              >
              {bestATA.team_img != null ?
              <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${bestATA.team_img}`}}/>
              :
              <TouchableOpacity>
                <View style={styles.socialWithoutImgBig}></View>
              </TouchableOpacity>
              }
              </ShimmerPlaceHolder>
              <Text style={styles.socialH1}>{bestATA.name_team}</Text>
            </View>

            <View style={styles.socialTeamWrapper}>
              <Text style={styles.socialOverall}>{bestMC.midfield}</Text>
              <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                autoRun={true} 
                visible={shimmer} 
                colorShimmer={['#333', '#444', '#555']}
              >
              {bestMC.team_img != null ?
              <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${bestMC.team_img}`}}/>
              :
              <TouchableOpacity>
                <View style={styles.socialWithoutImgBig}></View>
              </TouchableOpacity>
              }
              </ShimmerPlaceHolder>
              <Text style={styles.socialH1}>{bestMC.name_team}</Text>
            </View>

            <View style={styles.socialTeamWrapper}>
              <Text style={styles.socialOverall}>{bestDEF.defense}</Text>
              <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                autoRun={true} 
                visible={shimmer} 
                colorShimmer={['#333', '#444', '#555']}
              >
              {bestDEF.team_img != null ?
              <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${bestDEF.team_img}`}}/>
              :
              <TouchableOpacity>
                <View style={styles.socialWithoutImgBig}></View>
              </TouchableOpacity>
              }
              </ShimmerPlaceHolder>
              <Text style={styles.socialH1}>{bestDEF.name_team}</Text>
            </View>
          </View>

          <View style={styles.socialDesc}>
            <Text style={styles.socialH3}>Mais Rico</Text>
            <Text style={styles.socialH3}>Mais Caro</Text>
            <Text style={styles.socialH3}>Mais Pobre</Text>
          </View>
          
          <View style={styles.socialTeam}>
            <View style={styles.socialTeamBigWrapper}>
                <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                  autoRun={true} 
                  visible={shimmer} 
                  colorShimmer={['#333', '#444', '#555']}
                >
                {moreRich.team_img != null ?
                <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${moreRich.team_img}`}}/>
                :
                <TouchableOpacity>
                  <View style={styles.socialWithoutImgBig}></View>
                </TouchableOpacity>
                }
                </ShimmerPlaceHolder>
                <View style={styles.socialH1Wrapper}>
                  <Text style={styles.socialH1_111}>{moreRich.name_team}</Text>
                  <Text style={styles.socialH1_222}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(moreRich.budget)}</Text>
                </View>
            </View>

            {/* <View style={styles.socialTeamBigWrapper}>
                <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                  autoRun={true} 
                  visible={shimmer} 
                  colorShimmer={['#333', '#444', '#555']}
                >
                {moreExpensive.team_img != null ?
                <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${moreExpensive.team_img}`}}/>
                :
                <TouchableOpacity>
                  <View style={styles.socialWithoutImgBig}></View>
                </TouchableOpacity>
                }
                </ShimmerPlaceHolder>
                <View style={styles.socialH1Wrapper}>
                  <Text style={styles.socialH1_111}>{moreExpensive.name_team}</Text>
                  {valueEur.total_amount == undefined || null ?
                    <Text style={styles.socialH1_222}>Não informado</Text>
                    :
                    <Text style={styles.socialH1_222}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(valueEur.total_amount)}</Text>
                  }
                </View>
            </View> */}

            <View style={styles.socialTeamBigWrapper}>
                <ShimmerPlaceHolder style={[styles.socialWithoutImgBig]} 
                  autoRun={true} 
                  visible={shimmer} 
                  colorShimmer={['#333', '#444', '#555']}
                >
                {morePoor.team_img != null ?
                <Image style={styles.socialImgBig} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${morePoor.team_img}`}}/>
                :
                <TouchableOpacity>
                  <View style={styles.socialWithoutImgBig}></View>
                </TouchableOpacity>
                }
                </ShimmerPlaceHolder>
                <View style={styles.socialH1Wrapper}>
                  <Text style={styles.socialH1_111}>{morePoor.name_team}</Text>
                  <Text style={styles.socialH1_222}>{Intl.NumberFormat('uk', {style: 'currency', currency: 'EUR'}).format(morePoor.budget)}</Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}



