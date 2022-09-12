import React, { useState } from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useToast, Box } from "native-base";

import styles from './styles';

import RegisterBox from './components/registerBox';
import TipsBox from './components/tipsBox';


export function ScHome({ route, navigation }) {
    const toast = useToast();
    const { petId, petType } = route.params

    const [minDate, setMinDate] = useState(() => {
        const date = new Date()

        date.setMonth(date.getMonth() - 1)
        date.setHours(0, 0, 0, 0)

        return date
    });

    const [maxDate, setMaxDate] = useState(() => {
        const date = new Date()

        date.setHours(0, 0, 0, 0)

        return date
    });

    const [showDP1, setShowDP1] = useState(false);
    const [showDP2, setShowDP2] = useState(false);

    const onChangeMinDate = (event, selectedDate) => {
        setShowDP1(false)
        toast.show({
            render: () => {
              return <Box bg="#343434" px="2" py="3" rounded="md" mb={5}>
                      <Text style={{color: '#fff'}}> Registros atualizados </Text>
                    </Box>;
            },
            placement: 'top',
            duration: 3000,
          });

        selectedDate.setHours(0, 0, 0, 0)

        if (selectedDate > maxDate) {
            setMaxDate(selectedDate)
        }

        setMinDate(selectedDate);
    };

    const onChangeMaxDate = (event, selectedDate) => {
        setShowDP2(false)
        selectedDate.setHours(0, 0, 0, 0)

        setMaxDate(selectedDate);
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
                            <Text style={styles.txtDate}> {formatDate(minDate)} </Text>
                            <AntDesign name="caretdown" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
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
                            <AntDesign name="calendar" size={13} color="#75739c" />
                            <Text style={styles.txtDate}> {formatDate(maxDate)} </Text>
                            <AntDesign name="caretdown" size={13} color="#75739c" />
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
                <RegisterBox petId={petId} minDate={minDate} maxDate={maxDate} />

            </ScrollView>

            {/* Menu de botoes */}
            <View style={styles.menuButtons}>
                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome5 name="home" size={28} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="area-graph" size={28} color="#e7e6e6" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]}
                    onPress={() => navigation.navigate('ScRegisterAdd', { petType: petType, petId: petId })}>
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