import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground, Alert, Image } from 'react-native'

import { RadioButton } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import Header1 from '../../components/header1'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'

import { styles } from './styles'
import { THEME } from '../../theme'


export function ScVizuPet({ route, navigation }) {
	const { petId } = route.params

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

			console.log(previousPets)

			Toast.show({
				type: 'success',
				text1: 'Dados do pet alterados',
				text2: `Suas alterações foram salvas!`,
			})

			// Aviso de exclusão de Pet
			navigation.navigate('ScPetChoice')
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível excluir pet',
			})
		}
	}

	// Aviso de carregagem de dados
	async function handleFetchData() {
		try {
			const response = await getItem()
			const data = response ? JSON.parse(response) : []
			const dataPet = data.find((pet) => pet.id === petId)

			setDataValues(dataPet)

		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível carregar dados',
			})
		}
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

	// Alerta de exclusão de dados 
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

	// Remoção de item
	async function removeItem() {
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

			Toast.show({
				type: 'info',
				text1: 'Pet excluído',
				text2: `Poxa que pena!`,
			})

			// Aviso de exclusão de Pet
			navigation.navigate('ScPetChoice')
		} catch {
			console.log(error)
			Toast.show({
				type: 'error',
				text1: 'Não foi possível excluir pet',
			})
		}
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

	// Barra de informações
	return (
		<SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
			{/* Cabeçalho */}
			<Header1 txt1={'Informações do pet'} bt2Color={'#747474'} onPressBt2={() => handleRemovePet()} onPressBt1={() => navigation.goBack()} />

			{/* Rolagem */}
			<ScrollView contentContainerStyle={styles.scroll}>
				{/* Imagem do pet */}
				<View style={styles.viewImgPet}>
					<FontAwesome name="pencil" size={20} color="transparent" style={{ marginRight: 10 }} />
					<TouchableOpacity onPress={pickImage}>
						<Image
							source={petImage ? { uri: petImage } : require('../../assets/images/AddPet.png')}
							resizeMode={'stretch'}
							style={styles.imgPet}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={pickImage}>
						<FontAwesome name="pencil" size={20} color="#461EA2" style={{ marginLeft: 10 }} />
					</TouchableOpacity>
				</View>

				{/* Informações de Nome */}
				<View style={{ marginHorizontal: 30 }}>
					<Text style={styles.lineText}> Nome do seu pet:</Text>
					<View style={{ flexDirection: 'row' }}>
						<TextInput
							style={styles.txtInformation}
							value={petName}
							onChangeText={setPetName}
							ref={refName}
						>
						</TextInput>
						<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refName)}>
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>

					{/* Informações de Idade */}
					<Text style={styles.lineText}>Idade do seu pet:</Text>
					<View style={{ flexDirection: 'row' }}>
						<TextInput
							style={styles.txtInformation}
							value={petYears}
							onChangeText={setPetYears}
							ref={refYears}
						>
						</TextInput>
						<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refYears)}>
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>

					{/* Informações de Raça */}
					<Text style={styles.lineText}>Raça:</Text>
					<View style={{ flexDirection: 'row' }}>
						<TextInput
							style={styles.txtInformation}
							value={petRace}
							onChangeText={setPetRace}
							ref={refRace}
						>
						</TextInput>
						<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refRace)}>
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>

					{/* Informações de Peso */}
					<Text style={styles.lineText}>Peso:</Text>
					<View style={{ flexDirection: 'row' }}>
						<TextInput
							style={styles.txtInformation}
							value={petWeight}
							onChangeText={setPetWeight}
							ref={refWeight}
						>
						</TextInput>
						<TouchableOpacity style={styles.styleButton} onPress={() => handleClick(refWeight)}>
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>

					{/* Informações de Pelagem */}
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
							<FontAwesome name="pencil" size={20} color="#461EA2" />
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
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>

					{/* Conteúdo de Espécie */}
					<Text style={styles.lineText}>Ele(a) é um:</Text>
					<RadioButton.Group value={petType}
						onValueChange={(newValue) => { setPetType(newValue) }}
					>
						<View style={styles.selectPet}>
							<RadioButton
								value="dog"
								color="#527BCB"
								uncheckedColor="#527BCB"
							/>
							<Text style={styles.styleTextSelection}>Cachorro</Text>

							<RadioButton
								value="cat"
								color="#527BCB"
								uncheckedColor="#527BCB"
							/>
							<Text style={styles.styleTextSelection}>Gato</Text>
						</View>
					</RadioButton.Group>

					{/* Informações de Descrição */}
					<Text style={styles.lineText}>Descrição:</Text>
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
							<FontAwesome name="pencil" size={20} color="#461EA2" />
						</TouchableOpacity>
					</View>
				</View>

				<ImageBackground
					source={require('../../assets/images/Onda.png')}
					resizeMode={'stretch'}>
					<View style={styles.styleWave}>
						<TouchableOpacity style={styles.saveButton} onPress={handleSaveData}>
							<Text style={{ color: 'white', fontSize: THEME.FONT_SIZE.LG }}>Salvar</Text>
						</TouchableOpacity>

						{/* Direitos Autorais */}
						<Text style={styles.styleCopyRight}>
							COPYRIGHT@MonyPet
						</Text>
					</View>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}