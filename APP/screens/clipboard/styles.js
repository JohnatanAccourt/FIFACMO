import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3E3E3E',
  },
  header:{
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header_title:{
    color: "#fff",
    fontSize: 20
  },
  header_icon:{
    color: "#fff",
  },
  header_span:{
    color: "#fff",
    height: 18,
    width: 18,
    fontSize: 13,
    borderRadius: 50,
    backgroundColor: "#FF0000",
    textAlign: "center",
    position: "absolute",
    left: 15,
    bottom: 15,
  },
  header_EmptySpan:{
    height: 18,
    width: 18,
    fontSize: 13,
    borderRadius: 50,
    textAlign: "center",
    position: "absolute",
    left: 15,
    bottom: 15,
  },
  h1:{
    color: "#fff",
    fontSize: 17,
    marginVertical: 13,
    textAlign: "center",
  },
  fav_scroll: {
    width: "100%",
    alignSelf: "center",
    marginBottom: 10,
  },
  squadContainer:{
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: "#111",
  },
  containerField:{
    width: 600,
    height: Dimensions.get('window').height,
    backgroundColor: '#111'
  },
  ContainerFieldIMG:{
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  fieldIMG:{
    width: '100%',
    height: '80%',
    zIndex: 10
  },
  bench:{
    position: "absolute",
    right: 0,
    backgroundColor: "#444",
    width: '100%',
    height: 45,
    zIndex: -1,
    justifyContent: "center",
  },
  textH1:{
    textAlign: "right",
    color: "#fff",
    fontSize: 16,
    paddingRight: 10
  },
  benchBtn:{
    backgroundColor: "#ff0000",
    width: '25%',
    height: '75%',
    justifyContent: "center",
    alignItems: "center"
  },
  


  modalContainer:{
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: "center",
    alignItems: "center"
  },
  modal:{
    width: '85%',
    backgroundColor: '#333'
  },
  modalH1:{
    color: '#fff',
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10
  },
  modalH2:{
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: "center"
  },
  btnWrapper:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15
  },
  modalbtnConfirm:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#10943a',
    padding: 10,
    width: '40%'
  },
  modalbtnCancel:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ff0000',
    padding: 10,
    width: '40%'
  },
  modalbtnTxt:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  listEmptyContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  listEmptyGif:{
    width: 250,
    height: 250,
  },
  listEmptyText:{
    fontSize: 18,
    textAlign: "center",
    color: '#fff'
  },
  listEmptyTextEmoji:{
    fontSize: 25,
    textAlign: "center",
    color: '#fff'
  }
  
})