import React, { useCallback, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, ImageBackground, TextInput, Alert } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import styles from './styles'

import Header1 from '../../components/header1';
import Registers from './components/Registers';

import { SafeAreaView } from 'react-native-safe-area-context';

export function ScRegisterAdd({ navigation, route }) {
	const { petType, petId, regId, screenTitle } = route.params

	const data = {
		mood: [
			{ value: 1, text: 'Péssimo', icon: 'emoticon-angry' },
			{ value: 2, text: 'Ruim', icon: 'emoticon-sad' },
			{ value: 3, text: 'Neutro', icon: 'emoticon-neutral' },
			{ value: 4, text: 'Bom', icon: 'emoticon-happy' },
			{ value: 5, text: 'Ótimo', icon: 'emoticon-excited' }
		],
		mess: [
			{ value: 1, text: 'Demais', icon: 'emoticon-angry' },
			{ value: 2, text: 'Muita', icon: 'emoticon-sad' },
			{ value: 3, text: 'Média', icon: 'emoticon-neutral' },
			{ value: 4, text: 'Pouca', icon: 'emoticon-happy' },
			{ value: 5, text: 'Não fez', icon: 'emoticon-excited' }
		],
		feeding: [
			{ value: 1, text: 'Péssima', icon: 'emoticon-angry' },
			{ value: 2, text: 'Ruim', icon: 'emoticon-sad' },
			{ value: 3, text: 'Neutra', icon: 'emoticon-neutral' },
			{ value: 4, text: 'Boa', icon: 'emoticon-happy' },
			{ value: 5, text: 'Ótima', icon: 'emoticon-excited' }
		],
	}

	const dataDog = {
		rest: [
			{ value: 1, text: 'Péssimo', icon: 'emoticon-angry' },
			{ value: 2, text: 'Ruim', icon: 'emoticon-sad' },
			{ value: 3, text: 'Neutro', icon: 'emoticon-neutral' },
			{ value: 4, text: 'Bom', icon: 'emoticon-happy' },
			{ value: 5, text: 'Ótimo', icon: 'emoticon-excited' }
		],
		tour: [
			{ value: 1, text: '0', icon: 'numeric-0-circle' },
			{ value: 2, text: '1', icon: 'numeric-1-circle' },
			{ value: 4, text: '2', icon: 'numeric-2-circle' },
			{ value: 5, text: '3 ou +', icon: 'numeric-3-circle' },
		],
	}

	const dataCat = {
		hairLoss: [
			{ value: 1, text: 'Demais', icon: 'emoticon-angry' },
			{ value: 2, text: 'Alta', icon: 'emoticon-sad' },
			{ value: 3, text: 'Acima do normal', icon: 'emoticon-neutral' },
			{ value: 4, text: 'Pouco acima do normal', icon: 'emoticon-happy' },
			{ value: 5, text: 'Normal', icon: 'emoticon-excited' }
		]
	}

	const [moodV, setMoodV] = useState(1)
	const [messV, setMessV] = useState(1)
	const [feedingV, setFeedingV] = useState(1)
	const [noteV, setNoteV] = useState("")

	//Dog consts
	const [restV, setRestV] = useState(1)
	const [tourV, setTourV] = useState(1)

	//Cat consts
	const [hairLossV, setHairLossV] = useState(1)

	const { getItem, setItem } = useAsyncStorage('@monypet:regs')

	useFocusEffect(//Quando focar na tela
		useCallback(() => {
			if (regId != undefined) {
				fetchRegsData()
			}
		}, [])
	)

	async function fetchRegsData() {
		if (regId) {
			const response = await getItem()
			const dataTotal = response ? JSON.parse(response) : []

			const data = dataTotal.find((reg) => reg.id === regId)

			data.date != undefined ? setDate(new Date(data.date)) : 1
			data.moodV != undefined ? setMoodV(data.moodV) : 1
			data.messV != undefined ? setMessV(data.messV) : 1
			data.feedingV != undefined ? setFeedingV(data.feedingV) : 1
			data.noteV != undefined ? setNoteV(data.noteV) : 1

			//Dog
			data.restV != undefined ? setRestV(data.restV) : 1
			data.tourV != undefined ? setTourV(data.tourV) : 1

			//cat
			data.hairLossV != undefined ? setHairLossV(data.hairLossV) : 1
		}
	}

	async function handleSaveReg() {
		try {
			const id = regId ? regId : uuid.v4()
			let newReg

			if (petType == 'dog') {
				let med = (moodV + messV + feedingV + restV + tourV) / 5
				newReg = {
					id,
					petId,
					date,
					moodV,
					messV,
					feedingV,
					noteV,
					restV,
					tourV,
					med
				}

			} else {
				let med = (moodV + messV + feedingV + hairLossV) / 4

				newReg = {
					id,
					petId,
					date,
					moodV,
					messV,
					feedingV,
					noteV,
					hairLossV,
					med
				}
			}

			const response = await getItem()
			const previousRegs = response ? JSON.parse(response) : []

			if (regId) {
				const index = previousRegs.indexOf(previousRegs.find((reg) => reg.id === regId))
				previousRegs[index] = newReg
				setItem(JSON.stringify(previousRegs))

				Toast.show({
					type: 'success',
					text1: 'Registro atualizado',
				})
			} else {

				const regsData = [newReg, ...previousRegs]
				setItem(JSON.stringify(regsData))

				Toast.show({
					type: 'success',
					text1: 'Registro adicionado',
				})
			}

			navigation.goBack()
		} catch (error) {
			// Aviso de erro
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível adicionar registro',
			})
		}
	}

	async function handleRemoveReg() {
		Alert.alert('Aviso!', 'Deseja realmente excluir o registro?', [
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
		try {
			const response = await getItem()
			const previousRegs = response ? JSON.parse(response) : []

			const newRegsData = previousRegs.filter((item) => item.id !== regId)

			await setItem(JSON.stringify(newRegsData))

			Toast.show({
				type: 'info',
				text1: 'Registro excluído',
			})

			navigation.goBack()
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível excluir pet',
			})
		}
	}

	const [date, setDate] = useState(() => {
		const date = new Date()
		date.setHours(0, 0, 0, 0)
		return date
	})
	const [showDP, setShowDP] = useState(false)

	const onChangeDate = (event, selectedDate) => {
		setShowDP(false)
		selectedDate.setHours(0, 0, 0, 0)
		setDate(selectedDate);
	}

	const formatDate = (date) => {
		let d = date.getDate()
		let mo = date.getMonth() + 1
		let y = date.getFullYear()

		return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
	}

	const dogItens = () => {
		return (
			<View>
				{/* //Sono - rest */}
				<Registers text={'Avalie a condição do sono:'} dataMap={dataDog.rest} var={restV} setVar={setRestV} />
				{/* //Passeio - tour */}
				<Registers text={'Quantidade de passeios no dia:'} dataMap={dataDog.tour} var={tourV} setVar={setTourV} />
			</View>
		)
	}

	const catItens = () => {
		return (
			<View>
				{/* //Queda de Pelo - hairLoss */}
				<Registers text={'Como está a queda de pelo:'} dataMap={dataCat.hairLoss} var={hairLossV} setVar={setHairLossV} />
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{flex: 1,backgroundColor: 'white',}}>

			{/* Cabeçalho */}
			<Header1 txt1={screenTitle} bt2Color={regId ? '#9a8db0' : 'transparent'} 
			onPressBt1={() => navigation.goBack()} onPressBt2={regId ? () => handleRemoveReg() : undefined}/>

			{/* Rolagem */}
			<ScrollView contentContainerStyle={styles.scrollStyle}>

				{/* Mes */}
				<Text style={styles.txtSelectDay}>Selecione o dia:</Text>
				<View>
					<TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
						<AntDesign name="calendar" size={18} color="#75739c" style={{ marginHorizontal: 5 }} />
						<Text style={styles.txtDate}> {formatDate(date)} </Text>
						<AntDesign name="caretdown" size={18} color="gray" style={{ marginHorizontal: 5 }} />
					</TouchableOpacity>

					{showDP && (
						<DateTimePicker
							value={date}
							mode={'date'}
							onChange={onChangeDate}
						/>
					)}
				</View>


				{/* Registros, Descrição e Botão */}
				<View>
					{/* Humor - mood */}
					<Registers text={'Avalie o humor do seu pet:'} dataMap={data.mood} var={moodV} setVar={setMoodV} />
					{/* Bagunça - mess */}
					<Registers text={'Avalie em relação a bagunça:'} dataMap={data.mess} var={messV} setVar={setMessV} />
					{/* //Alimentacao - feeding */}
					<Registers text={'Avalie o estado da alimentação:'} dataMap={data.feeding} var={feedingV} setVar={setFeedingV} />

					{/* especifico e gato e cachorro */}
					{petType == 'dog' ? dogItens() : catItens()}

					{/* Descrição do pet */}
					<Text style={[styles.lineRegister, { color: '#75739c' }]}>Anotações do pet:</Text>
					<TextInput
						style={styles.txtDesc}
						multiline={true}
						onChangeText={setNoteV}
						maxLength={250}
						value={noteV}>
					</TextInput>

					{/* Botão de adição */}
					<ImageBackground
						source={require('../../assets/images/Onda.png')}
						resizeMode={'stretch'}>
						<View
							style={styles.imgView}>
							<TouchableOpacity
								style={styles.styleButton}
								onPress={() => handleSaveReg()}>
								<Text style={styles.stylesTextButton}>Salvar</Text>
							</TouchableOpacity>

							{/* Direitos Autorais */}
							<Text
								style={styles.styleCopyRight}>
								COPYRIGHT@MonyPet
							</Text>
						</View>
					</ImageBackground>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
