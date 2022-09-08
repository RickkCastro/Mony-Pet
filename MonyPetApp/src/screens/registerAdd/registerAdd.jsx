import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, ImageBackground, TextInput, Button } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles'

import RadGruDog from './components/radGru';


export function ScRegisterAdd({ navigation, route }) {
  const { petType } = route.params

  const [date, setDate] = useState(new Date())
  const [showDP, setShowDP] = useState(false)

  const onChangeDate = (event, selectedDate) => {
    setShowDP(false)
    setDate(selectedDate);
  };

  const formatDate = (date) => {
    let d = date.getDate()
    let mo = date.getMonth() + 1
    let y = date.getFullYear()

    return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
      }}>

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButtons}
          onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.lineText}>Adicione seus registros</Text>

        <TouchableOpacity style={styles.headerButtons}>
          <AntDesign name="close" size={24} color="transparent" />
        </TouchableOpacity>
      </View>

      {/* Rolagem */}
      <ScrollView contentContainerStyle={styles.scrollStyle}>

        {/* Mes */}
        <Text style={styles.txtSelectDay}>Selecione o dia:</Text>
        <View>
          <TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
            <AntDesign name="calendar" size={18} color="#527BCB" style={{ marginHorizontal: 5 }} />
            <Text style={styles.txtDate}> {formatDate(date)} </Text>
            <AntDesign name="caretdown" size={18} color="#527BCB" style={{ marginHorizontal: 5 }} />
          </TouchableOpacity>

          {showDP && (
            <DateTimePicker
              value={date}
              mode={'date'}
              onChange={onChangeDate}
            />
          )}
        </View>


        {/* Registros */}
        <RadGruDog petType={petType} />

        {/* Descrição do pet */}
        <Text style={styles.lineRegister}>Anotações do pet:</Text>
        <TextInput
          style={styles.txtDesc}
          multiline={true}>
        </TextInput>

        {/* Botão de adição */}
        <ImageBackground
          source={require('../../assets/images/Onda.png')}
          resizeMode={'stretch'}>
          <View
            style={{
              alignItems: 'center',
              height: 180,
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <TouchableOpacity
              style={styles.styleButton}>
              <Text style={{ color: 'white', fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>

            {/* Direitos Autorais */}
            <Text
              style={styles.styleCopyRight}>
              COPYRIGHT@MonyPet
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}