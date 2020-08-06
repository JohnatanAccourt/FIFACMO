import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0066aa',
  },
  header:{
    backgroundColor: '#000',
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
  socialNews:{
    width: '100%',
    height: 400,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  socialBackground:{
    width: '100%',
    height: '100%'
  },
  socialBackgroundFront:{
    width: '100%',
    height: '100%',
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 4
  },
  socialWrapperConsoles:{
    width: '95%',
    position: "absolute",
    zIndex: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  socialPlaystationIMG:{
    width: 110,
    height: 110,
  },
  socialPC_IMG:{
    width: 100,
    height: 100,
  },
  socialXboxIMG:{
    width: 100,
    height: 100,
  },
  socialLine:{
    flexDirection: "column",
    width: '100%',
    height: 1,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: -20,
  },
  socialContent:{
    backgroundColor: '#444',
    width: '100%',
    height: '100%'
  },
  socialConsoleTxt:{
    flexDirection: "column",
    width: '100%',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    position: "absolute",
    bottom: -70

  },
  socialTitle:{
    position: "absolute",
    color: "#fff",
    fontSize: 100,
    fontWeight: "bold",
    textAlign: "center",
  },
  socialDescListTeams:{
    width: '100%',
    height: 30,
    backgroundColor: "#333",
    justifyContent: "center"
  },
  socialDescListTeamsText:{
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
  listTeams:{
    flex: 1,
    height: 100,
    backgroundColor: "#000",
    alignItems: "center",
  },
  mainSocialImg:{
    width: 80,
    height: 80,
    marginLeft: 5
  },
  socialImg:{
    width: 80,
    height: 80,
    marginLeft: 20
  },
  socialWithoutImg:{
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: "#888",
    marginLeft: 10
  },
  socialDesc:{
    width: '100%',
    height: 40,
    backgroundColor: "#111",
    // marginBottom: 6,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  socialH3:{
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold"
  },
  socialTeam:{
    width: '100%',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  socialTeamWrapper:{
    width: '34%',
    height: 140,
    backgroundColor: "#222",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20
  },
  socialOverall:{
    position: "absolute",
    top: 0,
    left: 0,
    fontWeight: "bold",
    paddingTop: 5,
    paddingLeft: 5,
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#000",
    zIndex: 4,
    width: 30, 
    height: 35,
    borderRadius: 100,
    alignSelf: "center",
  },
  socialTeamBigWrapper:{
    width: '34%',
    height: 170,
    backgroundColor: "#222",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 50
  },
  socialImgBig:{
    width: 100,
    height: 100
  },
  socialImgBigTitles:{
    width: 200,
    height: 200
  },
  socialWithoutImgBig:{
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#888"
  },
  socialH1:{
    backgroundColor: '#000',
    width: "100%",
    height: 23,
    position: "absolute",
    bottom: 0,
    left: 0,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 12
  },
  socialTeam_TrophiesWrapper:{
    width: '100%',
    height: 300,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 20,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderColor: "#000"
  },
  socialWrapperDescTitles:{
    position: "absolute",
    bottom: 30,
    left: 0,
    width: '100%',
    height: 70,
    flexDirection: "column",
  },
  socialWrapperDescH1:{
    color: "#fff",
    textAlign: "center",
    textAlignVertical: 'center',
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#000",
    width: 60,
    height: 60,
    alignSelf: "center",
    borderRadius: 100,
  },
  socialWrapperDescH2:{
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  socialH1Wrapper:{
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#111",
    width: '100%'
  },
  socialH1_111:{
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: "#111",
    paddingVertical: 1
  },
  socialH1_222:{
    color: "#fff",
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: "#000",
    paddingVertical: 5
  },
  socialTeamTitles:{
    flexDirection: "column",
    width: "100%"
  }
})