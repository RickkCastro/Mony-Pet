import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { RadioButton } from 'react-native-paper'

import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

export function ScPetAdd({ navigation }) {
  const [petName, setPetName] = React.useState('')
  const [petYears, setPetYears] = React.useState('')
  const [petRace, setPetRace] = React.useState('')
  const [petWeight, setPetWeight] = React.useState('')
  const [petType, setPetType] = React.useState('dog')

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

  return (
    // Barra de informações
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
      }}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.lineText}>Adicionar Pet</Text>

        <TouchableOpacity style={{ marginLeft: 15 }}>
          <AntDesign name="close" size={24} color="transparent" />
        </TouchableOpacity>
      </View>

      {/* Rolagem */}
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 30,
            marginTop: 20,
          }}>
          {/* Imagem de Fundo */}
          <ImageBackground
            source={require('../assets/images/DogAddImg.png')}
            resizeMode={'stretch'}
            imageStyle={{ margin: 10 }}>
            <TouchableOpacity style={styles.addPhoto}>
              <AntDesign name="plus" size={30} color="black" />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* Barra de nome */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.lineText}>Insira o nome do seu pet:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: Rex'}
            placeholderTextColor="gray"
            onChangeText={setPetName}></TextInput>

          {/* Seleção de Espécie */}
          <Text style={styles.lineText}>Ele(a) é um:</Text>
          <RadioButton.Group
            onValueChange={(newValue) => {
              setPetType(newValue)
            }}
            value={petType}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 8,
              }}>
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
          <Text style={styles.lineText}>Agora, a idade do seu pet:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: 6'}
            placeholderTextColor="gray"
            onChangeText={setPetYears}></TextInput>

          {/* Barra de Raça */}
          <Text style={styles.lineText}>E qual é a raça dele(a):</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: Pinscher'}
            placeholderTextColor="gray"
            onChangeText={setPetRace}></TextInput>

          {/* Barra de Peso */}
          <Text style={styles.lineText}>E quanto, ele(a) pesa:</Text>
          <TextInput
            style={styles.txtInformation}
            placeholder={'Ex: 3,2kg'}
            placeholderTextColor="gray"
            onChangeText={setPetWeight}></TextInput>
        </View>

        {/* Botão de adição */}
        <ImageBackground
          source={require('../assets/images/Onda.png')}
          resizeMode={'stretch'}>
          <View
            style={{
              alignItems: 'center',
              height: 180,
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <TouchableOpacity
              style={styles.styleButton}
              onPress={handleSavePet}>
              <Text style={{ color: 'white', fontSize: 18 }}>Adicionar</Text>
            </TouchableOpacity>

            {/* Direitos Autorais */}
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                alignSelf: 'center',
                marginTop: 10,
                alignItems: 'flex-end',
              }}>
              COPYRIGHT@MonyPet
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  scrollStyle: {
    minHeight: '92%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  addPhoto: {
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 120,
    width: 120,
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#527BCB',
    borderRadius: 10,
    marginBottom: 30,
    fontSize: 18,
    backgroundColor: '#fff',
  },

  lineText: {
    color: '#527BCB',
    fontSize: 20,
    marginBottom: 5,
  },

  styleButton: {
    borderRadius: 10,
    backgroundColor: '#461EA2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    marginBottom: 10,
  },

  styleTextSelection: {
    fontSize: 16,
    color: 'gray',
    paddingRight: 10,
  },
})
