import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, FlatList, TextInput, ScrollView, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'

export function ScPetAdd({ navigation }) {

    const [petName, setPetName] = React.useState("")
    const [petYears, setPetYears] = React.useState("")
    const [petRace, setPetRace] = React.useState("")
    const [petWeight, setPetWeight] = React.useState("")

    async function handleSavePet() {
        try {
            if(petName != "") {
                const id = uuid.v4()

                const newPet = {
                    id,
                    petName,
                    petYears,
                    petRace,
                    petWeight
                }

                const response = await AsyncStorage.getItem("@monypet:pets")
                const previousPets = response ? JSON.parse(response) : []

                const petsData = [...previousPets, newPet]

                AsyncStorage.setItem("@monypet:pets", JSON.stringify(petsData))
        
                Toast.show({
                    type: 'success',
                    text1: `Bem vindo(a) ${newPet.petName}`
                })

                navigation.goBack()

                console.log(newPet)
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Coloque pelo menos um nome!'
                });
            }
        } catch(error) {
            console.log(error)
            Toast.show({
                type: 'error',
                text1: 'Não foi possível cadastrar'
            });
        }
    }

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Cabeçalho */}
                <View style={{alignItems: 'center', marginBottom: 30, marginTop: 20}}>
                    <ImageBackground source={require('../assets/images/DogAddImg.png')} resizeMode={'stretch'} imageStyle={{margin: 10}}> 
                        <TouchableOpacity style={styles.addPhoto}>
                            <AntDesign name="plus" size={30} color="black"/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                
                {/* Inputs */}
                <View style={{marginHorizontal: 20}}>
                    <Text style={styles.lineText}>Insira o nome do seu pet:</Text>
                    <TextInput style={styles.txtInformation} placeholder={'Ex: Bartolomeu'} onChangeText={setPetName}></TextInput>

                    <Text style={styles.lineText}>Agora, a idade do seu pet:</Text>
                    <TextInput style={styles.txtInformation} placeholder={'Ex: 10'} onChangeText={setPetYears}></TextInput>

                    <Text style={styles.lineText}>E qual é a raça dele(a):</Text>
                    <TextInput style={styles.txtInformation} placeholder={'Ex: Pinscher'} onChangeText={setPetRace}></TextInput>

                    <Text style={styles.lineText}>E quanto, ele(a) pesa:</Text>
                    <TextInput style={styles.txtInformation} placeholder={'Ex: 14,7 Kg'} onChangeText={setPetWeight}></TextInput>
                </View>
                
                <ImageBackground source={require('../assets/images/Onda.png')} resizeMode={'stretch'}>
                    <View style={{alignItems: 'center', height: 180, justifyContent: 'flex-end', paddingBottom: 10}}>
                        <TouchableOpacity style={styles.styleButton} onPress={handleSavePet}>
                            <Text style={{color:'white', fontSize:18}}>Adicionar</Text>
                        </TouchableOpacity>
                            
                        <Text style={{color:'black', fontSize:16, textAlign: 'center'}}>copyright@MonyPet</Text>
                    </View>
                </ImageBackground>    
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create ({

    container: {
        minHeight: '92%',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },

    addPhoto: {
        borderColor:'black', 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 120,
        width: 120
    },

    txtInformation: {
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor:'#527BCB',
        borderRadius: 10,
        marginBottom: 30,
        fontSize: 18,
        backgroundColor: '#fff',
    },

    lineText: {
        color:'#527BCB',
        fontSize: 20,
        marginBottom: 5,
    },

    styleButton: {
        borderRadius:10, 
        backgroundColor:'#461EA2', 
        alignItems:'center', 
        justifyContent:'center',
        height:50,
        width: 300,
        marginBottom: 10,
    },
});