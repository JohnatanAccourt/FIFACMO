import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3E3E3E',
  },
  containerAll:{
    flex: 1,
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
  market_search:{
    marginVertical: 10,
    height: 45,
    width: "100%",
    alignSelf: "center",
    fontSize: 16,
    padding: 4,
    backgroundColor: "#555",
    color: "#fff",
  },
  fav_scroll: {
    flex: 1,
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
    marginVertical: 6,
    marginLeft: 5,
  },
  fav_inner:{
    flexDirection: "row",
  },
  fav_name:{
    color: "#fff",
    fontSize: 18,
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
    fontSize: 16,
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
  fav_addToCart:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#16518D",
    borderRadius: 8,
  },
  fav_button:{
    flexDirection: "row",
    height: 20,
    width: "85%",
    marginTop: 7,
    backgroundColor: "#C7950B",
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
  filterContainer:{
    flexDirection: "row",
    // justifyContent: "space-between",
    width: '95%',
    alignSelf: "center"
  },
  btn_filter:{
    alignSelf: "center",
  },
  wrapperModalTitle:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterModal:{
    height: '95%',
    width: '90%',
    backgroundColor: '#333',
    alignSelf: "center",
  },
  closeModal:{
    alignSelf: "center",
    marginLeft: 5
  },
  small_picker:{
    width: "47%",
    height: 40,
    alignSelf: "center",
    marginHorizontal: 2,
    backgroundColor: "#111",
    color: "#fff",
    fontSize: 16,
    marginVertical: 7
  },
  drawer_picker:{
    width: "95%",
    height: 40,
    alignSelf: "center",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: 16,
    marginVertical: 7
  },
  textModal:{
    textAlign: "center",
    fontSize: 18,
    color: '#fff',
    marginVertical: 10
  },
  drawer_h2:{
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 10
  },
  drawer_yearold_wrapper:{
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  drawer_search:{
    flexDirection: "row",
    width: "48%",
    height: 40,
    paddingLeft: 10,
    backgroundColor: "#111",
    color: "#fff",
    fontSize: 15,
  },
  BtnModal:{
    width: '95%',
    backgroundColor: '#c98c24',
    alignSelf: "center",
    padding: 3,
    marginTop: 10
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