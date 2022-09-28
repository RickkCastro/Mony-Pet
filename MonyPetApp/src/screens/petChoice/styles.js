import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: '#fff',
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
		backgroundColor: '#7b5eb4',
		alignSelf: 'center',
		marginBottom: 60,
		borderRadius: 30,
	},

    styleCopyRight: {
        color: '#252424',
		fontSize: THEME.FONT_SIZE.SM,
        alignSelf: 'center',
        alignItems: 'flex-end',
		marginBottom: 10,
      },

	  circle: {
		backgroundColor: '#7b5eb4',
		borderRadius: 100,
		width: 140,
		height: 140,
		margin: 5,
		padding: 35,
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0.98,
	  },

	  txtName: {
		color: 'white',
		textAlign: 'center',
		fontSize: THEME.FONT_SIZE.LG,
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