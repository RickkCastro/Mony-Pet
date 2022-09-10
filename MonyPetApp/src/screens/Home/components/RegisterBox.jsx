import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useFocusEffect } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

export default function (props) {

	const petId = props.petId
	const [regsData, setRegsData] = useState([])
	const { getItem } = useAsyncStorage('@monypet:regs')

	async function fetchRegsData() {
		const response = await getItem()
		const TotalData = response ? JSON.parse(response) : []

		const data = TotalData.filter((item) => item.petId === petId)
		setRegsData(data)
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchRegsData()
		}, [])
	)

	const iconColor = (value) => {
		if(value <= 1){
			return "#a54c1b"
		}
		else if(value > 1 && value <= 2){
			return "#e1cc0f"
		}
		else if(value > 2 && value <= 3){
			return "#7a7777"
		}
		else if(value > 3 && value <= 4){
			return "#68b166"
		}
		else{
			return "#107d07"
		}
	}

	const icon = (value) => {
		if(value <= 1){
			return "emoticon-angry"
		}
		else if(value > 1 && value <= 2){
			return "emoticon-sad"
		}
		else if(value > 2 && value <= 3){
			return "emoticon-neutral"
		}
		else if(value > 3 && value <= 4){
			return "emoticon-happy"
		}
		else{
			return "emoticon-excited"
		}
	}

	const formatDate = (dt) => {
		const date = new Date(dt)
        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
    }

	return (
		<View>
			{regsData.map((item, index) => {
				return (
					<View style={styles.box} key={index}>
						<MaterialCommunityIcons name={icon(item.med)} size={70} color={iconColor(item.med)} />
						<View style={{ flex: 1, marginVertical: 20, marginHorizontal: 10 }}>
							<Text style={{ color: '#565583', marginBottom: 5 }}>
								Dia: {formatDate(item.date)}
							</Text>
							<Text style={{ fontSize: 12 }}>
								{item.noteV == "" ? 'Registro sem anotação' : item.noteV}
							</Text>
						</View>
					</View>
				)
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	box: {
		height: 100,
		flexDirection: 'row',
		backgroundColor: '#ECE4FC',
		alignItems: 'center',
		marginBottom: 20,
		marginHorizontal: 20,
		borderRadius: 20,

		elevation: 10,
		shadowColor: 'black',

		justifyContent: 'space-around',
		paddingHorizontal: 8,
	},
})