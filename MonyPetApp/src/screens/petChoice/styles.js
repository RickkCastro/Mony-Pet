import { StyleSheet } from 'react-native';

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
		width: 210.25,
		height: 123.5,
		marginBottom: 5,
	},
	addButton: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 200,
		backgroundColor: '#7b5eb4',
		alignSelf: 'center',
		marginBottom: 60,
		borderRadius: 30,
	},

    styleCopyRight: {
        color: '#252424',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'flex-end',
      },
});