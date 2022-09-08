import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import styles  from './styles';

import RadGruDog from './components/radGru';

export function ScRegisterAdd({navigation, route}) {
  const {petType} = route.params

  const [date, setDate] = useState()

  useEffect(() => {
    let date = new Date()
    let today = date.getDate()
    let month = date.getMonth() + 1
    let day = ('0' + today).slice(-2) + '/' + ('0' + month).slice(-2)
    setDate(day)
  })

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

        <Text style={styles.txtDay}>Selecione o dia:</Text>


         {/* Mes */}
        <View style={styles.monthStyle}>
          <TouchableOpacity>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.lineText}>
              {date}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>
        </View>


        {/* Registros */}
        <RadGruDog petType={petType}/>

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