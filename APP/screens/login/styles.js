import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#222',
  },
  gitIcon:{
    position: "absolute",
    top: 35,
    left: 10,
    zIndex: 2
  },
  background_gif:{
    height: "100%"
  },
  background_opacity:{
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    zIndex: 1,
    opacity: 0.7, 
    backgroundColor: "#000"
  },
  player_img:{
    position: "absolute",
    height: 160,
    width: 160,
    zIndex: 2
  },
  wrapperImg:{
    height: "45%",
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperInput:{
    backgroundColor: '#111',
    width: "100%",
    height: "100%",
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
  }
})