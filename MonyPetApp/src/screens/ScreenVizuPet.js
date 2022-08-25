import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {FontAwesome} from '@expo/vector-icons';

export function ScVizuPet() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* Cabeçalho */}
    <View style={{alignItems: 'center', marginBottom: 20, marginTop:10}}>
        <ImageBackground source={require('../assets/images/DogAddImg.png')} resizeMode={'stretch'} imageStyle={{margin: 10}}> 
            <TouchableOpacity style={styles.addPhoto}>
              <FontAwesome name="pencil" size={20} color="black"/>
            </TouchableOpacity>
        </ImageBackground>
    </View>
    
    {/* Inputs */}
    <View style={{marginHorizontal: 30}}>
        <Text style={styles.lineText}> Nome do seu pet:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'Athena'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Idade do seu pet:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'10'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Raça:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'Vira lata'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Peso:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'18kg'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Tipo de Pelagem:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'Preta'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Comportamento:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtInformation} value={'Tranquila'} editable={false}></TextInput>
          <TouchableOpacity style ={styles.styleButton}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>

        <Text style={styles.lineText}>Descrição:</Text>
        <View style ={{flexDirection:'row'}}>
          <TextInput style={styles.txtDesc}  value={'Ela é linda'} editable={false} multiline={true}
          numberOfLines={5}></TextInput>
          <TouchableOpacity style ={{alignItems:'center', justifyContent:'center', width: 40, height: 30, marginVertical: 55}}>
            <FontAwesome name="pencil" size={20} color="#461EA2"/>
          </TouchableOpacity>
        </View>
    </View>
    
    <ImageBackground source={require('../assets/images/Onda.png')} resizeMode={'stretch'}>
        <View style={{alignItems: 'center', height: 140, justifyContent: 'flex-end', paddingBottom: 10}}>
            <TouchableOpacity style={styles.saveButton}>
                <Text style={{color:'white', fontSize:18}}>Salvar</Text>
            </TouchableOpacity>
                
            <Text style={{color:'black', fontSize:16, textAlign: 'center'}}>copyright@MonyPet</Text>
        </View>
    </ImageBackground>
</ScrollView>
);
} 

const styles = StyleSheet.create ({
  container: {
    minHeight: '92%',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },

  addPhoto: {
    borderColor:'Black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderWidth: 1,
    height: 120,
    width: 120,
    padding: 10
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth:1,
    borderColor:'#527BCB',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    width:'90%',
    color: 'black'
  },

  txtDesc: {
    padding: 10,
    borderWidth:1,
    borderColor:'#527BCB',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: '#fff',
    width:'90%',
    textAlignVertical: 'top',
    height: 150,
    color: 'black'
  },

  lineText: {
    color:'#527BCB',
    fontSize: 20,
    marginBottom: 5,
  },

  styleButton: { 
    alignItems:'center', 
    justifyContent:'center',
    width: 40,
    height: 30,
  },
  saveButton: {
    borderRadius:10, 
    backgroundColor:'#461EA2', 
    alignItems:'center', 
    justifyContent:'center',
    height:50,
    width: 300,
    marginBottom: 10,
  },
});