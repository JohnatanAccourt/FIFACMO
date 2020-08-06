import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#111',
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
  notifications_container:{
    width: "100%",
    padding: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 5,
  },
  notification_wrapper:{
    flexDirection: "row",
    backgroundColor: "#222",
    height: 130,
    width: "98%",
    marginLeft: "1%",
    marginVertical: 3,
    borderRadius: 5,
  },
  innerTeam:{
    width: 100,
    flexDirection: "column",
    marginLeft: 3,
  },  
  teamImg:{
    height: 80,
    width: 80,
    marginVertical: 6,
    alignSelf: "center",
  },
  notifications_teamName:{
    marginVertical: 1,
    textAlign: "center",
    color: "#fff",
  },
  innerMessage:{
    width: "65%",
    flexDirection: "column",
    marginLeft: 10,
  },
  notification_h1:{
    marginVertical: 8,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  notification_h2:{
    marginVertical: -5,
    color: "#fff",
    fontSize: 13,
  },
  notification_h3:{
    position: "absolute",
    right: 3,
    bottom: 3,
    color: "#fff",
    fontSize: 7,
  },
  message_container:{
    marginVertical: 10,
    width: "93%",
    height:Dimensions.get('window').height - 100,
    alignSelf: "center",
    backgroundColor: "#0066aa",
    borderRadius: 5
  },
  message_img:{
    marginTop: 10,
    width: "100%"
  },
  message_inner_img:{
    marginVertical: 25,
    width: "80%",
    alignItems: "center",
    justifyContent: "center"
  },
  message_img_team:{
    width: 150,
    height: 150, 
  },
  message_img_player:{
    position: "absolute",
    right: 0,
    bottom: 20,
    width: 110,
    height: 110,
    backgroundColor: "#111",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 100,
  },
  message_h1:{
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  message_h2:{
    color: "#fff",
    marginTop: 4,
    fontSize: 16,
    textAlign: "center"
  },
  message_h3:{
    marginVertical: 15,
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    width: "97%",
    alignSelf: "center"
  },
  message_h4:{
    marginVertical: 10,
    color: "#fff",
    fontSize: 12,
    textAlign: "center"
  },
  message_Price:{
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center"
  },
  message_img_playerTranfer:{
    marginVertical: 10,
    width: 100,
    height: 100, 
    borderRadius: 50,
    alignSelf: "center"
  },
  message_buttons:{
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
  },
  message_btnRefuse:{
    width: 140,
    height: 40,
    backgroundColor: "#811515",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 15
  },
  message_btnAccept:{
    width: 140,
    height: 40,
    backgroundColor: "#438115",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 15
  },
  message_btnText:{
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
    lineHeight: 20
  },


})