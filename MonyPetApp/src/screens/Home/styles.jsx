import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white'
    },

    headerStyle: {
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    lineText: {
        color: '#461EA2',
        fontSize: 20,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    },

    monthStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
        marginHorizontal: 100
      },

    txtSelectDay: {
        color: '#527BCB',
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },

    txtDate: {
        color: '#527BCB',
        fontSize: 20,
        textDecorationLine: 'underline',
    },

    scrollStyle: {
        width: '100%',
        paddingBottom: 30,
    },

    scrollTitle: {
        textAlign: 'center',
        color: '#527BCB',
        marginTop: 30,
        fontSize: 20,
        marginBottom: 10
    },

    tipsStyle: {
        backgroundColor: '#ECE4FC',
        height: 250,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        borderRadius: 20,

        elevation: 10,
        shadowColor: 'black',

        justifyContent: 'space-around',
        padding: 20
    },

    tipsButton: {
        marginTop: 10
    },

    menuButtons: {
        height: '8%',
        backgroundColor: '#7658B0',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    buttonsMenu: {
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#461EA2',
        width: 60,
        height: 60,
        top: '-7%'
    },
})