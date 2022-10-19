import React, { useState, useCallback, useEffect } from 'react';
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
  const [dataT, setDataT] = useState([])

  const [finalDate, setFinalDate] = useState(() => {
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

  // Dog
  const [restData, setRestData] = useState([])
  const [tourData, setTourData] = useState([])

  // Cat
  const [hairLossData, setHairLossData] = useState([])

  async function fetchRegsData() {
    const response = await getItem()
    const TotalData = response ? JSON.parse(response) : []

    const data = TotalData.filter((item) => item.petId === petId)

    data.map((item) => item.date = new Date(item.date))

    data.sort(function (a, b) {
      return a.date.getTime() - b.date.getTime()
    })

    setDataT(data)
  }

  useFocusEffect(//Quando focar na tela
    useCallback(() => {
      fetchRegsData()
    }, [])
  )

  function setAttributesData(data = []) {
    // Humor
    let moodDataTemp = []
    data.map((item, index) => moodDataTemp[index] = { value: item.moodV, date: item.date })

    //Bagunca
    let messDataTemp = []
    data.map((item, index) => messDataTemp[index] = { value: item.messV, date: item.date })

    //Alimentacao
    let feedingDataTemp = []
    data.map((item, index) => feedingDataTemp[index] = { value: item.feedingV, date: item.date })

    if (filter === 'diario') {
      setMoodData(returnDataDiario(moodDataTemp))
      setMessData(returnDataDiario(messDataTemp))
      setFeedingData(returnDataDiario(feedingDataTemp))
    }

    else if (filter === 'semanal') {
      setMoodData(returnDataSemanal(moodDataTemp))
      setMessData(returnDataSemanal(messDataTemp))
      setFeedingData(returnDataSemanal(feedingDataTemp))
    }

    else {
      setMoodData(returnDataMensal(moodDataTemp))
      setMessData(returnDataMensal(messDataTemp))
      setFeedingData(returnDataMensal(feedingDataTemp))
    }

    if (petType === 'dog') {
      let restDataTemp = []
      data.map((item, index) => restDataTemp[index] = { value: item.restV, date: item.date })

      let tourDataTemp = []
      data.map((item, index) => tourDataTemp[index] = { value: item.tourV, date: item.date })

      if (filter === 'diario') {
        setRestData(returnDataDiario(restDataTemp))
        setTourData(returnDataDiario(tourDataTemp))
      }

      else if (filter === 'semanal') {
        setRestData(returnDataSemanal(restDataTemp))
        setTourData(returnDataSemanal(tourDataTemp))
      }

      else {
        setRestData(returnDataMensal(restDataTemp))
        setTourData(returnDataMensal(tourDataTemp))
      }

    } else {

      let hairLossDataTemp = []
      data.map((item, index) => hairLossDataTemp[index] = { value: item.hairLossV, date: item.date })

      if (filter === 'diario') {
        setHairLossData(returnDataDiario(hairLossDataTemp))
      }

      else if (filter === 'semanal') {
        setHairLossData(returnDataSemanal(hairLossDataTemp))
      }

      else {
        setHairLossData(returnDataMensal(hairLossDataTemp))
      }
    }
  }

  function returnDataDiario(data = []) {
    const initialDate = new Date(finalDate)
    initialDate.setDate(initialDate.getDate() - 7)

    let filterD = (item) => item.date <= finalDate && item.date > initialDate
    let dataTemp = data.filter(filterD)

    let dates = dataTemp.map((item) => item.date).toString()

    let finalData = []

    for (let i = 0; i <= 7; i++) {
      let initialDate = new Date(finalDate)
      initialDate.setDate(initialDate.getDate() - i)

      if (!dates.includes(initialDate.toString())) {
        finalData.push({value: 0, date: initialDate})
      }
    }

    finalData = finalData.concat(dataTemp)

    finalData.sort(function (a, b) {
      return a.date.getTime() - b.date.getTime()
    })

    finalData.map((item) => item.date = formatDate(item.date))
  
    return finalData
  }

  function returnDataSemanal(data = []) {
    let finalDate2 = new Date(finalDate)
    let initialDate = new Date(finalDate2)
    initialDate.setDate(initialDate.getDate() - 7)

    const dataSem = []

    let filterD = (item) => item.date <= finalDate2 && item.date > initialDate

    for (let i = 0; i < 4; i++) {
      let dataTemp = data.filter(filterD)
      const valuesList = dataTemp.map(item => item.value)

      if (valuesList.length > 0) {
        dataTemp = valuesList.reduce((pV, cV) => {
          return pV + cV
        }) / valuesList.length
      } else {
        dataTemp = 0
      }

      dataSem[i] = { value: dataTemp, date: `Semana ${i + 1}º (${formatDayMonuth(initialDate)} - ${formatDayMonuth(finalDate2)})` }

      finalDate2.setDate(finalDate2.getDate() - 7)
      initialDate.setDate(initialDate.getDate() - 7)
    }

    return dataSem.reverse()
  }

  function returnDataMensal(data = []) {

    let dataFinal = []
    const month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    const thisYear = finalDate.getFullYear()

    for (let i = 0; i < 12; i++) {
      const valuesMonth = data.filter((item) => item.date.getMonth() == i && item.date.getFullYear() == thisYear ).map((item) => item.value)

      let dataMonth = 0
      if (valuesMonth.length > 0) {
        dataMonth = valuesMonth.reduce((pV, cV) => {
          return pV + cV
        }) / valuesMonth.length
      }

      const dataTemp = { value: dataMonth, date: month[i] }

      dataFinal.push(dataTemp)
    }

    return dataFinal
  }

  useEffect(() => {
    setAttributesData(dataT)
  }, [filter, dataT, finalDate])

  const [showDP, setShowDP] = useState(false);

  const onChangefinalDate = (event, selectedDate) => {
    setShowDP(false)

    selectedDate.setHours(0, 0, 0, 0)

    setFinalDate(selectedDate);
  }

  const formatDate = (date) => {
    let d = date.getDate()
    let mo = date.getMonth() + 1
    let y = date.getFullYear()

    return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
  }

  const formatDayMonuth = (date) => {
    let d = date.getDate()
    let mo = date.getMonth() + 1
    let y = date.getFullYear()

    return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        {/* Cabecalho */}
        <View style={styles.headerStyle}>
          <Text style={styles.Title}>Estatísticas</Text>

          {/* Imagem perfil */}
          <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}
            source={petImage ? { uri: petImage } : petType == 'dog' ? require('../../assets/images/dogIcon.png') : require('../../assets/images/catIcon.png')} />

          {/* Mes */}
          <Text style={styles.graphicTitle}> Data: </Text>
          <View style={styles.datesView}>
            <TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
              <AntDesign name="calendar" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
              <Text style={styles.txtDate}> {formatDate(finalDate)} </Text>
              <AntDesign name="caretdown" size={13} color="gray" style={{ marginHorizontal: 5 }} />
            </TouchableOpacity>

            {showDP && (
              <DateTimePicker
                value={finalDate}
                mode={'date'}
                onChange={onChangefinalDate}
              />
            )}
          </View>

          {/* Filtro */}
          <FilterSelected onValueChange={itemValue => setFilter(itemValue)} selectedValue={filter} />
        </View>

        {/* Graficos */}
        {dataT.length >= 3 ?
          <View style={{ alignItems: 'center' }}>
            {/* Humor */}
            {moodData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Humor </Text>
                <Chart data={moodData} />
              </View> : null
            }

            {/* Bagunça */}
            {messData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Bagunça </Text>
                <Chart data={messData} />
              </View> : null
            }

            {/* Alimentação */}
            {feedingData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Alimentação </Text>
                <Chart data={feedingData} />
              </View> : null
            }

            {/* Dog */}
            {restData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Sono </Text>
                <Chart data={restData} />
              </View> : null
            }
            {tourData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Passeio </Text>
                <Chart data={tourData} />
              </View> : null
            }

            {/* Cat */}
            {hairLossData.length > 0 ?
              <View style={{ flex: 1 }}>
                <Text style={styles.graphicTitle}> Gráfico de Queda de Pelo </Text>
                <Chart data={hairLossData} />
              </View> : null
            }
          </View> :
          <View style={styles.zeroText}>
            <Text style={styles.graphicTitle}>Adicione alguns registros para visualizar as estatísticas</Text>
            <AntDesign name="arrowdown" size={40} color="#75739c" />
          </View>
        }
      </ScrollView>

      {/* Menu de botoes */}
      <MenuButtons petType={petType} petId={petId} petImage={petImage} />
    </SafeAreaView>
  );
}