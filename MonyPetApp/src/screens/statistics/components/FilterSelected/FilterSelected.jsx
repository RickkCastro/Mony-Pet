import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../../../../theme';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';

export function FilterSelected(props) {
    const filters = ['Diários', 'Semanais', 'Mensais']

    return (
        <View>
            <Text style={styles.graphicTitle}>Mostrar Dados:</Text>
            <SelectDropdown
                buttonStyle={styles.filterButton}
                data={filters}
                defaultValue={props.selectedValue}
                defaultButtonText={props.selectedValue}
                onSelect={props.onValueChange}
                renderDropdownIcon={() => <AntDesign name="down" size={20} color="black" />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    graphicTitle: {
        textAlign: 'center',
        color: THEME.COLORS.PRIMARY,
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: 5
    },
    
    filterButton: {
        backgroundColor: '#fff',
        borderColor: THEME.COLORS.PRIMARY,
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
})