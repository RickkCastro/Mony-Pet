import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import PetSelection from './PetSelection';
const themeColor = '#461EA2'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/BgTelaEscolhaPet.png')} resizeMode='cover' style={styles.backgroudImage}>
        {/* Titulo */}
        <View style={{flex: 1, alignItems:'center', justifyContent:'center', marginTop: 15}}> 
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} resizeMode='stretch'/>
        </View>

        {/* Escolha de pet */}
        <PetSelection/>

        {/* Rodape */}
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <TouchableOpacity style={styles.addButton}>
            <AntDesign name="plus" size={25} color="white"  style={{margin: 8}}/>
          </TouchableOpacity>
          
          {/* Rodapé */}
          <Text style={{color:'black', fontSize:12, alignSelf: 'center', marginBottom: 15}}>
            COPYRIGHT@MonyPet</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroudImage: {
    justifyContent:'center', 
    flex:1,
  },
  logo: {
    width: 241,
    height: 105.8,
    marginBottom: 5
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    backgroundColor: themeColor,
    alignSelf: 'center',
    marginBottom: 60,
    borderRadius: 30,
  },
});
