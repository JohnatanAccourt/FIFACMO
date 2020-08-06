import { Ionicons } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Linking, Alert, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../registerTeam/styles';
import api from '../../services/api';
import Constants from 'expo-constants';
import * as Permitions from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';

export default function registerTeam({ Props, navigation }) {
  const [team, setTeam] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamVerification , setTeamVerification] = useState('');
  const [imageVerification,  setImageVerification] = useState('');

  const [uploadIMG, setUploadIMG] = useState('');
  const [uri, seturi] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const url = 'https://github.com/JohnatanAccourt';

  async function imgPickerCall(){
    if(Constants.platform.ios){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if(status != 'granted'){
        Alert("Para usar a câmera precisamos de sua permissão.");
        return; 
      }
    }

    const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1,1],
        quality: 0.5
    });

    if(data.cancelled || !data.uri){
      return;
    }

    setFileName(data.uri.split('/').pop())
    seturi(data.uri)
    setUploadIMG(data)
    setFileType(`test/${data.uri.split(".")[1]}`)

  }

  async function handleRegister(){

    try{

      let newFile = {
        uri: uri,
        type: fileType,
        name: fileName
      }

      const IMGdata = new FormData();
      IMGdata.append('file', newFile);
      IMGdata.append('upload_preset', 'fifacmoPreset');
      IMGdata.append('cloud_name', 'fifacmo')

      const resp = await Axios.post('https://api.cloudinary.com/v1_1/fifacmo/image/upload', IMGdata);
      console.log(resp)

    
      const data = {
        name_team: team,
        team_img: fileName
      }

      await api.post('/registerTeam', data, { 
        headers:{ 
          Authorization : await AsyncStorage.getItem("@userID")
       }
     })

     navigation.navigate('Login')

    }catch(err){
      if(fileName.length == 0) setImageVerification("Imagem do seu time é obrigatório !")
      if(team.length == 0) setTeamVerification('Coloque o nome do seu time')
      
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

      <View style={styles.wrapperInput}>
        <Image style={styles.player_img} source={uploadIMG ? {uri: uploadIMG.uri} : require('../../assets/images/user.png')}/>
        <Text style={styles.labelIMG}>{imageVerification}</Text>
        <TouchableOpacity style={styles.btnLogo} onPress={imgPickerCall}>
          <Text style={styles.btnTxt}>Fazer upload do logo</Text>
        </TouchableOpacity>
        <View style={styles.innerInput}>
          <Text style={styles.label}>Nome do seu Time: <Text style={{color: '#ff0000'}}>{teamVerification}</Text></Text>
          <TextInput
            style={styles.Input} 
            onChangeText={team => setTeam(team)}
            defaultValue={team}
          />
        </View>

        <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => handleRegister()}
        >
          <Text style={styles.btnText}>Entrar</Text>
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

