import React, { useCallback, useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PetImageBT } from '../../components/PetImageBt';
import { styles } from './styles';
import { MenuButtons } from '../../components/MenuButtons';
import { NormalBT } from './components/NormalBt';

import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import { THEME } from '../../theme';
import { postNotification } from '../../Backend/postNotification';
import { setPushState } from '../../Backend/setPushState';
import { ScHelpSlides } from '../../components/HelpSlides';
import OneSignal from 'react-native-onesignal';

export function ScSettings({ route, navigation }) {
    const { petId, petType, petImage } = route.params
    const [notification, setNotification] = useState('ativada')
    const [showSlides, setShowSlides] = useState(false);

    const [userId, setUserId ] = useState()

    useEffect(() => {
        setUserIdF()
    }, [])

    async function setUserIdF() {
        const { userId } = await OneSignal.getDeviceState();
        setUserId(userId)
    }

    function handlePushConfig() {
        setPushState()
        setNotification(notification == 'ativada' ? 'desativada' : 'ativada')
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

    const [pushId, setPushId] = useState()

    function TaskNotification() {
        const options = {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: "Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                include_player_ids: [userId],
                contents: { en: "Teste" },
                app_id: "43517dad-1dea-4573-bbb4-a0135ac4e7f5",
            }),
        };

        fetch("https://onesignal.com/api/v1/notifications", options)
        .then((response) => response.json())
        .then((response) => setPushId(response.id))
        .catch((err) => console.log(err))

        console.log("Push id:", pushId)
    }

    return (
        showSlides ? <ScHelpSlides slideDone={() => setShowSlides(false)} /> :
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

                        <NormalBT icon='bell' text={`Notificações: ${notification}`}
                            backColor={notification == 'ativada' ? THEME.COLORS.SUCCESS : THEME.COLORS.GRAY}
                            onPress={() => handlePushConfig()}
                        />

                        <NormalBT icon='bell' text='Testar notificação' onPress={() => postNotification()} />
                        <NormalBT icon='group' text='Sobre' onPress={() => TaskNotification()} />
                        <NormalBT icon='info-circle' text='Tutorial' onPress={() => setShowSlides(true)} />
                        <NormalBT icon='exclamation-triangle' text='Apagar dados' backColor={THEME.COLORS.FAIL} onPress={() => handleDeleteData()} />
                    </View>

                </ScrollView>

                {/* Menu de botoes */}
                <MenuButtons petType={petType} petId={petId} petImage={petImage} />

            </SafeAreaView>
    );
}