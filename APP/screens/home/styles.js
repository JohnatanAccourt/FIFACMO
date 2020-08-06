import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3E3E3E',
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
  header_span_0:{
    color: "#fff",
    height: 18,
    width: 18,
    fontSize: 13,
    borderRadius: 50,
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
  back_logo:{
    backgroundColor: "#222",
    height: 130,
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  logoWrapper:{
    height: 150,
    width: "100%",
    position: "absolute",
    top: "18%"
  },
  teamImg:{
    width: 165,
    height: 165,
    alignSelf: "center"
  },
  wrapperTitles:{
    width: "87%",
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  innerTitles:{
    alignItems: "center"
  },
  titleNumber:{
    fontWeight: "bold",
    color: "#fff",
    fontSize: 30
  },
  titleText:{
    color: "#fff",
    fontSize: 15
  },
  wrapperNameTeam:{
    justifyContent: "center",
    alignItems: "center",
    paddingTop: '25%'
  },
  teamName:{
    fontWeight: "bold",
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    // paddingTop: 100
  },
  footerInfo:{
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#555",
  },
  footerWrapper:{
    flexDirection: "row",
    backgroundColor: "#999",
    alignSelf: "center",
    justifyContent: "center",
  },
  footerText_TeamMoney:{
    backgroundColor: "#333",
    width: "50%",
    height: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 6,
    fontSize: 18
  },
  footerText_TeamValue:{
    backgroundColor: "#222",
    width: "50%",
    height: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 6,
    fontSize: 18
  },
  footerText_TeamValueNumber:{
    backgroundColor: "#222",
    width: "50%",
    height: 60,
    textAlign: "center",
    color: "#fff",
    paddingTop: 15,
    fontSize: 20,
  },
  footerText_TeamMoneyNumber:{
    backgroundColor: "#333",
    width: "50%",
    height: 60,
    textAlign: "center",
    color: "#fff",
    paddingTop: 15,
    fontSize: 20,
  },
  wrapperCircular:{
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  innerCircular:{
    marginHorizontal: 5,
    width: 110
  },
  wrapperText:{
    position: "absolute",
    top: 20,
    alignSelf: "center",
  },
  overallNumber:{
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 40,
  },
  overallText:{
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 14
  },



  container_drawer:{
    // paddingTop: Constants.statusBarHeight,
    height: "100%",
  },
  wrapperUserInfo:{
    backgroundColor: '#111',
    height: 250,

  },
  innerUserInfo:{
    position: "absolute",
    top: 10,
    alignSelf: "center",
  },
  userImg:{
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
    borderColor: "#0066aa",    
    borderWidth: 4,
  },
  userText:{
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    fontWeight: "bold",
  },
  btn:{
    flexDirection: "row",
    alignSelf: "center",
    width: "98%",
    height: 40,
    marginLeft: 15,
    marginVertical: 5
  },
  btnText:{
    color: "#fff",
    fontSize: 15,
    textAlign: "left",
    alignSelf:"center",
    paddingLeft: 10,
    marginLeft: 4
  },
  footerText:{
    alignItems: "flex-end",
    position: "absolute",
    alignSelf: "center",
    bottom: 10,
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },
  innerHeaderBtn:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 3

  }


})