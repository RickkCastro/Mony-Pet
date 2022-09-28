import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { MenuButtons } from '../../components/MenuButtons';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Chart } from './components/Chart/Chart';

export function ScStatistics({ route, navigation }) {
  const { petId, petType, petImage } = route.params

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

          {/* Mes */}
          <Text style={styles.scrollTitle}> Data Inicial: </Text>
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
        </View>
        
        <Text style={styles.scrollTitle}> Grafíco de Humor </Text>
        <Chart />
      </ScrollView>

      {/* Menu de botoes */}
      <MenuButtons petType={petType} petId={petId} petImage={petImage} />
    </SafeAreaView>
  );
}