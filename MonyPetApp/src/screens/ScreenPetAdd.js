import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, FlatList, TextInput, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export function ScPetAdd() {

    return (
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
                <TextInput style={styles.txtInformation} placeholder={'Ex: Bartolomeu'}></TextInput>

                <Text style={styles.lineText}>Agora, a idade do seu pet:</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: 10'}></TextInput>

                <Text style={styles.lineText}>E qual é a raça dele(a):</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: Pinscher'}></TextInput>

                <Text style={styles.lineText}>E quanto, ele(a) pesa:</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: 14,7 Kg'}></TextInput>
            </View>
            
            <ImageBackground source={require('../assets/images/Onda.png')} resizeMode={'stretch'}>
                <View style={{alignItems: 'center', height: 180, justifyContent: 'flex-end', paddingBottom: 10}}>
                    <TouchableOpacity style={styles.styleButton}>
                        <Text style={{color:'white', fontSize:18}}>Adicionar</Text>
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