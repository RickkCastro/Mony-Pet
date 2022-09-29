import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { MenuButtons } from '../../components/MenuButtons';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Chart } from './components/Chart/Chart';
import { FilterSelected } from './components/FilterSelected/FilterSelected';
import { PetImageBT } from '../../components/PetImageBt';

export function ScStatistics({ route, navigation }) {
  const { petId, petType, petImage } = route.params

  const [filter, setFilter] = React.useState('semanal')

  const dataMood = [
    { value: 0, date: '01/05/22' },
    { value: 1, date: '02/05/22' },
    { value: 2, date: '03/05/22' },
    { value: 3, date: '04/05/22' },
    { value: 4, date: '05/05/22' },
    { value: 5, date: '06/05/22' },
    { value: 5, date: '07/05/22' },
  ]

  const dataMess = [
    { value: 5, date: 'Semana 1º' },
    { value: 2, date: 'Semana 2º' },
    { value: 4, date: 'Semana 3º' },
    { value: 1, date: 'Semana 4º' },
  ]

  const dataFeeding = [
    { value: 5, date: 'Jan' },
    { value: 2, date: 'Fev' },
    { value: 4, date: 'Mar' },
    { value: 0, date: 'Abr' },
    { value: 5, date: 'Mai' },
    { value: 1, date: 'Jun' },
    { value: 3, date: 'Jul' },
    { value: 5, date: 'Ago' },
    { value: 0, date: 'Set' },
    { value: 0, date: 'Out' },
    { value: 3, date: 'Nov' },
    { value: 4, date: 'Dez' },
  ]

  const [initialDate, setInitialDate] = useState(() => {
    const date = new Date()

    date.setMonth(date.getMonth() - 1)
    date.setHours(0, 0, 0, 0)

    return date
  })

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
              <AntDesign name="caretdown" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
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
          <Text style={styles.graphicTitle}> Grafíco de Humor </Text>
          <Chart data={dataMood} />

          {/* Bagunça */}
          <Text style={styles.graphicTitle}> Grafíco de Bagunça </Text>
          <Chart data={dataMess} />

          {/* Alimentação */}
          <Text style={styles.graphicTitle}> Grafíco de Alimentação </Text>
          <Chart data={dataFeeding} />
        </View>
      </ScrollView>

      {/* Menu de botoes */}
      <MenuButtons petType={petType} petId={petId} petImage={petImage} />
    </SafeAreaView>
  );
}