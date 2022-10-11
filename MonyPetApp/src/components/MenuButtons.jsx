import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native'


export function MenuButtons(props) {

    const petType = props.petType
    const petId = props.petId
    const petImage = props.petImage

    const navigation = useNavigation()

    return (
        <View style={styles.menuButtons}>
            <TouchableOpacity style={styles.buttonsMenu} 
                onPress={() => navigation.navigate('ScHome', { petType: petType, petId: petId, petImage: petImage })}>
                <FontAwesome5 name="home" size={28} color="#e7e6e6" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu} 
                onPress={() => navigation.navigate('ScStatistics', { petType: petType, petId: petId, petImage: petImage})}>
                <Entypo name="area-graph" size={28} color="#e7e6e6" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]}
                onPress={() => navigation.navigate('ScRegisterAdd', { petType: petType, petId: petId })}>
                <FontAwesome5 name="plus" size={38} color="#e7e6e6" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu}
                onPress={() => navigation.navigate('ScCalendar', { petType: petType, petId: petId, petImage: petImage})}>
                <Entypo name="calendar" size={28} color="#e7e6e6" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsMenu}>
                <FontAwesome name="gear" size={28} color="#e7e6e6" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuButtons: {
        height: '8%',
        backgroundColor: '#927ac1',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    buttonsMenu: {
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: '#7658b0',
        width: 60,
        height: 60,
        top: '-7%',
    },
});