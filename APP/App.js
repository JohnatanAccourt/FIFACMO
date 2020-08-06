import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button, AsyncStorage} from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Colors from './constants/Colors';

import CartScreen from './screens/cart/CartScreen';
import PlayerInfoMarket from './screens/playerinfoMarket/PlayerInfo';
import TeamsInfo from './screens/teamsInfo/TeamsInfo';
import PlayerInfo from './screens/playerinfo/PlayerInfo';
import MessageScreen from './screens/message/MessageScreen';
import Login from './screens/login/Login';
import Register from './screens/register/Register';
import RegisterTeam from './screens/registerTeam/RegisterTeam';
// import SquadScreen from './screens/squad/SquadScreen';
// import DrawerFilter from './navigation/drawer/drawerFilter';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [isLogged, setIsLogged] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  async function loadUser(navigation){
    setIsLogged(await AsyncStorage.getItem("@name_user"))
    // if(isLogged != null){
    //   navigation.navigate('BottomTabNavigator', { screen: 'HomeScreen' })
    // }

  }
  React.useEffect(() => {
    loadUser();

    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

 

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
          <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            {isLogged == null ? (
            <>
              <Stack.Screen 
                name="Login" 
                component={Login}
              />
              <Stack.Screen 
                name="Register" 
                component={Register}
              />
              <Stack.Screen
                name="RegisterTeam"
                component={RegisterTeam}
              />
              <Stack.Screen 
                name="BottomTabNavigator" 
                component={BottomTabNavigator}
              />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
              />
              <Stack.Screen
                name="PlayerInfoMarket"
                component={PlayerInfoMarket}
              />
              <Stack.Screen
                name="TeamsInfo"
                component={TeamsInfo}
              />
              <Stack.Screen
                name="PlayerInfo"
                component={PlayerInfo}
              />
              <Stack.Screen
                name="Message"
                component={MessageScreen}
              />
            </>):(
            <>
              <Stack.Screen 
                name="BottomTabNavigator" 
                component={BottomTabNavigator}
              />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
              />
              <Stack.Screen
                name="PlayerInfoMarket"
                component={PlayerInfoMarket}
              />
              <Stack.Screen
                name="TeamsInfo"
                component={TeamsInfo}
              />
              <Stack.Screen
                name="PlayerInfo"
                component={PlayerInfo}
              />
              <Stack.Screen
                name="Message"
                component={MessageScreen}
              />
              <Stack.Screen 
                name="Login" 
                component={Login}
              />
              <Stack.Screen 
                name="Register" 
                component={Register}
              />
              <Stack.Screen
                name="RegisterTeam"
                component={RegisterTeam}
              />
            </>)}
            
          </Stack.Navigator>
            
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
  },
});
