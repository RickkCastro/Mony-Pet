import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import uuid from 'react-native-uuid'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import styles from '../styles';

const iconSize = 50

export default function (props) {
    const petType = props.petType
    const petId = props.petId

    const data = {
        mood: [
            { value: 1, text: 'Péssimo', icon: 'emoticon-angry' },
            { value: 2, text: 'Ruim', icon: 'emoticon-sad' },
            { value: 3, text: 'Neutro', icon: 'emoticon-neutral' },
            { value: 4, text: 'Bom', icon: 'emoticon-happy' },
            { value: 5, text: 'Ótimo', icon: 'emoticon-excited' }
        ],
        mess: [
            { value: 1, text: 'Demais', icon: 'emoticon-angry' },
            { value: 2, text: 'Muita', icon: 'emoticon-sad' },
            { value: 3, text: 'Média', icon: 'emoticon-neutral' },
            { value: 4, text: 'Pouca', icon: 'emoticon-happy' },
            { value: 5, text: 'Não fez', icon: 'emoticon-excited' }
        ],
        feeding: [
            { value: 1, text: 'Péssima', icon: 'emoticon-angry' },
            { value: 2, text: 'Ruim', icon: 'emoticon-sad' },
            { value: 3, text: 'Neutra', icon: 'emoticon-neutral' },
            { value: 4, text: 'Boa', icon: 'emoticon-happy' },
            { value: 5, text: 'Ótima', icon: 'emoticon-excited' }
        ],
    }

    const dataDog = {
        rest: [
            { value: 1, text: 'Péssimo', icon: 'emoticon-angry' },
            { value: 2, text: 'Ruim', icon: 'emoticon-sad' },
            { value: 3, text: 'Neutro', icon: 'emoticon-neutral' },
            { value: 4, text: 'Bom', icon: 'emoticon-happy' },
            { value: 5, text: 'Ótimo', icon: 'emoticon-excited' }
        ],
        tour: [
            { value: 1, text: '0', icon: 'numeric-0-circle' },
            { value: 2, text: '1', icon: 'numeric-1-circle' },
            { value: 3, text: '2', icon: 'numeric-2-circle' },
            { value: 4, text: '3 ou +', icon: 'numeric-3-circle' },
        ],
    }

    const dataCat = {
        hairLoss: [
            { value: 1, text: 'Demais', icon: 'emoticon-angry' },
            { value: 2, text: 'Alta', icon: 'emoticon-sad' },
            { value: 3, text: 'Acima do normal', icon: 'emoticon-neutral' },
            { value: 4, text: 'Pouco acima do normal', icon: 'emoticon-happy' },
            { value: 5, text: 'Normal', icon: 'emoticon-excited' }
        ]
    }

    const [date, setDate] = useState(props.date)

    const [moodV, setMoodV] = useState(1)
    const [messV, setMessV] = useState(1)
    const [feedingV, setFeedingV] = useState(1)

    //Dog consts
    const [restV, setRestV] = useState(1)
    const [tourV, setTourV] = useState(1)

    //Cat consts
    const [hairLossV, setHairLossV] = useState(1)

    const { getItem, setItem } = useAsyncStorage('@monypet:pets')

    async function handleSaveReg() {
        try {
            const id = uuid.v4()
            let newReg

            if (petType == 'dog') {
                newReg = {
                    id,
                    date,
                    moodV,
                    messV,
                    feedingV,
                    restV,
                    tourV
                }
            } else {
                newReg = {
                    id,
                    date,
                    moodV,
                    messV,
                    feedingV,
                    hairLossV
                }
            }

            const response = await getItem()
            const data = response ? JSON.parse(response) : []

            const currentPet = data.find((pet) => pet.id === petId)

            Toast.show({
                type: 'success',
                text1: 'Registro adicionado',
            })

            navigation.goBack()
        } catch (error) {
            // Aviso de erro
            console.log(error)
            Toast.show({
                type: 'error',
                text1: 'Não foi possível adicionar registro',
            })
        }
    }


    const iconColor = (value) => {
        switch (value) {
            case 1:
                return "#a54c1b"
            case 2:
                return "#e1cc0f"
            case 3:
                return "#7a7777"
            case 4:
                return "#68b166"
            default:
                return "#107d07"
        }
    }

    const dogItens = () => {
        return (
            <View>
                {/* //Sono - rest */}
                <Text style={styles.lineRegister}>Avalie a condição do sono:</Text>
                <View style={styles.backgroundRegister}>
                    {dataDog.rest.map((item) => {
                        return (
                            <Pressable
                                style={item.value === restV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                                onPress={() => setRestV(item.value)}>
                                <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                            </Pressable>
                        )
                    })}
                </View>
                <View style={styles.viewTxt}>
                    {dataDog.rest.map((item) => {
                        return (
                            <Text style={styles.txt}> {item.text} </Text>
                        )
                    })}
                </View>

                {/* //Passeio - tour */}
                <Text style={styles.lineRegister}>Quantidade de passeios no dia:</Text>
                <View style={styles.backgroundRegister}>
                    {dataDog.tour.map((item) => {
                        return (
                            <Pressable
                                style={item.value === tourV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                                onPress={() => setTourV(item.value)}>
                                <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                            </Pressable>
                        )
                    })}
                </View>
                <View style={styles.viewTxt}>
                    {dataDog.tour.map((item) => {
                        return (
                            <Text style={styles.txt}> {item.text} </Text>
                        )
                    })}
                </View>
            </View>
        )
    }

    const catItens = () => {
        return (
            <View>
                {/* //Queda de Pelo - hairLoss */}
                <Text style={styles.lineRegister}>Como está a queda de pelo:</Text>
                <View style={styles.backgroundRegister}>
                    {dataCat.hairLoss.map((item) => {
                        return (
                            <Pressable
                                style={item.value === hairLossV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                                onPress={() => setHairLossV(item.value)}>
                                <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                            </Pressable>
                        )
                    })}
                </View>
                <View style={styles.viewTxt}>
                    {dataCat.hairLoss.map((item) => {
                        return (
                            <Text style={styles.txt}> {item.text} </Text>
                        )
                    })}
                </View>
            </View>
        )
    }

    return (
        <View>
            {/* // Humor - mood */}
            <Text style={styles.lineRegister}>Avalie o humor do seu pet:</Text>
            <View style={styles.backgroundRegister}>
                {data.mood.map((item) => {
                    return (
                        <Pressable
                            style={item.value === moodV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                            onPress={() => setMoodV(item.value)}>
                            <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                        </Pressable>
                    )
                })}
            </View>
            <View style={styles.viewTxt}>
                {data.mood.map((item) => {
                    return (
                        <Text style={styles.txt}> {item.text} </Text>
                    )
                })}
            </View>

            {/* //Bagunça - mess */}
            <Text style={styles.lineRegister}>Avalie em relação a bagunça:</Text>
            <View style={styles.backgroundRegister}>
                {data.mess.map((item) => {
                    return (
                        <Pressable
                            style={item.value === messV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                            onPress={() => setMessV(item.value)}>
                            <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                        </Pressable>
                    )
                })}
            </View>
            <View style={styles.viewTxt}>
                {data.mess.map((item) => {
                    return (
                        <Text style={styles.txt}> {item.text} </Text>
                    )
                })}
            </View>

            {/* //Alimentacao - feeding */}
            <Text style={styles.lineRegister}>Avalie o estado da alimentação:</Text>
            <View style={styles.backgroundRegister}>
                {data.feeding.map((item) => {
                    return (
                        <Pressable
                            style={item.value === feedingV ? [styles.selected, { borderColor: iconColor(item.value) }] : styles.unselected}
                            onPress={() => setFeedingV(item.value)}>
                            <MaterialCommunityIcons name={item.icon} size={iconSize} color={iconColor(item.value)} />
                        </Pressable>
                    )
                })}
            </View>
            <View style={styles.viewTxt}>
                {data.feeding.map((item) => {
                    return (
                        <Text style={styles.txt}> {item.text} </Text>
                    )
                })}
            </View>

            {/* especifico e gato e cachorro */}
            {petType == 'dog' ? dogItens() : catItens()}

            {/* Descrição do pet */}
            <Text style={[styles.lineRegister, { color: '#5c79b2' }]}>Anotações do pet:</Text>
            <TextInput
                style={styles.txtDesc}
                multiline={true}>
            </TextInput>

            {/* Botão de adição */}
            <ImageBackground
                source={require('../../../assets/images/Onda.png')}
                resizeMode={'stretch'}>
                <View
                    style={{
                        alignItems: 'center',
                        height: 180,
                        justifyContent: 'flex-end',
                        paddingBottom: 10,
                    }}>
                    <TouchableOpacity
                        style={styles.styleButton}
                        onPress={() => handleSaveReg()}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Salvar</Text>
                    </TouchableOpacity>

                    {/* Direitos Autorais */}
                    <Text
                        style={styles.styleCopyRight}>
                        COPYRIGHT@MonyPet
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}