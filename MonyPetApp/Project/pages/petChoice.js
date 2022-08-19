import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import PetSelection from '../components/petChoice/petSelection';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/telaFundo.jpg')} resizeMode='cover' style={styles.backgroudImage}>
        {/* Titulo */}
        <View style={{flex: 1, alignItems:'center', justifyContent:'flex-start', marginTop: 50}}> 
            <Text style={{fontSize:45, fontWeight:'bold', color:'black', marginBottom: 10}}>MONY PET</Text>
            <View style={styles.line}>
              <Image source={require('../assets/images/logo(2).png')} style={styles.logo} resizeMode='stretch'/>
            </View>
        </View>

        {/* Escolha de pet */}
        <View style={styles.viewPetSelections}>
          <PetSelection name={'Garfiel'} animal={'cat'}/>
          <PetSelection name={'Athena'} animal={'dog'}/>
          <PetSelection name={'Theo'} animal={'dog'}/>

          <TouchableOpacity style={styles.circle}>
            <AntDesign name="plus" size={25} color="white"  style={{margin: 8}}/>
          </TouchableOpacity>
        </View>
        
        {/* Rodapé */}
        <View style={{flex:0.8, alignItems:'center', justifyContent:'flex-end', marginBottom:15}}>
          <Text style={{color:'black', fontSize:16}}>copyright@MonyPet</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewPetSelections: {
    alignItems:'center', 
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    flexWrap: 'wrap',
  },
  backgroudImage: {
    justifyContent:'center', 
    flex:1, 
    width:'100%', 
    height:'100%',
  },
  logo: {
    width: 82,
    height: 92,
    marginBottom: 5
  },
  line: {
    width: 110,
    borderEndWidth:0.2, borderStartWidth:0.2, borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    borderRadius: 30,
  },
  circle: {
    backgroundColor: 'black',
    borderRadius: 100,
    width: 140,
    height: 140,
    margin: 5,
    padding: 35,
    alignItems:'center', 
    justifyContent: 'center',
    opacity: 0.8
  },
});
