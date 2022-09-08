import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import MonthPicker from 'react-native-month-year-picker';

import styles from './styles';

import RegisterBox from './components/registerBox';
import TipsBox from './components/tipsBox';

export function ScHome({ route, navigation }) {
    const { petId, petType } = route.params

    const [date, setDate] = useState(new Date());
    const [showDP, setShowDP] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        setShowDP(false)
        setDate(selectedDate);
        console.log(selectedDate)
    };

    const formatDate = (date) => {
        let mo = date.getMonth() - 1
        let y = date.getFullYear()

        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        return (months[mo] + '/' + y)
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                {/* Header */}
                <View style={styles.headerStyle}>
                    {/* Imagem perfil */}
                    <TouchableOpacity onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}
                        style={{ height: 85, width: 85, borderWidth: 1, borderColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5
                            name={petType}
                            size={35}
                            color="black"
                            style={{ margin: 8 }} />
                    </TouchableOpacity>

                    {/* Mes */}
                    <TouchableOpacity onPress={() => setShowDP(true)} style={styles.monthStyle}>
                        <AntDesign name="calendar" size={18} color="#527BCB" style={{ marginHorizontal: 5 }} />
                        <Text style={styles.txtDate}> {formatDate(date)} </Text>
                        <AntDesign name="caretdown" size={18} color="#527BCB" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>

                    {showDP && (
                        <MonthPicker
                            onChange={onChangeDate}
                            value={date}
                        />
                    )}

                </View>

                {/* Dicas */}
                <TipsBox petType={petType} />

                {/* Registros */}
                <View style={styles.regViewStyles}>
                    <Text style={styles.scrollTitle}> Últimos Registros: </Text>
                    <RegisterBox emoji='emoticon-excited' color='#107d07' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-happy' color='#68b166' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-neutral' color='#7a7777' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-sad' color='#ffb600' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-angry' color='#a54c1b' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </View>

            </ScrollView>

            {/* Menu de botoes */}
            <View style={styles.menuButtons}>
                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome5 name="home" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="area-graph" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]} onPress={() => navigation.navigate('ScRegisterAdd', { petType: petType })}>
                    <FontAwesome5 name="plus" size={38} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="calendar" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome name="gear" size={28} color="white" />
                </TouchableOpacity>

            </View>
        </View >
    );
}