import { StyleSheet } from 'react-native';
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
  scrollGraphic:{
    height: 180, 
    flexDirection: 'row', 
    paddingHorizontal: 20
  },

  graphicY:{
    justifyContent: 'space-between', 
    marginRight: 10, 
    marginBottom: 20
  },

  graphicX:{
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },

  textGraphicX:{
    textAlign: 'center', 
    fontSize: THEME.FONT_SIZE.SM, 
    paddingHorizontal: 6,
    paddingBottom: 5
  }
});