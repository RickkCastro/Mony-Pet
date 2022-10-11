import { Text, View, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../styles';

//Props: text, dataMap, var, setVar

export default function (props) {
	const iconColor = (value) => {
		switch (value) {
			case 1:
				return "#a54c1b"
			case 2:
				return "#e1cc0f"
			case 3:
				return "#7a7777"
			case 4:
				return "#68b166"
			default:
				return "#107d07"
		}
	}

	return (
		<View>
			<Text style={styles.lineRegister}>{props.text}</Text>
			<View style={styles.backgroundRegister}>
				{props.dataMap.map((item, index) => {
					return (
						<Pressable
							key={index}
							style={item.value === props.var ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
							onPress={() => props.setVar(item.value)}>
							<MaterialCommunityIcons name={item.icon} size={50} color={iconColor(item.value)} />
						</Pressable>
					)
				})}
			</View>
			<View style={styles.viewTxt}>
				{props.dataMap.map((item, index) => {
					return (
						<Text style={styles.txt} key={index}> {item.text} </Text>
					)
				})}
			</View>
		</View>
	)
}