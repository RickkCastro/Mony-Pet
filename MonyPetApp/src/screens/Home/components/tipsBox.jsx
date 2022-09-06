import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from '../styles';
import tipsDog from '../../../assets/JSON/tipsDogList.json'

export default function () {
    const tipsDogList = JSON.parse(tipsDog)
    console.log(tipsDogList)

    return (
        <View>
            <Text style={styles.scrollTitle}> Dicas: </Text>
            <View style={styles.tipsStyle}>
                <TouchableOpacity>
                    <AntDesign name="left" size={36} color="#527BCB" />
                </TouchableOpacity>
                <Text style={{ color: '#527BCB', paddingVertical: 20, paddingHorizontal: 40, fontSize: 18, textAlign: 'center' }}>
                    {tipsDogList}
                </Text>
                <TouchableOpacity>
                    <AntDesign name="right" size={36} color="#527BCB" />
                </TouchableOpacity>
            </View>
        </View>
    );
}