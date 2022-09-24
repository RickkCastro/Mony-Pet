import React from 'react';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    scrollStyle: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        justifyContent: 'flex-start'
    },

    Title: {
        textAlign: 'center',
        color: '#75739c',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20,
        fontWeight: '700'
    },

    imgPet: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 130,
        backgroundColor: '#ECE4FC'
    },

    headerStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    lineText: {
        color: '#6c8ed1',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    },

    datesView: {
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    monthStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ateTxt: {
        color: '#75739c',
        fontSize: THEME.FONT_SIZE.MD,
    },

    txtDate: {
        color: '#75739c',
        fontSize: THEME.FONT_SIZE.LG,
        textDecorationLine: 'underline',
        marginVertical: 10,
        fontWeight: '700'
    },

    scrollTitle: {
        textAlign: 'center',
        color: '#75739c',
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20
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

    boxRegs: {
		height: 100,
		flexDirection: 'row',
		backgroundColor: '#ECE4FC',
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		borderRadius: 20,

		elevation: 10,
		shadowColor: 'black',

		justifyContent: 'space-around',
		paddingHorizontal: 8,
	},

    addRegsTitle: {
        textAlign: 'center',
        color: '#75739c',
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
    },

    notRegsTitle: {
        textAlign: 'center',
        color: '#75739c',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
    },

    bottomRegsTxt: {
        color: '#75739c'
    },

    menuButtons: {
        height: '8%',
        backgroundColor: '#927ac1',
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
        backgroundColor: '#7658b0',
        width: 60,
        height: 60,
        top: '-7%',
    },
})