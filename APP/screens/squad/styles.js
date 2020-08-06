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
    flexDirection: "row",
    flexWrap: "wrap",
    width: '48%',
    height: 250,
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
    height: "10%",
    width: '90%'
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