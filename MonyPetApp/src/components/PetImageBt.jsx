import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export function PetImageBT(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image
                source={props.source}
                resizeMode={'stretch'}
                style={styles.imgPet}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgPet: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 130,
    },
})