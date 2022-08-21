import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, FlatList, TextInput} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';




export default function PagePetAdd() {
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={{alignItems:'center', justifyContent:'flex-start', marginTop: 50, marginBottom: 30}}> 
                <TouchableOpacity style={styles.addPhoto}>
                    <AntDesign name="plus" size={30} color="black"/>
                </TouchableOpacity>
            </View>

            {/* Inputs */}
            <View style={{width: 300}}>
                <Text style={styles.lineText}>Insira o nome do seu pet:</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: Bartolomeu'}></TextInput>

                <Text style={styles.lineText}>Agora, a idade do seu pet:</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: 10'}></TextInput>

                <Text style={styles.lineText}>E qual é a raça dele(a):</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: Pinscher'}></TextInput>

                <Text style={styles.lineText}>E quanto, ele(a) pesa:</Text>
                <TextInput style={styles.txtInformation} placeholder={'Ex: 14,7 Kg'}></TextInput>
            </View>

            <TouchableOpacity style={styles.styleButtom}>
                    <Text style={{color:'white', fontSize:18}}>Adicionar</Text>
            </TouchableOpacity>
                
            <Text style={{color:'black', fontSize:16, margin: 10}}>copyright@MonyPet</Text>

        </View>

    );
} 

const styles = StyleSheet.create ({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },

    addPhoto: {
        borderWidth:2,
        borderColor:'black', 
        borderRadius:20, 
        height: 140,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    imagemBackgroundIcon : {
        width:'100%', 
        height:'100%', 
        alignItems:'center',
        justifyContent:'center'
    },

    txtInformation: {
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor:'#5A1AD9',
        opacity:0.7,
        borderRadius: 10,
        marginBottom: 35,
        fontSize: 18,
    },

    lineText: {
        color:'#5A1AD9',
        fontSize: 20,
        marginBottom: 5,
    },

    styleButtom: {
        borderRadius:10, 
        backgroundColor:'#5A1AD9', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:60, 
        height:50,
        width: 300,
    },
    waves: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});