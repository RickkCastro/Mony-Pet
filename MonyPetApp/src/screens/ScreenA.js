import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'


export function ScreenA() {
    const navigation = useNavigation()
    
    return (
        <View style={{flex: 1, backgroundColor:'black', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ScPetChoice')}
                style={{height: 50, marginHorizontal: 50, backgroundColor:'white', 
                justifyContent: 'center', alignItems: 'center', borderRadius: 50}}
            >
                <Text>Escolha de Pet</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ScPetAdd')}
                style={{height: 50, marginHorizontal: 50, backgroundColor:'white', 
                justifyContent: 'center', alignItems: 'center', borderRadius: 50}}
            >
                <Text>Adicionar Pet</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('ScVizuPet')}
                style={{height: 50, marginHorizontal: 50, backgroundColor:'white', 
                justifyContent: 'center', alignItems: 'center', borderRadius: 50}}
            >
                <Text>Vizu Pet</Text>
            </TouchableOpacity>
        </View>
    );
}