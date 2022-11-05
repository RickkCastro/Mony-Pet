import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND,
    },

    scrollStyle: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 40,
        justifyContent: 'flex-start',
    },

    headerStyle: {
        backgroundColor: THEME.COLORS.BACKGROUND,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

	Title: {
        textAlign: 'center',
        color: THEME.COLORS.PRIMARY,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 20,
        fontWeight: '700'
    },

	graphicTitle: {
        textAlign: 'center',
        color: THEME.COLORS.PRIMARY,
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
    },

    zeroText: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
        color: THEME.COLORS.PRIMARY,
        fontSize: THEME.FONT_SIZE.LG,
        textDecorationLine: 'underline',
        marginVertical: 10,
        fontWeight: '700'
    },
})
