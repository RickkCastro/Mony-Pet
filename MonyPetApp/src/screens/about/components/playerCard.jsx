import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Linking} from 'react-native'

import { styles } from '../styles';

export function PlayerCard(props) {
    return (
        <View>
            <TouchableOpacity onPress={() =>  props.link && Linking.openURL(props.link)}>
                <Image source={props.img}
                    defaultSource={props.img} style={styles.playerImg} />
            </TouchableOpacity>

            <Text style={styles.titleName}>{props.name}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}