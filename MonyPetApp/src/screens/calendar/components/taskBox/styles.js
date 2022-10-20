import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";


export const styles = StyleSheet.create({
    container:{
		height: 130,
		backgroundColor: '#ECE4FC',
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		borderRadius: 20,

		elevation: 10,
		shadowColor: 'black',

		justifyContent:'space-around',
		paddingHorizontal: 8,
		paddingVertical: 10,
		flexDirection: 'row'
	},

	txtData:{
		color: '#7153a3', 
		fontSize: THEME.FONT_SIZE.MD, 
		marginBottom: 6, 
		fontWeight: 'bold' 
	},

	txtLine: {
		color: '#000', 
		fontSize: THEME.FONT_SIZE.MD -1, 
		paddingVertical: 2, 
	},

	checkBox:{
		width: 30, 
		height: 30, 
		borderWidth: 2, 
		borderColor: '#7153a3', 
		borderRadius: 2, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#fff' 
	}
})