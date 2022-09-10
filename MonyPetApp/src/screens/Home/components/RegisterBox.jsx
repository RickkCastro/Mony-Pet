import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useFocusEffect } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import styles from '../styles';

export default function (props) {

	const petId = props.petId
	const [regsData, setRegsData] = useState([])
	const { getItem } = useAsyncStorage('@monypet:regs')

	const minDate = props.minDate
	const maxDate = props.maxDate

	async function fetchRegsData() {
		const response = await getItem()
		const TotalData = response ? JSON.parse(response) : []

		const data = TotalData.filter((item) => item.petId === petId)
		data.forEach((item) => {item.date = new Date(item.date)})

		console.log('teste 2:', minDate, maxDate)
		
		const filterData = data.filter((item) => {
			return item.date >= minDate && item.date <= maxDate
		})

		filterData.sort(function(a,b) { 
			return b.date.getTime() - a.date.getTime() 
		});

		setRegsData(filterData)
	}

	useFocusEffect(
		React.useCallback(() => {
			fetchRegsData()
		}, [])
	)

	const iconColor = (value) => {
		if (value <= 1) {
			return "#a54c1b"
		}
		else if (value > 1 && value <= 2) {
			return "#e1cc0f"
		}
		else if (value > 2 && value <= 3) {
			return "#7a7777"
		}
		else if (value > 3 && value <= 4) {
			return "#68b166"
		}
		else {
			return "#107d07"
		}
	}

	const icon = (value) => {
		if (value <= 1) {
			return "emoticon-angry"
		}
		else if (value > 1 && value <= 2) {
			return "emoticon-sad"
		}
		else if (value > 2 && value <= 3) {
			return "emoticon-neutral"
		}
		else if (value > 3 && value <= 4) {
			return "emoticon-happy"
		}
		else {
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

	if(regsData.length > 0){
		fetchRegsData()
		return (
			<View>
				<Text style={styles.scrollTitle}> Últimos Registros: </Text>
				{regsData.map((item, index) => {
					return (
						<View style={styles.boxRegs} key={index}>
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
		)
	} else {
		return (
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Text style={styles.addRegsTitle}> Adicione registos do seu pet aqui </Text>
				<AntDesign name="arrowdown" size={40} color="#75739c" />
			</View>
		)
	}
}