import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";


export const styles = StyleSheet.create({
    container:{
		height: 130,
		backgroundColor: THEME.COLORS.ITENS_BACKGROUND,
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
		color: THEME.COLORS.TEXT, 
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
		borderColor: THEME.COLORS.PRIMARY, 
		borderRadius: 2, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: THEME.COLORS.BACKGROUND 
	}
})