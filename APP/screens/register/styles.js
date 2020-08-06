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
  player_img:{
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 20,
    backgroundColor: "#888"
  },
  btnUpload:{
    backgroundColor: '#009dff',
    height: 40,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  txtUpload:{
    color: '#fff',
    fontSize: 15
  },
  wrapperInput:{
    backgroundColor: '#111',
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
  labelIMG:{
    color: '#ff0000',
    fontSize: 15,
    textAlign: "center",
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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40
  },
  register:{
    textAlign: "center",
    color: '#fff',
    fontSize: 14,
    marginTop: 15
  },
  modalContainer:{
    position: "absolute",
    bottom: 0,
    backgroundColor: '#999' ,
    width: "100%",
    height: 120,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  h3:{
    color: '#fff',
    textAlign: "center",
    alignSelf: "center",
    fontSize: 15,
    width: "90%",
    marginTop: 4,
  },
  btnOption:{
    paddingTop: 4,
    backgroundColor: "#111",
    height: 95,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnClose:{
    paddingTop: 4,
    backgroundColor: "#ff0000",
    height: 95,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  btnText:{
    textAlign: "center",
    color: '#fff',
    fontSize: 15,
    paddingBottom: 4
  }
})