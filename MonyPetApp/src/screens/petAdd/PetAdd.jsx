import * as React from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image, FlatList, TextInput, ScrollView, Alert} from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { RadioButton } from 'react-native-paper'
import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import Header1 from '../../components/Header1'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker';

import { styles } from './styles'
import { THEME } from '../../theme'

export function ScPetAdd({ navigation }) {
  const [petName, setPetName] = React.useState('')
  const [petYears, setPetYears] = React.useState('')
  const [petRace, setPetRace] = React.useState('')
  const [petWeight, setPetWeight] = React.useState('')
  const [petType, setPetType] = React.useState('dog')

  const [petImage, setPetImage] = React.useState(null)

  const { getItem, setItem } = useAsyncStorage('@monypet:pets')
  // Dados do Pet
  async function handleSavePet() {
    try {
      if (petName != '') {
        const id = uuid.v4()

        const newPet = {
          id,
          petName,
          petYears,
          petRace,
          petWeight,
          petType,
          petImage,
        }

        const response = await getItem()
        const previousPets = response ? JSON.parse(response) : []

        const petsData = [...previousPets, newPet]

        setItem(JSON.stringify(petsData))
        // Adição de Pet
        Toast.show({
          type: 'success',
          text1: 'Pet adicionado',
          text2: `Bem vindo(a) ${newPet.petName}`,
        })

        navigation.goBack()
      } else {
        // Aviso de erro
        Toast.show({
          type: 'error',
          text1: 'ERRO',
          text2: 'Coloque pelo menos um nome!',
        })
      }
    } catch (error) {
      // Aviso de erro
      console.log(error)
      Toast.show({
        type: 'error',
        text1: 'Não foi possível cadastrar',
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
  };

  return (
    // Barra de informações
    <SafeAreaView style={styles.safeTela}>
      {/* Cabeçalho */}
      <Header1 txt1={'Adicionar pet'} bt2Color={'transparent'} onPressBt1={() => navigation.goBack()}/>

      {/* Rolagem */}
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.backgroundAnimal}>
          {/* Imagem de Fundo */}
            <TouchableOpacity onPress={pickImage}>
              {petImage ? 
                <Image 
                  source={{uri: petImage}}
                  resizeMode={'stretch'}
                  style={styles.addPhoto}
                />: 
                <View style={styles.addPhoto}>
                  <AntDesign name="plus" size={30} color="black" />
                </View>}
            </TouchableOpacity>
        </View>

        {/* Barra de nome */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.lineText}>Nome do pet:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: Rex'}
            placeholderTextColor="gray"
            onChangeText={setPetName}></TextInput>

          {/* Seleção de Espécie */}
          <Text style={styles.lineText}>Animal:</Text>
          <RadioButton.Group
            onValueChange={(newValue) => {
              setPetType(newValue)
            }}
            value={petType}>
            <View style={styles.viewRadio}>
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

          {/* Barra de idade */}
          <Text style={styles.lineText}>Idade:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: 6'}
            placeholderTextColor="gray"
            onChangeText={setPetYears}
            keyboardType={'number-pad'}
            maxLength={2}></TextInput>

          {/* Barra de Raça */}
          <Text style={styles.lineText}>Raça:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: Pinscher'}
            placeholderTextColor="gray"
            onChangeText={setPetRace}></TextInput>

          {/* Barra de Peso */}
          <Text style={styles.lineText}>Peso:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: 3,2kg'}
            placeholderTextColor="gray"
            onChangeText={setPetWeight}
            keyboardType={'number-pad'}
            maxLength={3}></TextInput>
        </View>

        {/* Botão de adição */}
        <ImageBackground
          source={require('../../assets/images/Onda.png')}
          resizeMode={'stretch'}>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.styleButton}
              onPress={handleSavePet}>
              <Text style={styles.stylesTextButton}>Adicionar</Text>
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