import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, ImageBackground, Alert, Switch } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'
import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import Header1 from '../../components/Header1'

import { styles } from './styles';
import { THEME } from '../../theme';
import { Loading } from '../../components/Loading';
import { FilterSelected } from '../../components/FilterSelected/FilterSelected';

import OneSignal from 'react-native-onesignal';

export function ScAddTask({ route, navigation }) {
	const { petId, taskId, screenTitle, clickDate } = route.params
	const [loading, setLoading] = useState(false)

	const [titleT, setTitleT] = useState('')
	const [descT, setDescT] = useState('')
	const [typeT, setTypeT] = useState('stethoscope')

	const typeSelects = [
		{ label: 'Tosa', value: 'content-cut' },
		{ label: 'Banho', value: 'bathtub' },
		{ label: 'Vacina', value: 'needle' },
		{ label: 'Consulta', value: 'stethoscope' },
		{ label: 'Remédio', value: 'medical-bag' },
		{ label: 'Outro', value: 'paw' },
	]

	const [date, setDate] = useState(new Date(clickDate))
	const [showDP, setShowDP] = useState(false)

	const [time, setTime] = useState(new Date(clickDate))
	const [showTP, setShowTP] = useState(false)

	const [previousDate, setPreviousDate] = useState()

	const [doneT, setDoneT] = useState(false)

	const [isNotify, setIsNotify] = useState(true);
	const toggleSwitch = () => setIsNotify(!isNotify);

	const [pushId, setPushId] = useState()
	const [fakePushId, setFakePushId] = useState()
	const [userId, setUserId] = useState()
	const [isSave, setIsSave] = useState(false)

	useEffect(() => {
		setUserIdF()
	}, [])

	useEffect(() => {
		console.log("Abriu: ", pushId)
		if (isSave) {
			console.log("Fechou: ", pushId)
			saveTask()
		}
	}, [pushId])

	async function setUserIdF() {
		const { userId } = await OneSignal.getDeviceState();
		setUserId(userId)
	}

	const onChangeDate = (event, selectedDate) => {
		setShowDP(false)
		setDate(selectedDate)
	}

	const onChangeTime = (event, selectedTime) => {
		setShowTP(false)
		setTime(selectedTime)
	}

	useEffect(() => {
		date.setHours(time.getHours())
		date.setMinutes(time.getMinutes())
	}, [time])


	const formatDate = (date) => {
		let d = date.getDate()
		let mo = date.getMonth() + 1
		let y = date.getFullYear()

		return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
	}

	const formatTime = (time = new Date()) => {
		let h = time.getHours()
		let m = time.getMinutes()

		return (('0' + h).slice(-2) + ':' + ('0' + m).slice(-2))
	}

	const { getItem, setItem } = useAsyncStorage('@monypet:tasks')

	useFocusEffect(//Quando focar na tela
		useCallback(() => {
			if (taskId) {
				fetchTaskData()
			}
		}, [])
	)

	async function fetchTaskData() {
		if (taskId) {
			const response = await getItem()
			const dataTotal = response ? JSON.parse(response) : []

			const data = dataTotal.find((task) => task.id === taskId)

			setDate(new Date(data.date))
			setTime(new Date(data.date))
			setTitleT(data.titleT)
			setTypeT(data.typeT)
			setDescT(data.descT)
			setDoneT(data.doneT)

			setFakePushId(data.pushId)
			setPreviousDate(new Date(data.date))

			setIsNotify(data.isNotify)
			console.log(data)
		}
		setLoading(false)
	}

	function handleSaveTask() {
		if (titleT != '') {
			setNotification()
			setIsSave(true)
		}
		else {
			Toast.show({
				type: 'error',
				text1: 'Coloque um nome na tarefa',
			})
		}
	}

	function createNotification(headings = "Titulo", contents = "Teste de notificação", send_after = null) {
		const options = {
			method: "POST",
			headers: {
				accept: "application/json",
				Authorization: "Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi",
				"content-type": "application/json",
			},
			body: JSON.stringify({
				headings: { en: headings },
				contents: { en: contents },
				include_player_ids: [userId],
				send_after: send_after,
				app_id: "43517dad-1dea-4573-bbb4-a0135ac4e7f5",
			}),
		};

		fetch("https://onesignal.com/api/v1/notifications", options)
			.then((response) => response.json())
			.then((response) => { setPushId(response.id), console.log(response) })
			.catch((err) => console.log(err))
	}

	function cancelNotification(pushId) {
		const options = {
			method: 'DELETE',
			headers: { accept: 'application/json', Authorization: 'Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi' }
		};

		fetch(`https://onesignal.com/api/v1/notifications/${pushId}?app_id=43517dad-1dea-4573-bbb4-a0135ac4e7f5`, options)
			.then(response => response.json())
			.then(response => console.log(response))
			.catch(err => console.error(err));
	}

	function editNotification(pushId) {
		cancelNotification(pushId)
		createNotification("MonyPet - Compromisso", `Você possui um compromisso marcado: ${titleT}`,
			date.toUTCString())
		console.log('editado')
	}

	function setNotification() {
		setLoading(true)
		if (date > new Date()) { //Data permitida
			if (fakePushId) { //Ja possui notificação
				//Notificação desativada
				if (!isNotify) {
					setPushId(null)
					cancelNotification(fakePushId)
					return
				}

				//mudou a data
				if (previousDate && date.toUTCString() !== previousDate.toUTCString()) {
					editNotification(fakePushId)
					return
				}

				setPushId(fakePushId)
			}
			else { //Não possui notificação
				if (isNotify) { //Notificação ativada
					createNotification("MonyPet - Compromisso", `Você possui um compromisso marcado: ${titleT}`,
						date.toUTCString())
					console.log('criado')
				} else {
					setPushId(null)
				}
			}
		}
		else { //data não permitida
			if (fakePushId) {
				cancelNotification(fakePushId)
			}
			setPushId(null)
		}
	}

	async function saveTask() {
		setLoading(true)

		try {
			const id = taskId ? taskId : uuid.v4()

			let newTask = {
				id,
				pushId,
				isNotify,
				petId,
				date,
				titleT,
				typeT,
				descT,
				doneT,
			}

			const response = await getItem()
			const previousTasks = response ? JSON.parse(response) : []

			if (taskId) {
				const index = previousTasks.indexOf(previousTasks.find((task) => task.id === taskId))
				previousTasks[index] = newTask
				setItem(JSON.stringify(previousTasks))

				Toast.show({
					type: 'success',
					text1: 'Compromisso atualizado',
				})
			} else {

				const tasksData = [newTask, ...previousTasks]
				setItem(JSON.stringify(tasksData))

				Toast.show({
					type: 'success',
					text1: 'Compromisso adicionado',
				})
			}

			navigation.goBack()
		} catch (error) {
			// Aviso de erro
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível adicionar tarefa',
			})
		}
		setLoading(false)
	}

	async function handleRemoveTask() {
		Alert.alert('Aviso!', 'Deseja realmente excluir o compromisso?', [
			{
				text: 'Cancelar',
				onPress: () => console.log('Cancel Pressed'),
			},
			{
				text: 'Sim',
				onPress: () => removeItem(),
			}
		])
	}

	// Remoção de item
	async function removeItem() {
		setLoading(true)
		try {
			if(fakePushId) {
				cancelNotification(fakePushId)
			}

			const response = await getItem()
			const previousTasks = response ? JSON.parse(response) : []

			const newTasksData = previousTasks.filter((item) => item.id !== taskId)

			await setItem(JSON.stringify(newTasksData))

			Toast.show({
				type: 'info',
				text1: 'Compromisso excluído',
			})

			navigation.goBack()
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível excluir compromisso',
			})
		}
		setLoading(false)
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* Cabeçalho */}
			<Header1 txt1={screenTitle} bt2Color={taskId ? THEME.COLORS.BUTTON : 'transparent'}
				onPressBt2={taskId ? () => handleRemoveTask() : undefined} onPressBt1={() => navigation.goBack()} />

			{loading ?
				<View style={{ alignSelf: 'center', justifyContent: 'center', flex: 1 }}>
					<Loading size={10} />
				</View> :
				<ScrollView contentContainerStyle={styles.scrollStyle}>

					<View style={{ marginHorizontal: 20 }}>
						{/* Dia */}
						<Text style={styles.txtSelectDay}>Selecione o dia:</Text>
						<View>
							<TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
								<AntDesign name='calendar' size={18} color={THEME.COLORS.PRIMARY} style={{ marginHorizontal: 5 }} />
								<Text style={styles.txtDate}> {formatDate(date)} </Text>
								<AntDesign name='caretdown' size={18} color='gray' style={{ marginHorizontal: 5 }} />
							</TouchableOpacity>

							{showDP && (
								<DateTimePicker
									value={date}
									mode={'date'}
									onChange={onChangeDate}
								/>
							)}
						</View>

						{/* Hora */}
						<Text style={[styles.txtSelectDay, { marginTop: 20 }]}>Selecione o horário:</Text>
						<View>
							<TouchableOpacity onPress={() => setShowTP(true)} style={styles.monthStyle}>
								<AntDesign name='clockcircleo' size={18} color={THEME.COLORS.PRIMARY} style={{ marginHorizontal: 5 }} />
								<Text style={styles.txtDate}> {formatTime(time)} </Text>
								<AntDesign name='caretdown' size={18} color={THEME.COLORS.GRAY} style={{ marginHorizontal: 5 }} />
							</TouchableOpacity>

							{showTP && (
								<DateTimePicker
									value={time}
									mode={'time'}
									onChange={onChangeTime}
								/>
							)}
						</View>

						{/* Nome */}
						<Text style={styles.lineText}>Nome do Compromisso:</Text>
						<TextInput style={styles.txtInformation} placeholder={'Ex: Banho no petshop'}
							placeholderTextColor={THEME.COLORS.GRAY} onChangeText={setTitleT} value={titleT}>
						</TextInput>

						{/* Select do Tipo de Compromisso */}
						<Text style={styles.lineText}>Tipo de Compromisso:</Text>
						<FilterSelected onValueChange={(selectedItem, index) => setTypeT(typeSelects[index].value)}
							selectedValue={typeSelects.find((item) => item.value === typeT).label}
							data={typeSelects.map((item) => item.label)}
						/>

						{/* descrição*/}
						<Text style={styles.lineText}>Anotações do pet:</Text>
						<TextInput
							placeholder={'Ex: descreva seu compromisso aqui!'}
							style={styles.txtDesc}
							multiline={true}
							onChangeText={setDescT}
							maxLength={250}
							value={descT}>
						</TextInput>

						<View style={styles.switchView}>
							<Text style={styles.lineText}>Ativar notificação:</Text>
							<Switch
								style={styles.switch}
								trackColor={{ false: THEME.COLORS.GRAY, true: THEME.COLORS.PRIMARY }}
								thumbColor={isNotify ? THEME.COLORS.BUTTON : '#fff'}
								onValueChange={toggleSwitch}
								value={isNotify}
							/>
						</View>
					</View>

					{/* Botão de adição */}
					<ImageBackground
						source={require('../../assets/images/Onda.png')}
						resizeMode={'stretch'} style={{ marginTop: 30, }}>
						<View
							style={styles.imgView}>
							<TouchableOpacity
								style={styles.styleButton}
								onPress={() => handleSaveTask()}>
								<Text style={styles.stylesTextButton}>Salvar</Text>
							</TouchableOpacity>

							{/* Direitos Autorais */}
							<Text
								style={styles.styleCopyRight}>
								COPYRIGHT@MonyPet
							</Text>
						</View>
					</ImageBackground>

				</ScrollView>
			}
		</SafeAreaView>
	);
}