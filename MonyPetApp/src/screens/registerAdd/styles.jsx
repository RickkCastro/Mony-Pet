import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
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

    txtDay: {
      color: '#527BCB',
      fontSize: 20,
      marginBottom: 10,
      textAlign:'center',
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

      monthStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent:'center',
    },

      styleButton: {
        borderRadius: 10,
        backgroundColor: '#461EA2',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 300,
        marginBottom: 10,
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

      lineRegister: {
        color: '#527BCB',
        fontSize: 18,
        marginBottom: 3,
        textAlign:'center',
        marginTop:10
      },

      txtDesc: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#527BCB',
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 12,
        backgroundColor: '#fff',
        width: '90%',
        textAlignVertical: 'top',
        height: 125,
        color: 'black',
        alignSelf:'center'
      },

      styleCopyRight: {
        color: 'black',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'flex-end',
      },
})