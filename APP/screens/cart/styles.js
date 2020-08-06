import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

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
  h1:{
    color: "#fff",
    fontSize: 17,
    marginVertical: 13,
    textAlign: "center",
  },
  fav_scroll: {
    width: "93%",
    alignSelf: "center",
    marginBottom: 10,
  },
  fav_container:{
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  fav_wrapper:{
    flexDirection: "row",
    backgroundColor: "#222",
    height: 110,
    width: "95%",
    marginLeft: "1%",
    marginVertical: 3,
  },
  
  player_IMG_COUNTRY:{
    alignSelf:"center",
    marginLeft: 3,
  },
  player_img:{
    height: 95,
    width: 95,
    marginRight: 5,
    borderRadius: 100,
    backgroundColor: "#777"
  },
  player_country:{
    position: "absolute",
    bottom: -10,
    left: 48,
    transform: [{translateX: -15}], 
    width: 30,
    height: 18,
    backgroundColor: '#fff',
    marginVertical: 3,
  },
  fav_wrapperInformation:{
    width: "53%",
    flexDirection: "column",
    marginVertical: 20,
    marginLeft: 5,
  },
  fav_inner:{
    flexDirection: "row",
  },
  fav_name:{
    color: "#fff",
    fontSize: 19,
    marginVertical: -4,
    marginBottom: 2,
    fontWeight: "bold",
  },
  fav_information:{
    color: "#fff",
    fontSize: 11,
  },
  fav_value:{
    color: "#fff",
    fontSize: 18,
    marginTop: 5,
  },
  fav_wrapperButtons:{
    flexDirection: "column",
    justifyContent: "space-evenly"
  },

  fav_overall00:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#ff0000",
    borderRadius: 8,
  },
  fav_overall60:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#E77E23",
    borderRadius: 8,
  },
  fav_overall70:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#FFC940",
    borderRadius: 8,
  },
  fav_overall80:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#9BBF30",
    borderRadius: 8,
  },
  fav_overall90:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#10943A",
    borderRadius: 8,
  },
  
  fav_overall:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#000",
    borderRadius: 8,
  },

  text_overall:{
    color: "#fff",
    fontSize: 20,
    marginVertical: 5,
    textAlign: "center",
  },
  fav_removeFromCart:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#dd0808",
    borderRadius: 8,
  },
  fav_button:{
    flexDirection: "row",
    height: 20,
    width: "55%",
    marginTop: 7,
    backgroundColor: "#ff0000",
    borderRadius: 8,
    paddingLeft: 2,
  },
  add_cart:{
    width: 25,
    height: 25,
    alignSelf: "center",
    marginVertical: 8,
  },
  fav_addtext:{
    color: "#fff",
    fontSize: 13,
    paddingLeft: 5,
    paddingTop: 1,
    textAlign: "center",
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
  },
  btn_Confirm:{
    backgroundColor: "#0d9b1e",
    height: 50,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  txt_Confirm:{
    fontSize: 18,
    textAlign: "center",
    color: '#fff'
  },
  modalContainer:{
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  modal:{
    backgroundColor: '#333',
    width: '85%',
    height: '40%',
    borderRadius: 10
  },
  modalH1:{
    color: '#fff',
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 10
  },
  modalWrapper:{
    flexDirection: "row",
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2
  },
  modalDesc:{
    backgroundColor: "#777",
    width: '45%',
    padding: 5
  },
  modalPrice:{
    backgroundColor: "#999",
    width: '45%',
    padding: 5
  },
  modalH2:{
    fontSize: 15
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
  btnWrapper:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 15
  }
})