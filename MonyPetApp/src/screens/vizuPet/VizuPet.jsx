import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground, Alert, Image } from 'react-native'

import { RadioButton } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import Header1 from '../../components/Header1'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'

import { styles } from './styles'
import { THEME } from '../../theme'
import { Loading } from '../../components/Loading'

export function ScVizuPet({ route, navigation }) {
	const { petId } = route.params
	const [loading, setLoading] = React.useState(false)

	const [petName, setPetName] = useState('')
	const [petYears, setPetYears] = useState('')
	const [petRace, setPetRace] = useState('')
	const [petWeight, setPetWeight] = useState('')
	const [petType, setPetType] = useState('dog')
	const [petImage, setPetImage] = useState(null)

	const [petFur, setPetFur] = useState('')
	const [petBehavior, setPetBehavior] = useState('')
	const [petDescription, setPetDescription] = useState('')

	const { getItem, setItem } = useAsyncStorage('@monypet:pets')

	const refName = useRef(null)
	const refYears = useRef(null)
	const refRace = useRef(null)
	const refWeight = useRef(null)
	const refFur = useRef(null)
	const refBehavior = useRef(null)
	const refDesc = useRef(null)

	const handleClick = (ref) => {
		ref.current.focus();
	}

	async function handleSaveData() {
		setLoading(true)
		try {
			//Pet
			const responsePets = await getItem()
			const previousPets = responsePets ? JSON.parse(responsePets) : []

			const currentPetIndex = previousPets.indexOf(previousPets.find((i) => i.id === petId))

			const newPetData = {
				id: petId,
				petName,
				petYears,
				petRace,
				petWeight,
				petType,
				petImage,
				petFur,
				petBehavior,
				petDescription,
			}

			previousPets[currentPetIndex] = newPetData
			await setItem(JSON.stringify(previousPets))

			Toast.show({
				type: 'success',
				text1: 'Dados do pet alterados',
				text2: `Suas altera????es foram salvas!`,
			})

			// Aviso de exclus??o de Pet
			navigation.navigate('ScHome', { petType: petType, petId: petId, petImage: petImage })
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'N??o foi poss??vel excluir pet',
			})
		}
		setLoading(false)
	}

	// Aviso de carregagem de dados
	async function handleFetchData() {
		setLoading(true)
		try {
			const response = await getItem()
			const data = response ? JSON.parse(response) : []
			const dataPet = data.find((pet) => pet.id === petId)

			setDataValues(dataPet)

		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'N??o foi poss??vel carregar dados',
			})
		}
		setLoading(false)
	}

	function setDataValues(data) {
		setPetName(data.petName)
		setPetYears(data.petYears)
		setPetRace(data.petRace)
		setPetWeight(data.petWeight)
		setPetType(data.petType)
		setPetImage(data.petImage)

		setPetFur(data.petFur)
		setPetBehavior(data.petBehavior)
		setPetDescription(data.petDescription)
	}

	useFocusEffect(
		React.useCallback(() => {
			handleFetchData()
		}, [])
	)

	// Alerta de exclus??o de dados 
	async function handleRemovePet() {
		Alert.alert('Aviso!', 'Deseja realmente excluir o pet e seus registros?', [
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

	// Remo????o de item
	async function removeItem() {
		setLoading(true)
		try {
			//Pet
			const responsePets = await getItem()
			const previousPets = responsePets ? JSON.parse(responsePets) : []

			const newPetsData = previousPets.filter((item) => item.id !== petId)

			await setItem(JSON.stringify(newPetsData))

			//Registros
			const responseRegs = await AsyncStorage.getItem('@monypet:regs')
			const previousRegs = responseRegs ? JSON.parse(responseRegs) : []

			const newRegsData = previousRegs.filter((item) => item.petId !== petId)
			await AsyncStorage.setItem('@monypet:regs', JSON.stringify(newRegsData))

			//Compromissos
			const responseTasks = await AsyncStorage.getItem('@monypet:tasks')
			const previousTasks = responseTasks ? JSON.parse(responseTasks) : []

			const newTaksData = previousTasks.filter((item) => item.petId !== petId)
			await AsyncStorage.setItem('@monypet:tasks', JSON.stringify(newTaksData))

			Toast.show({
				type: 'info',
				text1: 'Pet exclu??do',
				text2: `Poxa que pena!`,
			})

			// Aviso de exclus??o de Pet
			navigation.navigate('ScPetChoice')
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'N??o foi poss??vel excluir pet',
			})
		}
		setLoading(false)
	}

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		});

		if (!result.cancelled) {
			setPetImage(result.uri);
		}
	}

	// Barra de informa????es
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			{/* Cabe??alho */}
			<Header1 txt1={'Informa????es do pet'} bt2Color={THEME.COLORS.GRAY} onPressBt2={() => handleRemovePet()} onPressBt1={() => navigation.goBack()} />

			{loading ?
				<View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
					<Loading size={10} />
				</View> :
				<ScrollView contentContainerStyle={styles.scroll}>
					{/* Imagem do pet */}
					<View style={styles.viewImgPet}>
						<FontAwesome name="pencil" size={20} color="transparent" style={{ marginRight: 10 }} />
						<TouchableOpacity onPress={pickImage}>
							<Image
								source={petImage ? { uri: petImage } : petType == 'dog' ? require('../../assets/images/dogIcon.png') : require('../../assets/images/catIcon.png')}
								resizeMode={'stretch'}
								style={styles.imgPet}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={pickImage}>
							<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} style={{ marginLeft: 10 }} />
						</TouchableOpacity>
					</View>

					{/* Informa????es de Nome */}
					<View style={{ marginHorizontal: 30 }}>
						<Text style={styles.lineText}>Nome do seu pet:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petName}
								onChangeText={setPetName}
								ref={refName}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refName)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Informa????es de Idade */}
						<Text style={styles.lineText}>Idade do seu pet:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petYears}
								onPointerLeave={setPetYears}
								ref={refYears}
								keyboardType={'number-pad'}
								maxLength={2}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refYears)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Informa????es de Ra??a */}
						<Text style={styles.lineText}>Ra??a:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petRace}
								onChangeText={setPetRace}
								ref={refRace}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refRace)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Informa????es de Peso */}
						<Text style={styles.lineText}>Peso:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petWeight}
								onChangeText={setPetWeight}
								ref={refWeight}
								keyboardType={'number-pad'}
								maxLength={3}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refWeight)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Informa????es de Pelagem */}
						<Text style={styles.lineText}>Tipo de Pelagem:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petFur}
								onChangeText={setPetFur}
								ref={refFur}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refFur)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Dados de Comportamento */}
						<Text style={styles.lineText}>Comportamento:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtInformation}
								value={petBehavior}
								onChangeText={setPetBehavior}
								ref={refBehavior}
							>
							</TextInput>
							<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refBehavior)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>

						{/* Conte??do de Esp??cie */}
						<Text style={styles.lineText}>Ele(a) ?? um:</Text>
						<RadioButton.Group value={petType}
							onValueChange={(newValue) => { setPetType(newValue) }}
						>
							<View style={styles.selectPet}>
								<RadioButton
									value="dog"
									color={THEME.COLORS.PRIMARY}
									uncheckedColor={THEME.COLORS.PRIMARY}
								/>
								<Text style={styles.styleTextSelection}>Cachorro</Text>

								<RadioButton
									value="cat"
									color={THEME.COLORS.PRIMARY}
									uncheckedColor={THEME.COLORS.PRIMARY}
								/>
								<Text style={styles.styleTextSelection}>Gato</Text>
							</View>
						</RadioButton.Group>

						{/* Informa????es de Descri????o */}
						<Text style={styles.lineText}>Descri????o:</Text>
						<View style={{ flexDirection: 'row' }}>
							<TextInput
								style={styles.txtDesc}
								value={petDescription}
								onChangeText={setPetDescription}
								multiline={true}
								numberOfLines={5}
								maxLength={250}
								ref={refDesc}
							>
							</TextInput>
							<TouchableOpacity style={styles.pencil} onPress={() => handleClick(refDesc)}>
								<FontAwesome name="pencil" size={20} color={THEME.COLORS.PRIMARY} />
							</TouchableOpacity>
						</View>
					</View>

					<ImageBackground
						source={require('../../assets/images/Onda.png')}
						resizeMode={'stretch'}>
						<View style={styles.styleWave}>
							<TouchableOpacity style={styles.saveButton} onPress={handleSaveData}>
								<Text style={{ color: THEME.COLORS.TEXT_BUTTON, fontSize: THEME.FONT_SIZE.LG }}>Salvar</Text>
							</TouchableOpacity>

							{/* Direitos Autorais */}
							<Text style={styles.styleCopyRight}>
								COPYRIGHT@MonyPet
							</Text>
						</View>
					</ImageBackground>
				</ScrollView>
			}
		</SafeAreaView>
	)
}