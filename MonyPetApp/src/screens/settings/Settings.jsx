import React, { useCallback } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PetImageBT } from '../../components/PetImageBt';
import { styles } from './styles';
import { MenuButtons } from '../../components/MenuButtons';
import { NormalBT } from './components/NormalBt';

import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import { THEME } from '../../theme';

export function ScSettings({ route, navigation }) {
    const { petId, petType, petImage } = route.params

    useFocusEffect(//Quando focar na tela
        useCallback(() => {
            setData()
        }, [])
    )

    async function setData() {
        const { setItem } = useAsyncStorage('@monypet:showSlides')
        await setItem(JSON.stringify({ value: false }))
    }

    function handleDeleteData() {
        Alert.alert('Aviso!', 'Deseja realmente excluir todos os dados do aplicativo?', [
            {
                text: 'Cancelar',
            },
            {
                text: 'Sim',
                onPress: () => Alert.alert('Cuidado!', 'Você apagará todos os pets, registros e compromissos', [
                    {
                        text: 'Cancelar',
                    },
                    {
                        text: 'Prosseguir',
                        onPress: () => deleteData()
                    }
                ]),
            }
        ])
    }

    async function deleteData() {
        try {
            //Pet
            await AsyncStorage.setItem('@monypet:pets', JSON.stringify([]))

            //Registros
            await AsyncStorage.setItem('@monypet:regs', JSON.stringify([]))

            //Compromissos
            await AsyncStorage.setItem('@monypet:tasks', JSON.stringify([]))

            Toast.show({
                type: 'success',
                text1: 'Dados apagados',
                text2: `Poxa que pena!`,
            })

            // Aviso de exclusão de Pet
            navigation.navigate('ScPetChoice')
        } catch {
            console.log(error)
            Toast.show({
                type: 'error',
                text1: 'Não foi possível excluir pet',
            })
        }
    }

    async function handleShowHelpSlides() {
        const { setItem } = useAsyncStorage('@monypet:showSlides')
        await setItem(JSON.stringify({ value: true }))

        navigation.push('ScHelpSlides')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>

                {/* cabeçalho */}
                <View style={styles.headerStyle}>
                    <Text style={styles.Title}>Configurações</Text>
                    <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}
                        source={petImage ? { uri: petImage } :
                            petType == 'dog' ? require('../../assets/images/dogIcon.png') : require('../../assets/images/catIcon.png')}
                    />
                </View>

                {/* Botoes */}
                <View style={{ marginTop: 15 }}>
                    <NormalBT icon='undo' text='Trocar pet' onPress={() => navigation.navigate('ScPetChoice')} />
                    <NormalBT icon='group' text='Sobre nós' onPress={() => { }} />
                    <NormalBT icon='info-circle' text='Tutorial' onPress={() => handleShowHelpSlides()} />
                    <NormalBT icon='exclamation-triangle' text='Apagar dados' backColor={THEME.COLORS.FAIL} onPress={() => handleDeleteData()} />
                </View>

            </ScrollView>

            {/* Menu de botoes */}
            <MenuButtons petType={petType} petId={petId} petImage={petImage} />

        </SafeAreaView>
    );
}