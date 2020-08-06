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
  cart_h1Wrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "93%",
    alignSelf: "center",
    marginVertical: 20,
  },  
  cart_h1:{
    fontSize: 17,
    color: "#fff",
  },
  cart_h1Bold:{
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
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
  player_IMG_COUNTRY:{
    alignSelf:"center",
  },
  player_img:{
    height: 140,
    width: 140,
    marginLeft: 6,
    borderRadius: 100,
    alignSelf: "center",
    backgroundColor: "#777",
  },
  playerInfo_basicInfo_container:{
    width: "93%",
    // marginVertical: 15,
    marginTop: 15,
    alignSelf: "center",
    backgroundColor: "#222",
    padding: 15,
    
  },
  playerInfo_basicInfo_wrapper:{
    flexDirection: "column",
    alignSelf: "center"
  },
  playerInfo_basicInfo_inner:{
    marginLeft: 10,
  },
  playerInfo_basicInfo_name:{
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  playerInfo_basicInfo_info:{
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
  playerInfo_basicInfo_realClub:{
    fontSize: 15,
    color: "#fff",
    textAlign: "center"
  },
  playerInfo_basicInfo_price:{
    width: "93%",
    alignSelf: "center",
    backgroundColor: "#111",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    padding: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
  playerInfo_mainlyStats_container:{
    width: "93%",
    height: 200,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#333",
  },
  playerInfo_mainlyStats_wrapper:{
    height: "95%",
    width: "100%",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
  },
  playerInfo_mainlyStats_inner:{
    flexDirection: "row",
    height: "95%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10
  },
  playerInfo_mainlyStats_Pace:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },
  playerInfo_mainlyStats_Shoot:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },
  playerInfo_mainlyStats_Pass:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },
  playerInfo_mainlyStats_Drible:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },
  playerInfo_mainlyStats_Defense:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },
  playerInfo_mainlyStats_Physic:{
    width: "12%",
    backgroundColor: "#25AF04",
    justifyContent: "flex-end",
  },

  playerInfo_mainlyStats_Overall:{
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5
  },

  playerInfo_footer:{
    width: "93%",
    backgroundColor: "#999",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    padding: 10,
    backgroundColor: "#111",
  },
  playerInfo_footer_text:{
    marginLeft: 5,
    fontSize: 12,
    color: "#fff",
  },
  playerInfo_perfil_container:{
    width: "93%",
    marginVertical: 10,
    backgroundColor: "#111",
    alignSelf: "center",
  },
  playerInfo_perfil_wrapper:{
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 15,
  },
  playerInfo_img:{
    height: 90,
    width: 90,
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
  },
  playerInfo_h3:{
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    marginTop: 3,
  },
  playerInfo_rowStars:{
    flexDirection: "row",
    alignSelf: "center",
  },
  playerInfo_mentality_container:{
    width: "93%",
    alignSelf: "center",
    marginTop: -10,
  },
  playerInfo_mentality_wrapper:{
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  playerInfo_mentality_Table:{
    width: "48%",
    backgroundColor: "#333",
    marginVertical: 8,
  },
  playerInfo_mentality_header:{
    width: "100%",
    height: 40,
    backgroundColor: "#111",
    justifyContent: "center",
    marginBottom: 5,
  },
  mentality_h1:{
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  playerInfo_mentality_data:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginHorizontal: 10,
  },
  mentality_h3:{
    color: "#fff",
    fontSize: 16,
    alignSelf: "center"
  },


  mentality_h3_over00:{
    backgroundColor: "#ff0000",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },
  mentality_h3_over60:{
    backgroundColor: "#E77E23",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },
  mentality_h3_over70:{
    backgroundColor: "#FFC940",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },
  mentality_h3_over80:{
    backgroundColor: "#9BBF30",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },
  mentality_h3_over90:{
    backgroundColor: "#10943A",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },
  mentality_h3_over99:{
    backgroundColor: "#095621",
    color: "#fff",
    fontSize: 16,
    padding: 4,
    borderRadius: 5,
  },



  playerInfo_mentality_data_traits:{
    flexDirection: "column",
    marginVertical: 4,
  },
  mentality_h3_traits:{
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
    marginVertical: 4,
    // wordWrap: 'break-word',
  },
  playerInfo_mentality_Especiality:{
    width: "100%",
    backgroundColor: "#333",
    marginVertical: 3,
  },
  mentality_field_container:{
    width: "100%",
    height: 450,
    alignSelf: "center",
    marginTop: 10,
  },
  field_img:{
    width: "100%",
    height: "100%",
  },
  mentality_field_positions:{
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  mentality_field_position:{
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "nowrap",
    marginVertical: 7,
  },
  mentality_field_overall:{
    width: 50,
    height: 50,
    backgroundColor: "#333",
  },
  mentality_field_overall_text:{
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  },
  mentality_field_h1:{
    marginTop: 10,
    width: "100%",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#111",
    padding: 4
  },




  
  fav_overall00:{
    height: 42,
    width: 40,
    backgroundColor: "#ff0000",
    borderRadius: 8,
    position: "absolute",
    top: 10,
    left: 15
  },
  fav_overall60:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#E77E23",
    borderRadius: 8,
    position: "absolute",
    top: 10,
    left: 15
  },
  fav_overall70:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#FFC940",
    borderRadius: 8,
    position: "absolute",
    top: 10,
    left: 15
  },
  fav_overall80:{
    height: 42,
    width: 40,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#9BBF30",
    borderRadius: 8,
    position: "absolute",
    top: 10,
    left: 15
  },
  fav_overall90:{
    height: 52,
    width: 50,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#10943A",
    borderRadius: 8,
    position: "absolute",
    top: 10,
    right: 15
  },
  text_overall:{
    color: "#fff",
    fontSize: 23,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  player_country:{
    position: "absolute",
    top: 60,
    right: 0,
    width: 50,
    height: 35,

  }
})