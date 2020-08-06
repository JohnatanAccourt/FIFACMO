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
    top: "8%"
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
    // position: "absolute",
    // bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#555",
  },
  footerWrapper:{
    flexDirection: "row",
    backgroundColor: "#999",
    alignSelf: "center",
    justifyContent: "center"
  },
  footerText_TeamMoney:{
    backgroundColor: "#333",
    width: "100%",
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
    width: "100%",
    height: 60,
    textAlign: "center",
    color: "#fff",
    paddingTop: 5,
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
    height: "40%",

  },
  userImg:{
    alignSelf: "center",
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
    fontWeight: "bold"
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


  fav_scroll: {
    width: "100%",
    alignSelf: "center",
    marginVertical: 30,
  },
  squadContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    width: '48%',
    height: 270,
    backgroundColor: '#111',
    marginVertical: 5,
    borderRadius: 10
  },
  squadBackground:{
    position: "absolute",
    left: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#222',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  removePlayer:{
    position: "absolute",
    right: 0,
    height: '100%',
    paddingTop: 10,
    paddingRight: 6,
    backgroundColor: '#111',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  squadDesc:{
    position: "absolute",
    left: 0,
    top: 0,
    width: 35,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    marginTop: 3,
    marginLeft: 3
  },
  player_country:{
    height: "8%",
    width: '100%'
  },
  squadOverall_Player:{
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff'
  },
  squadInner:{
    height: "100%",
    width: '100%'
  },
  btnPlayer:{
    width: '60%',
    height: '50%',
    alignSelf: "center"
  },
  player_img:{
    width: '100%',
    height: '100%'
  },
  squadName_player:{
    width: '100%',
    height: '12%',
    backgroundColor: '#2f95dc',
    justifyContent:"center",
    alignItems: "center"
  },
  squadName_player_txt:{
    color: '#fff',
    fontWeight: "bold",
    fontSize: 17
  },
  squadFooter:{
    width: '100%',
    height: '38%',
    backgroundColor: '#111',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center"
  },
  squadFooter_Wrapper:{
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10
  },
  squadFooter_Inner:{ 
    flexDirection: "column"
  },
  squadText:{
    color: '#fff'
  },
  squadTextBold:{
    color: '#fff',
    fontWeight: "bold"
  },
  proposeText:{
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  btnPropose:{
    width: '100%',
    backgroundColor: '#222',
    height: 40
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
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10
  },
  modalH1:{
    color: '#fff',
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10,
    marginBottom: 20
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
  modalTextInput:{
    width: '90%',
    alignSelf: "center",
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10
  },


})