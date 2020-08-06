import * as React from 'react';
import {Text, View, Picker, TextInput, Button, Image, AsyncStorage} from 'react-native';
import { DrawerItem , DrawerContentScrollView } from '@react-navigation/drawer'
import countryList from '../constants/coutryname';
import { Ionicons } from '@expo/vector-icons';
import styles from '../screens/home/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DrawerNavigator({props, navigation}) {
    const [nameUser, setNameUser] = React.useState('');
    const [userIMG, setUserIMG] = React.useState('');

    async function storage(){
        try{
            setNameUser(await AsyncStorage.getItem("@name_user"));
            setUserIMG(await AsyncStorage.getItem("@userIMG"));

        }catch(err){
            console.log(err)

        }

    }

    async function logOutAsync(){
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }
    
    React.useEffect(() => {
        storage()
    },[])
    
    return(
        <View style={styles.container_drawer}>
            <View style={styles.wrapperUserInfo}>
                <View style={styles.innerHeaderBtn}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('ClipboardScreen')}
                        style={styles.btn}
                    >
                        <Ionicons
                        style={{color: "#fff", alignSelf:"center"}}
                        name="md-settings"
                        size={25}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={() => navigation.navigate('ClipboardScreen')}
                        style={styles.btn}
                    >
                        <Ionicons
                        style={{color: "#fff", alignSelf:"center"}}
                        name="md-help-circle"
                        size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.innerUserInfo}>
                    <Image style={styles.userImg} source={{uri:`https://res.cloudinary.com/fifacmo/image/upload/${userIMG}`}}/> 
                    <Text style={styles.userText}>{nameUser}</Text>
                </View>
            </View>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.btn}
            >
                <Ionicons
                  style={{color: "#fff", alignSelf:"center"}}
                  name="md-home"
                  size={30}
                />
                <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SquadScreen')}
                style={styles.btn}
            >
                <Ionicons
                  style={{color: "#fff", alignSelf:"center"}}
                  name="md-football"
                  size={30}
                />
                <Text style={styles.btnText}>Elenco</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('FriendsScreen')}
                style={styles.btn}
            >
                <Ionicons
                  style={{color: "#fff", alignSelf:"center"}}
                  name="md-person"
                  size={30}
                />
                <Text style={styles.btnText}>Social</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ClipboardScreen')}
                style={styles.btn}
            >
                <Ionicons
                  style={{color: "#fff", alignSelf:"center"}}
                  name="md-book"
                  size={30}
                />
                <Text style={styles.btnText}>Prancheta</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => logOutAsync()}
                style={styles.btn}
            >
                <Ionicons
                  style={{color: "#fff", alignSelf:"center"}}
                  name="md-exit"
                  size={30}
                />
                <Text style={styles.btnText}>Sair</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>Feito por Johnatan Accourt</Text>

        </View>
    )
}