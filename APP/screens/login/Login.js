import { Ionicons } from '@expo/vector-icons';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Linking, Alert, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../login/styles';
import api from '../../services/api';

export default function Login({ Props, navigation }) {
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const url = 'https://github.com/JohnatanAccourt'

  async function handleLogin(){ 
    try{
      const response = await api.post(`/sessions`, { name_user: login, password_user: password });

      try{
        await AsyncStorage.setItem("@name_user", response.data.name_user.toString())
        await AsyncStorage.setItem("@userIMG", response.data.name_img.toString())
        
      } catch(error){ console.log('user', error) }

      try{
        await AsyncStorage.setItem("@team_id", response.data.team.team_id.toString())

      } catch(error){ console.log('team', error) }

      navigation.navigate('BottomTabNavigator', { screen: 'HomeScreen' })

      // try{
      //   await AsyncStorage.setItem("@user_id", userData.user_id.toString())
      //   await AsyncStorage.setItem("@name_user", userData.name_user.toString())
      //   await AsyncStorage.setItem("@email", userData.email.toString())
      //   await AsyncStorage.setItem("@userIMG", userData.name_img.toString())
      // } catch(error){ console.log('user', error) }

      // try{
      //   await AsyncStorage.setItem("@team_id", teamData.team_id.toString())
      //   await AsyncStorage.setItem("@name_team", teamData.name_team.toString())
      //   await AsyncStorage.setItem("@budget", teamData.budget.toString())
      //   await AsyncStorage.setItem("@leagues", teamData.leagues.toString())
      //   await AsyncStorage.setItem("@cups", teamData.cups.toString())
      //   await AsyncStorage.setItem("@defense", teamData.defense.toString())
      //   await AsyncStorage.setItem("@midfield", teamData.midfield.toString())
      //   await AsyncStorage.setItem("@attack", teamData.attack.toString())
      //   await AsyncStorage.setItem("@teamIMG", teamData.team_img.toString())
      // } catch(error){ console.log('team', error) }

    }catch(err){
      console.log(err)
      Alert.alert("Usuário ou Senha estão errados :(", "Tente novamente. Caso não possua um cadastro, tem um link abaixo do botão 'Entrar' escrito 'ou Cadastre-se' ")
      
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  const handlerFilter = () => {
    setModalVisible(!isModalVisible);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.gitIcon}
        onPress={toggleModal}
        activeOpacity={0.3}
      >
        <Ionicons
          name="logo-github" 
          size={40}
          color="white"
        />
      </TouchableOpacity>

      <View style={styles.wrapperImg}>
        <Image style={styles.player_img} source={require('../../assets/images/icon.png')}/>
        <View style={styles.background_opacity} />
        <Image style={styles.background_gif} source={require('../../assets/gif/login2.gif')}/>
      </View>

      <View style={styles.wrapperInput}>

        <View style={styles.innerInput}>
          <Text style={styles.label}>Username:</Text>
          <TextInput 
            style={styles.Input} 
            onChangeText={login => setlogin(login)}
            defaultValue={login}
          />
        </View>

        <View style={styles.innerInput}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput 
            style={styles.Input} 
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            defaultValue={password}
          />
        </View>

        <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => handleLogin()}
          // onPress={() => navigation.navigate('BottomTabNavigator', { screen: 'HomeScreen' })}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.register}>ou Cadastre-se</Text>   
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} >
        <View style={styles.modalContainer}>
          <View style={styles.wrapperDevImg}>
            <Image style={styles.developer_img} source={require('../../assets/images/Johnatan.jpg')}/>
          </View>
          <Text style={styles.h1}>Olá sou Johnatan, prazer.</Text>
          <Text style={styles.h3}>Front-End Developer,  responsável por desenvolver este projeto a fim de adquirir novas habilidades como nesse caso o React Native/Js. Espero que goste desse APP.</Text>
          <Text style={styles.h4}>
            Fique a vontade para olhar meus repositórios do <Text style={styles.bold} onPress={() => Linking.openURL(url)}>GitHub</Text>
          </Text>


          <TouchableOpacity style={styles.btnClose} onPress={toggleModal}>
            <Text style={styles.btnText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

