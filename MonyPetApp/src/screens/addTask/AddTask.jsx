import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, ImageBackground, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker'
import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { Select, Box, CheckIcon, Center } from 'native-base';

import Header1 from '../../components/Header1'

import { styles } from './styles';
import { THEME } from '../../theme';

export function ScAddTask({ route, navigation }) {
  const { petId, taskId, screenTitle, clickDate } = route.params

  const [titleT, setTitleT] = useState('')
  const [descT, setDescT] = useState('')
  const [typeT, setTypeT] = useState('stethoscope')

  const [date, setDate] = useState(clickDate ? new Date(clickDate) : new Date())
  const [showDP, setShowDP] = useState(false)

  const [time, setTime] = useState(clickDate ? new Date(clickDate) : new Date())
  const [showTP, setShowTP] = useState(false)

  const [doneT, setDoneT] = useState(false)

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
      if (taskId != undefined) {
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
    }
  }

  function handleSaveTask() {
    if(titleT != '') {
      saveTask()
    }
    else{
      Toast.show({
        type: 'error',
        text1: 'Coloque um nome na tarefa',
      })
    }
  }

  async function saveTask() {
    try {
      const id = taskId ? taskId : uuid.v4()
      let newTask = {
        id,
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
		try {
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
	}

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <Header1 txt1={screenTitle} bt2Color={taskId ? '#9a8db0' : 'transparent'}
      onPressBt2={taskId ? () => handleRemoveTask() : undefined} onPressBt1={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollStyle}>

        <View style={{ marginHorizontal: 20 }}>
          {/* Dia */}
          <Text style={styles.txtSelectDay}>Selecione o dia:</Text>
          <View>
            <TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
              <AntDesign name='calendar' size={18} color='#75739c' style={{ marginHorizontal: 5 }} />
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
              <AntDesign name='clockcircleo' size={18} color='#75739c' style={{ marginHorizontal: 5 }} />
              <Text style={styles.txtDate}> {formatTime(time)} </Text>
              <AntDesign name='caretdown' size={18} color='gray' style={{ marginHorizontal: 5 }} />
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
            placeholderTextColor='gray' onChangeText={setTitleT} value={titleT}>
          </TextInput>

          {/* Select do Tipo de Compromisso */}
          <Text style={styles.lineText}>Tipo de Compromisso:</Text>
          <Box>
            <Select selectedValue={typeT} borderColor='#75739c' color='#747474' size={THEME.FONT_SIZE.LG}
              borderRadius='10' height={9} accessibilityLabel='Time' _selectedItem={{
                bg: '#75739c',
                borderRadius: '10',
              }} mt={1} onValueChange={setTypeT}>
              <Select.Item label='Tosa' value='content-cut' />
              <Select.Item label='Banho' value='bathtub' />
              <Select.Item label='Vacina' value='needle' />
              <Select.Item label='Consulta' value='stethoscope' />
              <Select.Item label='Remédio' value='medical-bag' />
              <Select.Item label='Outro' value='paw' />
            </Select>
          </Box>

          {/* descTrição*/}
          <Text style={[styles.lineText, { color: '#75739c' }]}>Anotações do pet:</Text>
          <TextInput
            placeholder={'Ex: descreva seu compromisso aqui!'}
            style={styles.txtDesc}
            multiline={true}
            onChangeText={setDescT}
            maxLength={250}
            value={descT}>
          </TextInput>
        </View>

        {/* Botão de adição */}
        <ImageBackground
          source={require('../../assets/images/Onda.png')}
          resizeMode={'stretch'}>
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
    </SafeAreaView>
  );
}