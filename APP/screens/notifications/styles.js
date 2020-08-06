import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
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
  btnOptions:{
    width: '100%',
    flexDirection: "row"
  },
  btnNewMessages:{
    width: '50%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOldMessages:{
    width: '50%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  },
  notifications_Scroll:{
    // backgroundColor: "#fff",
    width: "100%",
    alignSelf: "center",
    marginVertical: 5
  },
  notifications_container:{
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  notification_wrapper:{
    flexDirection: "row",
    height: 145,
    width: "98%",
    marginLeft: "1%",
    marginVertical: 3,
    borderRadius: 5,
  },
  innerTeam:{
    width: 100,
    flexDirection: "column",
    marginLeft: 8,
    marginTop: 15,
  },  
  teamImg:{
    height: 85,
    width: 85,
    alignSelf: "center"
  },
  notifications_teamName:{
    marginVertical: 4,
    textAlign: "center",
    color: "#fff",
  },
  innerMessage:{
    width: "65%",
    flexDirection: "column",
    marginTop: 3,
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
  btnIcon:{
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center"
  },
  notification_icon:{
    color: "#fff",
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