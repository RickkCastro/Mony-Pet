import React, {useState, useCallback} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native'

import styles from '../styles';

export default function (props) {

    const tipsJSON = require('../../../assets/JSON/tipsList.json')

    const tipsList = props.petType == 'dog' ? tipsJSON.Dog : tipsJSON.Cat

    const [tipsIndex, setTipsIndex] = useState(0)

    useFocusEffect(
        useCallback(() => {
          changeTip()
        }, [])
      )

    function changeTip() {
        let randomNum = Math.floor(Math.random() * tipsList.length)

        if(tipsList.length > 1) {
            while(randomNum == tipsIndex){
                randomNum = Math.floor(Math.random() * tipsList.length)
            }
        }

        setTipsIndex(randomNum) 
    }

    return (
        <View>
            <Text style={styles.scrollTitle}> Dicas e curiosidades: </Text>
            <TouchableOpacity style={styles.tipsStyle} onPress={() => changeTip()} activeOpacity={0.6}>
                <Text style={{ color: '#75739c', fontSize: 20, textAlign: 'center', flex: 1, textAlignVertical: 'center'}}>
                    {tipsList[tipsIndex]}
                </Text>

                <FontAwesome name="hand-pointer-o" size={40} color="#75739c" style={styles.tipsButton}/>
            </TouchableOpacity>
        </View>
    );
}