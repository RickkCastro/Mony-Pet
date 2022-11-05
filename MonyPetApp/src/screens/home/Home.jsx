import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

import RegisterBox from './components/RegisterBox';
import TipsBox from './components/TipsBox';
import { MenuButtons } from '../../components/MenuButtons';
import { PetImageBT } from '../../components/PetImageBt';

import {THEME} from '../../theme';


export function ScHome({ route, navigation }) {

    const { petId, petType, petImage } = route.params

    const [minDate, setMinDate] = useState(() => {
        const date = new Date()

        date.setMonth(date.getMonth() - 1)
        date.setHours(0, 0, 0, 0)

        return date
    })

    const [maxDate, setMaxDate] = useState(() => {
        const date = new Date()

        date.setHours(0, 0, 0, 0)

        return date
    })

    const [showDP1, setShowDP1] = useState(false);
    const [showDP2, setShowDP2] = useState(false);

    const onChangeMinDate = (event, selectedDate) => {
        setShowDP1(false)

        selectedDate.setHours(0, 0, 0, 0)

        if (selectedDate > maxDate) {
            setMaxDate(selectedDate)
        }

        setMinDate(selectedDate);
    }

    const onChangeMaxDate = (event, selectedDate) => {
        setShowDP2(false)

        selectedDate.setHours(0, 0, 0, 0)

        setMaxDate(selectedDate);
    }

    const formatDate = (date) => {
        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                <View style={styles.headerStyle}>
                    {/* Imagem perfil */}
                    <Text style={styles.Title}>Tela Inicial</Text>
                    <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })} 
                    source={petImage ? { uri: petImage } : petType == 'dog' ? require('../../assets/images/dogIcon.png') : require('../../assets/images/catIcon.png')}/>

                    {/* Mes */}
                    <Text style={styles.scrollTitle}> Intervalo de data dos registros: </Text>
                    <View style={styles.datesView}>
                        <TouchableOpacity onPress={() => setShowDP1(true)} style={styles.monthStyle}>
                            <AntDesign name="calendar" size={13} color={THEME.COLORS.PRIMARY} style={{ marginHorizontal: 5 }} />
                            <Text style={styles.txtDate}> {formatDate(minDate)} </Text>
                            <AntDesign name="caretdown" size={13} color={THEME.COLORS.GRAY} style={{ marginHorizontal: 5 }} />
                        </TouchableOpacity>

                        {showDP1 && (
                            <DateTimePicker
                                value={minDate}
                                mode={'date'}
                                onChange={onChangeMinDate}
                            />
                        )}

                        <Text style={styles.ateTxt}>Até</Text>

                        <TouchableOpacity onPress={() => setShowDP2(true)} style={styles.monthStyle}>
                            <AntDesign name="calendar" size={13} color={THEME.COLORS.PRIMARY} />
                            <Text style={styles.txtDate}> {formatDate(maxDate)} </Text>
                            <AntDesign name="caretdown" size={13} color={THEME.COLORS.GRAY} />
                        </TouchableOpacity>

                        {showDP2 && (
                            <DateTimePicker
                                value={maxDate}
                                mode={'date'}
                                onChange={onChangeMaxDate}
                                minimumDate={minDate}
                            />
                        )}
                    </View>
                </View>

                {/* Dicas */}
                <TipsBox petType={petType} />

                {/* Registros */}
                <RegisterBox petId={petId} petType={petType} minDate={minDate} maxDate={maxDate} />

            </ScrollView>

            {/* Menu de botoes */}
            <MenuButtons petType={petType} petId={petId} petImage={petImage}/>

        </SafeAreaView >
    );
}