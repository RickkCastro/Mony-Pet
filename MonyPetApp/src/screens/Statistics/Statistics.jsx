import React, { useState, useCallback } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { MenuButtons } from '../../components/MenuButtons';
import { Chart } from './components/Chart/Chart';
import { FilterSelected } from './components/FilterSelected/FilterSelected';
import { PetImageBT } from '../../components/PetImageBt';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useFocusEffect } from '@react-navigation/native'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

export function ScStatistics({ route, navigation }) {
  const { petId, petType, petImage } = route.params

  const [filter, setFilter] = React.useState('diario')

  const [initialDate, setInitialDate] = useState(() => {
    const date = new Date()

    date.setMonth(date.getMonth())
    date.setHours(0, 0, 0, 0)

    return date
  })

  const { getItem } = useAsyncStorage('@monypet:regs')

  // Atributos
  const [moodData, setMoodData] = useState([])
  const [messData, setMessData] = useState([])
  const [feedingData, setFeedingData] = useState([])

  async function fetchRegsData() {
    const response = await getItem()
    const TotalData = response ? JSON.parse(response) : []

    const data = TotalData.filter((item) => item.petId === petId)

    data.map((item) => item.date = new Date(item.date))

    data.sort(function (a, b) {
      return b.date.getTime() + a.date.getTime()
    })

    setAttributesData(data)
  }

  function setAttributesData(data = []) {
    // Humor
    const moodDataTemp = data.map((item, index) => moodData[index] = {value: item.moodV, date: item.date.toString()})
    setMoodData(moodDataTemp)

    //Bagunca
    const messDataTemp = data.map((item, index) => messData[index] = {value: item.messV, date: item.date.toString()})
    setMessData(messDataTemp)

    //Alimentacao
    const feedingDataTemp = data.map((item, index) => feedingData[index] = {value: item.feedingV, date: item.date.toString()})
    setFeedingData(feedingDataTemp) 
  }

  useFocusEffect(//Quando focar na tela
    useCallback(() => {
      fetchRegsData()
    }, [])
  )

  const [showDP, setShowDP] = useState(false);

  const onChangeInitialDate = (event, selectedDate) => {
    setShowDP(false)

    selectedDate.setHours(0, 0, 0, 0)

    setInitialDate(selectedDate);
  }

  const formatDate = (date) => {
    let d = date.getDate()
    let mo = date.getMonth() + 1
    let y = date.getFullYear()

    return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        {/* Cabecalho */}
        <View style={styles.headerStyle}>
          <Text style={styles.Title}>Estatísticas</Text>

          {/* Imagem perfil */}
          <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}
            source={petImage ? { uri: petImage } : require('../../assets/images/IconeFotoGato2.png')} />

          {/* Mes */}
          <Text style={styles.graphicTitle}> Data: </Text>
          <View style={styles.datesView}>
            <TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
              <AntDesign name="calendar" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
              <Text style={styles.txtDate}> {formatDate(initialDate)} </Text>
              <AntDesign name="caretdown" size={13} color="gray" style={{ marginHorizontal: 5 }} />
            </TouchableOpacity>

            {showDP && (
              <DateTimePicker
                value={initialDate}
                mode={'date'}
                onChange={onChangeInitialDate}
              />
            )}
          </View>

          {/* Filtro */}
          <FilterSelected onValueChange={itemValue => setFilter(itemValue)} selectedValue={filter} />
        </View>

        {/* Graficos */}
        <View style={{ alignItems: 'center' }}>
          {/* Humor */}
          {moodData.length > 0 &&
            <View style={{flex: 1}}>
              <Text style={styles.graphicTitle}> Grafíco de Humor </Text>
              <Chart data={moodData} />
            </View>}

          {/* Bagunça */}
          {messData.length > 0 &&
            <View style={{flex: 1}}>
              <Text style={styles.graphicTitle}> Grafíco de Bagunça </Text>
              <Chart data={messData} />
            </View>}

          {/* Alimentação */}
          {feedingData.length > 0 &&
            <View style={{flex: 1}}>
              <Text style={styles.graphicTitle}> Grafíco de Alimentação </Text>
              <Chart data={feedingData} />
            </View>}
        </View>
      </ScrollView>

      {/* Menu de botoes */}
      <MenuButtons petType={petType} petId={petId} petImage={petImage} />
    </SafeAreaView>
  );
}