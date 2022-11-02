import AppIntroSlider from "react-native-app-intro-slider";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

//tutorial
const slides = [
  {
    key: '1',
    title: "Titulo 1",
    text: "texto 1",
    image: require("../assets/images/loading.gif"),
  },
  {
    key: '2',
    title: "Titulo 2",
    text: "texto 2",
    image: require("../assets/images/loading.gif"),
  },
  {
    key: '3',
    title: "Titulo 3",
    text: "texto 3",
    image: require("../assets/images/loading.gif"),
  },
];

function renderSlides({ item }) {
  return (
    <View style={styles.slidesView}>
      <Image source={item.image} style={styles.slidesImage} />
      <Text style={styles.slidesTitle}>{item.title}</Text>
      <Text style={styles.slidesText}>{item.text}</Text>
    </View>
  )
}

export function ScHelpSlides({navigation}) {
  
  async function slidesDone() {
    const { setItem } = useAsyncStorage('@monypet:showSlides')
    await setItem(JSON.stringify({value: false}))
  
    navigation.pop()
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#75739c',
        width: 30
      }}
      showPrevButton
      renderPrevButton={() => <Text style={styles.btNext}>Voltar</Text>}
      renderNextButton={() => <Text style={styles.btNext}>Próximo</Text>}
      renderDoneButton={() => <Text style={styles.btDone}>Concluir</Text>}
      onDone={() => slidesDone()}
    />
  )
}

const styles = StyleSheet.create({
  slidesView: {
    flex: 1,
  },

  slidesImage: {
    resizeMode: "contain",
    height: '70%',
    width: '100%',
  },

  slidesTitle: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    color: '#75739c',
    alignSelf: 'center'
  },

  slidesText: {
    textAlign: 'center',
    color: '#b5b5b5',
    paddingHorizontal: 25,
    fontSize: THEME.FONT_SIZE.MD
  },

  btDone: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    color: '#75739c',
    paddingTop: 10,
    paddingRight: 10,
  },
  
  btNext: {
    fontSize: THEME.FONT_SIZE.MD,
    color: '#75739c',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
})

