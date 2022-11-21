import AppIntroSlider from "react-native-app-intro-slider";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import * as Animatable from 'react-native-animatable';

function renderSlides({ item }) {
  return (
      <Animatable.View animation={'fadeInUp'} duration={400}  style={{ flex: 1, backgroundColor: item.backgroundColor, justifyContent: "space-evenly" }}>
        <Image source={item.image} defaultSource={item.image} style={styles.slidesImage} />
        <View style={styles.viewText}>
          <Text style={styles.slidesTitle}>{item.title}</Text>
          <Text style={styles.slidesText}>{item.text}</Text>
        </View>
      </Animatable.View>
  )
}

export function ScHelpSlides(props, { navigation }) {
  //tutorial
  const slides = [
    {
      key: '1',
      title: "Bem vindo!",
      text: "MonyPet está aqui para ajuda-lo a monitorar e organizar a vida de seus bichinhos.",
      image: require("../assets/images/logo.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
    {
      key: '2',
      title: "Vamos começar adicionando um pet, que tal?",
      text: "Você vai colocar todas as informações solicitadas nos campos, posteriormente vai poder alterar os dados se desejar.",
      image: require("../assets/slides/cachorro2.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
    {
      key: '3',
      title: "Primeiros registros!!!",
      text: "Aqui a magia acontece, diga como está seu animalzinho de estimação, diariamente, e tenha um monitoramento completo com nossas estatísticas e um controle maior nos cuidados dele.",
      image: require("../assets/slides/registros.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
    {
      key: '4',
      title: "Analise os gráficos",
      text: "Analisar os gráficos vai te auxiliar nos cuidados do seu animal, então sempre fique de olho.",
      image: require("../assets/slides/grafico.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
    {
      key: '5',
      title: "Fique atento as datas!!!",
      text: "O nosso aplicativo também disponibiliza um calendário, onde você pode anotar os compromissos de seu pet, como banho, tosa, vacinação e outras possibilidades de compromissos. Fique à vontade em adicionar quantos compromissos quiser.",
      image: require("../assets/slides/calendario.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
    {
      key: '6',
      title: "Agora é sua vez",
      text: "Nós agradecemos sua preferência ao utilizar nosso aplicativo, conte aos seus amigos e familiares para aumentarmos nossa comunidade! A MonyPet fica feliz em ter você. MonyPet, o melhor companheiro do seu melhor amigo.",
      image: require("../assets/slides/cachorro1.png"),
      backgroundColor: THEME.COLORS.ITENS_BACKGROUND
    },
  ]

  async function setData() {
    const { setItem, getItem, removeItem } = useAsyncStorage('@monypet:config')
    const response = await getItem()
    const previousData = response ? JSON.parse(response) : {}

    await setItem(JSON.stringify({...previousData, showSlides: false}))
  }

  useEffect(() => {
    setData()
  }, [])

  return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: THEME.COLORS.PRIMARY,
          width: 40
        }}
        showPrevButton
        renderPrevButton={() => <Text style={styles.btNext}>Voltar</Text>}
        renderNextButton={() => <Text style={styles.btNext}>Próximo</Text>}
        renderDoneButton={() => <Text style={styles.btDone}>Concluir</Text>}
        onDone={props.slideDone}
      />

  )
}

const styles = StyleSheet.create({
  slidesView: {
    flex: 1,
    backgroundColor: '#000',
  },

  slidesImage: {
    resizeMode: "contain",
    height: '60%',
    width: '100%',
    marginTop: 50
  },

  viewText: {
    justifyContent: "flex-end",
    marginBottom: 60,
  },

  slidesTitle: {
    paddingBottom: 15,
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: "bold",
    color: THEME.COLORS.TEXT,
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: 25,
  },

  slidesText: {
    textAlign: 'center',
    color: THEME.COLORS.GRAY,
    paddingHorizontal: 25,
    fontSize: THEME.FONT_SIZE.MD
  },

  btDone: {
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: "bold",
    color: THEME.COLORS.TEXT,
    paddingTop: 10,
    paddingRight: 10,
  },

  btNext: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
})

