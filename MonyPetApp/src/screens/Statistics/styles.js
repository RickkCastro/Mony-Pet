import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    scrollStyle: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 40,
        justifyContent: 'flex-start',
    },

    headerStyle: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

	Title: {
        textAlign: 'center',
        color: '#9a8db0',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20,
        fontWeight: '700'
    },

	graphicTitle: {
        textAlign: 'center',
        color: '#75739c',
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
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

	txtDate: {
        color: '#75739c',
        fontSize: THEME.FONT_SIZE.LG,
        textDecorationLine: 'underline',
        marginVertical: 10,
        fontWeight: '700'
    },
})
