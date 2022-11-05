import React from 'react';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND
    },

    scrollStyle: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 30,
        justifyContent: 'flex-start'
    },

    Title: {
        textAlign: 'center',
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20,
        fontWeight: '700'
    },

    headerStyle: {
        backgroundColor: THEME.COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    lineText: {
        color: THEME.COLORS.TEXT,
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
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
    },

    txtDate: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        textDecorationLine: 'underline',
        marginVertical: 10,
        fontWeight: '700'
    },

    scrollTitle: {
        textAlign: 'center',
        color: THEME.COLORS.TEXT,
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20
    },

    tipsStyle: {
        backgroundColor: THEME.COLORS.ITENS_BACKGROUND,
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
		backgroundColor: THEME.COLORS.ITENS_BACKGROUND,
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
        color: THEME.COLORS.TEXT,
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
    },

    notRegsTitle: {
        textAlign: 'center',
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 25
    },

    bottomRegsTxt: {
        color: THEME.COLORS.TEXT
    },

    viewTextRegister:{
        flex: 1, 
        marginVertical: 20, 
        marginHorizontal: 10
    },

    textDay:{
        color: THEME.COLORS.TEXT, 
        marginBottom: 5
    },

    lookRegister:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
    },

    viewReturn:{
        justifyContent: 'center', 
        alignItems: 'center'
    },

    informationTips:{
        color: THEME.COLORS.TEXT, 
        fontSize: THEME.FONT_SIZE.LG, 
        textAlign: 'center', 
        flex: 1, 
        textAlignVertical: 'center'
    },
})