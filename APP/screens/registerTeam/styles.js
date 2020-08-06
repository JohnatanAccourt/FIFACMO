import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#333',
  },
  gitIcon:{
    position: "absolute",
    top: 35,
    left: 10
  },
  wrapperImg:{
    height: "32%",
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperInput:{
    backgroundColor: '#222',
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  player_img:{
    width: 200,
    height: 200,
  },
  btnLogo:{
    backgroundColor: "#00a1ff",
    height: 50,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15
  },
  btnTxt:{
    color: "#fff",
    fontSize: 17
  },
  innerInput:{
    width: '90%',
    alignSelf: "center",
  },
  label:{
    marginVertical: 10,
    color: '#fff',
    fontSize: 15
  },
  Input:{
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 5
  },
  btnLogin:{
    backgroundColor: "#067502",
    width: '90%',
    height: 45,
    alignSelf: "center",
    marginVertical: 40
  },
  btnText:{
    textAlign: "center",
    color: '#fff',
    fontSize: 20,
    paddingTop: 8,
  },
  register:{
    textAlign: "center",
    color: '#fff',
    fontSize: 14,
    marginTop: 15
  },
  modalContainer:{
    backgroundColor: '#000' ,
    width: "90%",
    height: "70%",
    alignSelf: "center",
    borderRadius: 15
  },
  wrapperDevImg:{
    // backgroundColor: '#fff',
    alignSelf: "center",
    position: "absolute",
    top: -50
  }, 
  developer_img:{
    width: 150, 
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff"
  },
  h1:{
    marginTop: 105,
    color: '#fff',
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    width: "80%",
    alignSelf: "center",
    marginBottom: 10
  },
  h3:{
    color: '#fff',
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
    width: "90%",
    marginTop: 4,
  },
  h4:{
    color: '#fff',
    textAlign: "center",
    alignSelf: "center",
    fontSize: 16,
    width: "90%",
    marginTop: 10,
    fontWeight: "bold"
  },
  bold:{
    fontWeight: "bold",
    color: "#7dc4e0"
  },
  btnClose:{
    backgroundColor: "#067502",
    width: "90%",
    height: 40,
    alignSelf: "center",
    position: "absolute",
    bottom: 10
  },
  labelIMG:{
    color: '#ff0000',
    fontSize: 15,
    textAlign: "center",
  },
})