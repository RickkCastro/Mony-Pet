import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
		flexDirection: 'row',
		height: '8%',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	scroll: {
		minHeight: '92%',
		backgroundColor: '#fff',
		justifyContent: 'space-between',
	},

    backgroundAnimal: {
        alignItems: 'center',
		marginBottom: 20,
		marginTop: 10,
    },

	addPhoto: {
		borderColor: 'Black',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		borderWidth: 1,
		height: 120,
		width: 120,
		padding: 10,
	},

	txtInformation: {
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#859ac5',
		borderRadius: 10,
		marginBottom: 15,
		fontSize: 18,
		backgroundColor: '#fff',
		width: '90%',
		color: 'black',
	},

	txtDesc: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#859ac5',
		borderRadius: 10,
		marginBottom: 15,
		fontSize: 18,
		backgroundColor: '#fff',
		width: '90%',
		textAlignVertical: 'top',
		height: 150,
		color: 'black',
	},

	lineText: {
		color: '#527BCB',
		fontSize: 20,
		marginBottom: 5,
	},

	styleButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 30,
	},
	saveButton: {
		borderRadius: 10,
		backgroundColor: '#7153af',
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

    selectPet: {
        flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
    },

    pencil: {
        alignItems: 'center',
		justifyContent: 'center',
	    width: 40,
		height: 30,
		marginVertical: 55,
    },

    styleWave: {
        alignItems: 'center',
		height: 140,
		justifyContent: 'flex-end',
		paddingBottom: 10,
    },

    styleCopyRight: {
        color: '#252424',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 10,
        alignItems: 'flex-end',
      },
});