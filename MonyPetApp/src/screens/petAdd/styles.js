import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

      backgroundAnimal: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
      },
    
      addPhoto: {
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 120,
        width: 120,
      },
    
      txtInformation: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#527BCB',
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 18,
        backgroundColor: '#fff',
      },
    
      lineText: {
        color: '#527BCB',
        fontSize: 20,
        marginBottom: 5,
      },

      viewRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
    
      styleTextSelection: {
        fontSize: 16,
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
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'flex-end',
      },
});