import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      safeTela:{
        flex: 1, 
        backgroundColor: 'white'
      },
    
      scrollStyle: {
        minHeight: '92%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      },

      backgroundAnimal: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
      },
    
      addPhoto: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 170,
        width: 170,
      },
    
      txtInformation: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#527BCB',
        borderRadius: 10,
        marginBottom: 30,
        fontSize: THEME.FONT_SIZE.MD,
        backgroundColor: '#fff',
      },
    
      lineText: {
        color: '#527BCB',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5,
      },

      viewRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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

      viewButton: {
        alignItems: 'center',
        height: 180,
        justifyContent: 'flex-end',
        paddingBottom: 10,
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

      styleCopyRight: {
        color: '#252424',
        fontSize: THEME.FONT_SIZE.SM,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'flex-end',
      },

      stylesTextButton:{
        color: 'white', 
        fontSize: THEME.FONT_SIZE.LG 
      },
});