import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { THEME } from '../theme';



export function MenuButtons(props) {

    const petType = props.petType
    const petId = props.petId
    const petImage = props.petImage

    const navigation = useNavigation()

    return (
        <View style={styles.menuButtons}>
            <TouchableOpacity style={styles.buttonsMenu}
                onPress={() => navigation.navigate('ScHome', { petType: petType, petId: petId, petImage: petImage })}>
                <FontAwesome5 name="home" size={28} color={THEME.COLORS.ITENS_BACKGROUND} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu}
                onPress={() => navigation.navigate('ScStatistics', { petType: petType, petId: petId, petImage: petImage })}>
                <Entypo name="area-graph" size={28} color={THEME.COLORS.ITENS_BACKGROUND} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]}
                onPress={props.handlePlusBt ? props.handlePlusBt :
                    () => navigation.navigate('ScRegisterAdd', { petType: petType, petId: petId, screenTitle: 'Adicionar Registro' })}>
                <FontAwesome5 name="plus" size={38} color={THEME.COLORS.ITENS_BACKGROUND} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu}
                onPress={() => navigation.navigate('ScCalendar', { petType: petType, petId: petId, petImage: petImage })}>
                <Entypo name="calendar" size={28} color={THEME.COLORS.ITENS_BACKGROUND} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu}
                onPress={() => navigation.navigate('ScSettings', { petType: petType, petId: petId, petImage: petImage })}>
                <FontAwesome name="gear" size={28} color={THEME.COLORS.ITENS_BACKGROUND} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuButtons: {
        height: '8%',
        backgroundColor: THEME.COLORS.PRIMARY,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    buttonsMenu: {
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: THEME.COLORS.BUTTON,
        width: 60,
        height: 60,
        top: '-7%',
    },
});