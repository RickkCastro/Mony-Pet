import react from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../../../theme";

export function NormalBT(props) {
    return (
        <TouchableOpacity style={[styles.buttons, {backgroundColor: props.backColor ? props.backColor : '#7b5eb4'}]} onPress={props.onPress}>
            <View style={styles.btItensView}>
                <FontAwesome name={props.icon} size={THEME.FONT_SIZE.MD + 1} color="white" style={styles.btIcons} />
                <Text style={styles.textBt}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons: {
        justifyContent: "center",
        alignItems: "flex-start",
        height: 50,
        width: "75%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 30,
    },

    btItensView: {
        flexDirection: 'row'
    },

    btIcons: {
        marginHorizontal: 15
    },

    textBt: {
        fontSize: THEME.FONT_SIZE.MD,
        color: '#fff'
    },
});