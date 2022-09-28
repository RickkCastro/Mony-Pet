import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    height: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scrollStyle: {
    minHeight: '92%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  txtSelectDay: {
    color: '#7658b0',
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 10,
    textAlign: 'center',
  },

  txtDate: {
    color: '#7658b0',
    fontSize: THEME.FONT_SIZE.LG,
    textDecorationLine: 'underline',
    fontWeight: '700'
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#527BCB',
    borderRadius: 10,
    marginBottom: 30,
    fontSize: THEME.FONT_SIZE.LG,
    backgroundColor: '#fff',
  },

  lineText: {
    color: '#527BCB',
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 5,
  },

  monthStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 100
  },

  styleButton: {
    borderRadius: 10,
    backgroundColor: '#7153af',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    marginBottom: 10,
  },

  styleTextSelection: {
    fontSize: THEME.FONT_SIZE.MD,
    color: 'gray',
    paddingRight: 10,
  },

  headerButtons: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  lineRegister: {
    color: '#527BCB',
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 3,
    textAlign: 'center',
    marginTop: 10
  },

  txtDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#5c79b2',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: '#fff',
    width: '90%',
    textAlignVertical: 'top',
    height: 125,
    color: 'black',
    alignSelf: 'center'
  },

  styleCopyRight: {
    color: '#252424',
    fontSize: THEME.FONT_SIZE.SM,
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'flex-end',
  },

  backgroundRegister: {
    paddingHorizontal: 20,
    backgroundColor: '#ece4fc',
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 3
  },

  viewTxt: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  txt: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.SM,
    width: 54,
    color: '#527bcb'
  },

  selected: {
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: '#a54c1b'
  },

  unselected: {
    borderWidth: 1.8,
    borderRadius: 100,
    borderColor: 'transparent'
  },

  stylesTextButton:{
    color: 'white', 
    fontSize: THEME.FONT_SIZE.LG 
  },
})
