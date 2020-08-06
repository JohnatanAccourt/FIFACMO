import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Linking, Alert, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import styles from '../register/styles';
import api from '../../services/api';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';

export default function Login({ Props, navigation }) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setModalVisible] = useState(false); 
  const [userVerification , setUserVerification] = useState('');
  const [passwordVerification , setPasswordVerification] = useState('');
  const [imageVerification,  setImageVerification] = useState('');

  const [uploadIMG, setUploadIMG] = useState('');
  const [uri, seturi] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const url = 'https://github.com/JohnatanAccourt'

  async function imgPickerCall(){
    if(Constants.platform.ios){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if(status != 'granted'){
        Alert("Para usar a câmera precisamos de sua permissão.");
        return;
      }

    }

    if(Constants.platform.android){
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

      if(status != 'granted'){
        Alert.alert("Humm, temos um problema...", "precisamos que você nos dê permissão para lhe dar acesso a galeria para escolher sua imagem.");
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

    setModalVisible(!isModalVisible)
    setFileName(data.uri.split('/').pop())
    seturi(data.uri)
    setUploadIMG(data)
    setFileType(`test/${data.uri.split(".")[1]}`)

  }
  
  async function imgCameraCall(){
    if(Constants.platform.ios){
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if(status != 'granted'){
        Alert("Para usar a câmera precisamos de sua permissão.");
        return;
      }

    }

    if(Constants.platform.android){
      const { status } = await Permissions.askAsync(Permissions.CAMERA)

      if(status != 'granted'){
        Alert.alert("Humm, temos um problema...", "precisamos que você nos dê permissão para lhe dar acesso a sua camera para tirar a foto.");
        return;
      }
      
    }

    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 0.5
    });

    if(data.cancelled || !data.uri){
      return;
    }

    setModalVisible(!isModalVisible)
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
  
      const data = {
        name_img: fileName,
        name_user: user, 
        password_user: password, 
        email: email
      }

      const IMGdata = new FormData();
      IMGdata.append('file', newFile);
      IMGdata.append('upload_preset', 'fifacmoPreset');
      IMGdata.append('cloud_name', 'fifacmo')

      await Axios.post('https://api.cloudinary.com/v1_1/fifacmo/image/upload', IMGdata);


      //=================================================================================


      const responseRegister = await api.post('/register', data)
      const user_id = responseRegister.data.user_id;

      try{ 
        await AsyncStorage.setItem("@userID", user_id.toString()) 
      }    
      catch(error){ 
        console.log(error) 
      }

      navigation.navigate('RegisterTeam')

    }catch(err){
      console.log(err)
      if(fileName.length == 0) setImageVerification("Imagem de perfil é obrigatorio.")
      if(user.length <= 5) setUserVerification("Precisa ter mais de 6 caracteres")
      if(password.length <= 5) setPasswordVerification("Precisa ter mais de 6 caracteres")

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
      <View style={styles.wrapperInput}>
        <TouchableOpacity  onPress={toggleModal}>
          <Image style={styles.player_img} source={uploadIMG ? {uri: uploadIMG.uri} : require('../../assets/images/user.png')}/>
        </TouchableOpacity>

        <Text style={styles.labelIMG}>{imageVerification}</Text>
        
        <View style={styles.innerInput}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput 
            style={styles.Input} 
            onChangeText={email => setEmail(email)}
            defaultValue={email}
            maxLength={100}
          />
        </View>

        <View style={styles.innerInput}>
          <Text style={styles.label}>User: <Text style={{color: '#ff0000'}}>{userVerification}</Text> </Text>
          <TextInput 
            style={styles.Input}
            onChangeText={user => setUser(user)}
            defaultValue={user}
            maxLength={20}
          />
        </View>

        <View style={styles.innerInput}>
          <Text style={styles.label}>Senha: <Text style={{color: '#ff0000'}}>{passwordVerification}</Text></Text>
          <TextInput 
            style={styles.Input} 
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            defaultValue={password}
            maxLength={25}
          />
        </View>

        <TouchableOpacity 
          style={styles.btnLogin}
          onPress={() => handleRegister()}
        >
          <Text style={styles.btnText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>

      <Modal isVisible={isModalVisible} >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.btnOption} onPress={imgPickerCall}>
            <Ionicons
              name="md-image" 
              size={50}
              style={{color: "#fff"}}
            /> 
            <Text style={styles.btnText}>Galeria</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnOption} onPress={imgCameraCall}>
            <Ionicons
              name="md-camera" 
              size={50}
              style={{color: "#fff"}}
            /> 
            <Text style={styles.btnText}>Tirar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnClose} onPress={toggleModal}>
            <Ionicons
              name="md-close" 
              size={50}
              style={{color: "#fff"}}
            /> 
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

