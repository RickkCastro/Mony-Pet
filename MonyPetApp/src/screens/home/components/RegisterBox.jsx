import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import styles from '../styles';
import { THEME } from '../../../theme';
import { Loading } from '../../../components/Loading';

export default (props) => {

	const navigation = useNavigation()
	const [loading, setLoading] = React.useState(false)

	const petId = props.petId
	const petType = props.petType

	const [regsData, setRegsData] = useState([])

	const [dataLength, setDataLength] = useState(0)

	const { getItem } = useAsyncStorage('@monypet:regs')

	async function fetchRegsData() {
		setLoading(true)
		const response = await getItem()
		const TotalData = response ? JSON.parse(response) : []

		const data = TotalData.filter((item) => item.petId === petId)

		setDataLength(data.length)

		data.map((item) => item.date = new Date(item.date))

		data.sort(function (a, b) {
			return b.date.getTime() - a.date.getTime()
		});

		setRegsData(data)
		setLoading(false)
	}

	useFocusEffect(//Quando focar na tela
		useCallback(() => {
			fetchRegsData()
		}, [])
	)

	function filterData() {
		const minDate = props.minDate
		const maxDate = props.maxDate

		const f = regsData.filter((item) => item.date >= minDate && item.date <= maxDate)
		return f
	}


	const iconColor = (value) => {
		if (value <= 1) {
			return THEME.COLORS.EMOTE_ANGRY
		}
		else if (value > 1 && value <= 2) {
			return THEME.COLORS.EMOTE_SAD
		}
		else if (value > 2 && value <= 3) {
			return THEME.COLORS.EMOTE_NEUTRAL
		}
		else if (value > 3 && value <= 4) {
			return THEME.COLORS.EMOTE_HAPPY
		}
		else {
			return THEME.COLORS.EMOTE_EXCITED
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

	if (loading) {
		return (
			<View style={{ alignSelf: 'center', flex: 1, justifyContent: 'center', marginVertical: 30 }}>
				<Loading size={10} />
			</View>
		)
	} else {
		if (regsData.length > 0) {
			if (filterData().length > 0) {
				return (
					<View style={{ paddingBottom: 25 }}>
						<Text style={styles.scrollTitle}> Últimos Registros: </Text>

						{filterData().map((item, index) => {
							return (
								<TouchableOpacity style={styles.boxRegs} key={index}
									onPress={() => navigation.navigate('ScRegisterAdd', { petType: petType, petId: petId, regId: item.id, screenTitle: 'Editar registro' })}>
									<MaterialCommunityIcons name={icon(item.med)} size={70} color={iconColor(item.med)} />
									<View style={styles.viewTextRegister}>
										<Text style={styles.textDay}>
											Dia: {formatDate(item.date)}
										</Text>
										<Text style={{ fontSize: THEME.FONT_SIZE.SM }}>
											{item.noteV == "" ? 'Registro sem anotação' : item.noteV}
										</Text>
									</View>
								</TouchableOpacity>
							)
						})}

						<View style={styles.lookRegister}>
							<Text style={styles.bottomRegsTxt}> Total: {dataLength}</Text>
							<Text style={styles.bottomRegsTxt}> Mostrando: {filterData().length}</Text>
						</View>
					</View>
				)
			} else {
				return (
					<View style={{ paddingBottom: 25 }}>
						<Text style={styles.scrollTitle}> Últimos Registros: </Text>
						<View style={styles.Title.viewReturn}>
							<Text style={styles.notRegsTitle}> Não existe nenhum resgistro nesse intervalo de tempo! </Text>
						</View>
						<View style={styles.lookRegister}>
							<Text style={styles.bottomRegsTxt}> Total: {dataLength}</Text>
							<Text style={styles.bottomRegsTxt}> Mostrando: {filterData().length}</Text>
						</View>
					</View>
				)
			}
		} else {
			return (
				<View style={styles.viewReturn}>
					<Text style={styles.addRegsTitle}> Adicione registos do seu pet aqui </Text>
					<AntDesign name="arrowdown" size={40} color={THEME.COLORS.PRIMARY} />
				</View>
			)
		}
	}
}