import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, AsyncStorage} from 'react-native';

import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { useFocusEffect } from '@react-navigation/native';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/home/HomeScreen';
import SquadScreen from '../screens/squad/SquadScreen';
import ClipboardScreen from '../screens/clipboard/ClipboardScreen';
import FriendsScreen from '../screens/friends/FriendsScreen';

import StarScreen from '../screens/star/StarScreen';
import MarketScreen from '../screens/market/MarketScreen';
import NotificationsScreen from '../screens/notifications/NotificationsScreen';
import DrawerNavigator from '../navigation/DrawerNavigator';

import styles from '../screens/home/styles';
import Constants from 'expo-constants';
import api from '../services/api';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function drawer(){
  return (
      <Drawer.Navigator 
        initialRouteName="HomeScreen"
        drawerContent={props => <DrawerNavigator {...props} />}
        drawerStyle={{
          backgroundColor: "#0066aa",
          marginTop: Constants.statusBarHeight,
        }}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="SquadScreen" component={SquadScreen} />
        <Drawer.Screen name="ClipboardScreen" component={ClipboardScreen} />
        <Drawer.Screen name="FriendsScreen" component={FriendsScreen} />
        
      </Drawer.Navigator>
  );
}

export default function BottomTabNavigator() {
  const [count, setCount] = React.useState('');

  async function loadData(){
    const team_id = await AsyncStorage.getItem('@team_id');
    const response = await api.get('/notification/count', {
      headers:{
        Authorization: team_id
      }
    })
    setCount(response.data)
    
  }

  useFocusEffect(
    React.useCallback(() => {
      loadData();
    }, [loadData])
  )

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        style:{backgroundColor:"#111"}
      }} 
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={drawer}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={StarScreen}
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
        }}
      /> 
      <BottomTab.Screen
        name="drawer"
        component={MarketScreen}
        options={{
          title: 'Mercado',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cart" />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notificações',
          tabBarIcon: ({ focused }) => (
            <View>
              <TabBarIcon focused={focused} name="md-mail"/>
              {count != 0 ?
              <Text style={styles.header_span}>
                {count}
              </Text>
              :
              <Text style={styles.header_span_0}>
              </Text>
              }
            </View>
          )
        }}
      />
    </BottomTab.Navigator>
    
  );
}