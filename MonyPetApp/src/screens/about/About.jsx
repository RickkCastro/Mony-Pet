import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header1 from '../../components/Header1';
import { THEME } from '../../theme';
import { PlayerCard } from './components/playerCard';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

export function ScAbout({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <Header1 txt1={'Sobre'} onPressBt1={() => navigation.goBack()} />
      <View style={styles.contentView}>

        <Animatable.View animation={'bounceInUp'}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
            <Image source={require('../../assets/images/logo.png')}
              defaultSource={require('../../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.text}> Nós formamos um grupo de TCC no ano de 2022 com um objetivo de criarmos 
            uma aplicação. De começo pensamos em um projeto que não foi levado a frente, contudo pensamos e 
            criamos o "MonyPet". Esse é o nosso maior projeto no momento e durante o decorrer deste ano, criamos 
            este aplicativo que visa facilitar e melhorar a qualidade de vida do seu animal e sua relação com ele.
            Esperamos que gostem :)
            </Text>

            <PlayerCard name={'RickkCastro'}
              text={'Liderei o time de programação, cuidava de toda a parte frontend e backend, amo programar e quebrar a cabeça com os códigos.'}
              img={require('../../assets/images/fotos/FotoRickkcastro.jpeg')}
              link={'https://github.com/RickkCastro'}
            />

            <PlayerCard name={'Koto'}
              text={'Eu fui o responsável pelo design das telas, paleta de cores, responsividade, Ux. Gosto de tocar guitarra, ouvir música e jogar online'}
              img={require('../../assets/images/fotos/FotoCouto.jpg')}
              link={'https://www.instagram.com/kotod55/'}
            />

            <PlayerCard name={'German'}
              text={'Nesse projeto fiquei responsável pela programação, juntamente com a parte de monografia. Nas horas vagas jogava videogame e lia livros.'}
              img={require('../../assets/images/fotos/FotoGerman.jpg')}
              link={'https://www.instagram.com/arthur_atayde/'}
            />

            <PlayerCard name={'Benson'}
              text={'Desenvolvi a programação do aplicativo juntamente com sua estrutura de design. Nesse período fui instigado à academia como hobbie.'}
              img={require('../../assets/images/fotos/FotoPedro.jpg')}
              link={'https://www.instagram.com/predo_sants/'}
            />

            <PlayerCard name={'Luiz Dvooranen'}
              text={'Para o desenvolvimento realizei a monografia, sendo ela toda a parte escrita e necessária por fora da aplicação. E tendo como meus hobbies, ir à academia e jogar videogames online.'}
              img={require('../../assets/images/fotos/FotoLuiz.jpg')}
              link={'https://www.instagram.com/_luizgd/'}
            />

            <PlayerCard name={'Enzo'}
              text={'Fiz parte do time de design do grupo. Ajudei em algumas das telas, mas principalmente mentalizei e criei a identidade visual da marca como a logo, ícones, cores, etc.'}
              img={require('../../assets/images/fotos/FotoEnzo.jpg')}
              link={'https://www.instagram.com/miyo214d/'}
            />

            <PlayerCard name={'Paulo'}
              text={'Analista, realizei o levantamento dos requisitos que deram origem ao nosso sistema. Gosto muito de conversar e trocar idéias.'}
              img={require('../../assets/images/fotos/FotoPaulo.jpeg')}
              link={'https://www.instagram.com/paulo15frutuoso/'}
            />

          </ScrollView>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
}