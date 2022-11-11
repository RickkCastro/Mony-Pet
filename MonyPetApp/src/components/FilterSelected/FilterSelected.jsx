import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { THEME } from '../../theme';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export function FilterSelected(props) {
    return (
        <SelectDropdown
            buttonStyle={styles.btStyle}
            buttonTextStyle={styles.btTextStyles}
            dropdownStyle={styles.dropStyle}
            rowStyle={styles.rowStyle}
            rowTextStyle={styles.rowTextStyle}

            statusBarTranslucent

            data={props.data}
            defaultValue={props.selectedValue}
            defaultButtonText={props.selectedValue}
            onSelect={props.onValueChange}
            renderDropdownIcon={() => <AntDesign name="down" size={20} color="black" />}
        />
    )
}

const styles = StyleSheet.create({
    btStyle: {
        backgroundColor: '#fff',
        borderColor: THEME.COLORS.PRIMARY,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    btTextStyles: {
        fontSize: THEME.FONT_SIZE.MD
    },

    dropStyle: {
        borderRadius: 10,
    },

    rowStyle: {
        borderBottomColor: THEME.COLORS.PRIMARY
    },

    rowTextStyle: {
        fontSize: THEME.FONT_SIZE.MD
    }
})