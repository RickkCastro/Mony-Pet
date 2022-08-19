import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#fff', alignItems: 'center'}}>
        <Text style={{color:'orange', fontSize:30, fontWeight:'bold', marginTop:20}}>ESCOLHA SEU</Text>
        <Text style={{color:'orange', fontSize:40, fontWeight:'bold', marginTop:10}}>PET</Text> 
      </View>
      <View style={{alignItems:'center', justifyContent:'space-evenly', marginTop:50, flexDirection:'row'}}>
        <Image 
        style={{width:'30%', height:100, borderRadius:15}}
        source={require('./cachorro.jpg')}
        />

        <Image 
        style={{width:'30%', height:100, borderRadius:15}}
        source={require('./cachorro.jpg')}
        />

        <Image 
        style={{width:'30%', height:100, borderRadius:15}}
        source={require('./cachorro.jpg')}
        />
      </View>
      <View style={{ alignItems:'center', justifyContent:'space-evenly', marginTop:5, flexDirection:'row'}}>
        <Text style={styles.textselection}>Animal 1</Text>
        <Text style={styles.textselection}>Animal 2</Text>
        <Text style={styles.textselection}>Animal 3</Text>
      </View>

      <View style={{alignItems:'center'}}>
        <TouchableOpacity style={{width:'25%', height:100, borderRadius:150, backgroundColor:'orange', marginTop:275, justifyContent:'center', alignItems:'center'}}>
          <FontAwesome name="plus" size={70} color='blue'/>
        </TouchableOpacity>
      </View>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  textselection: {
    fontSize:15,
    fontWeight:'bold'
  },
});
