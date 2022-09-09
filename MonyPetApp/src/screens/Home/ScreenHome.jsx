import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

import RegisterBox from './components/registerBox';
import TipsBox from './components/tipsBox';

export function ScHome({ route, navigation }) {
    const { petId, petType } = route.params

    const [date1, setDate1] = useState(() => {
        const date = new Date()
        date.setMonth(date.getMonth() - 1)
        return date
    });
    const [date2, setDate2] = useState(new Date());

    const [showDP1, setShowDP1] = useState(false);
    const [showDP2, setShowDP2] = useState(false);

    const onChangeDate1 = (event, selectedDate) => {
        setShowDP1(false)
        setDate1(selectedDate);
        console.log(selectedDate)
    };

    const onChangeDate2 = (event, selectedDate) => {
        setShowDP2(false)
        setDate2(selectedDate);
        console.log(selectedDate)
    };

    const formatDate = (date) => {
        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        return (('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y)
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
                    <View style={styles.datesView}>
                        <TouchableOpacity onPress={() => setShowDP1(true)} style={styles.monthStyle}>
                            <AntDesign name="calendar" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
                            <Text style={styles.txtDate}> {formatDate(date1)} </Text>
                            <AntDesign name="caretdown" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
                        </TouchableOpacity>

                        {showDP1 && (
                            <DateTimePicker
                                value={date1}
                                mode={'date'}
                                onChange={onChangeDate1}
                            />
                        )}

                        <Text style={styles.ateTxt}>Até</Text>

                        <TouchableOpacity onPress={() => setShowDP2(true)} style={styles.monthStyle}>
                            <AntDesign name="calendar" size={13} color="#75739c"/>
                            <Text style={styles.txtDate}> {formatDate(date2)} </Text>
                            <AntDesign name="caretdown" size={13} color="#75739c"/>
                        </TouchableOpacity>

                        {showDP2 && (
                            <DateTimePicker
                                value={date2}
                                mode={'date'}
                                onChange={onChangeDate2}
                            />
                        )}
                    </View>
                </View>

                {/* Dicas */}
                <TipsBox petType={petType} />

                {/* Registros */}
                <View>
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
                    <FontAwesome5 name="home" size={28} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="area-graph" size={28} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]} onPress={() => navigation.navigate('ScRegisterAdd', { petType: petType })}>
                    <FontAwesome5 name="plus" size={38} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="calendar" size={28} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome name="gear" size={28} color="#e7e6e6" />
                </TouchableOpacity>

            </View>
        </View >
    );
}