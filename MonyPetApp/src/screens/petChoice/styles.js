import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: THEME.COLORS.BACKGROUND,
		justifyContent: 'space-between'
	},

    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

	logo: {
		width: 300,
		height: 189,
		marginBottom: 5,
	},
	addButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '25%',
		width: '75%',
		backgroundColor: THEME.COLORS.BUTTON,
		alignSelf: 'center',
		marginBottom: 50,
		borderRadius: 30,
	},

    styleCopyRight: {
        color: THEME.COLORS.COPY,
		fontSize: THEME.FONT_SIZE.SM,
        alignSelf: 'center',
        alignItems: 'flex-end',
		marginBottom: 25,
      },

	  circle: {
		backgroundColor: THEME.COLORS.BUTTON,
		borderRadius: 100,
		width: 140,
		height: 140,
		margin: 5,
		padding: 35,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 1,

		elevation: 10,
        shadowColor: '#000',
	  },

	  txtName: {
		color: THEME.COLORS.TEXT_BUTTON,
		textAlign: 'center',
		fontSize: THEME.FONT_SIZE.MD + 3,
	  },

	  flatList: {
		flex: 1,
		justifyContent: 'center',
	  },

	  container1:{
		flex: 2, 
		justifyContent: 'center', 
		alignSelf: 'center'
	  },
});