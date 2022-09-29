import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { Select, Box, CheckIcon, Center } from "native-base";

export function FilterSelected(props) {
    return (
        <Center>
            <Box maxW="300">
                <Select selectedValue={props.selectedValue} minWidth="200" placeholder="Período" accessibilityLabel="Time" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="3" />
                }} mt={1} onValueChange={props.onValueChange}>
                    <Select.Item label="Semanal" value="semanal" />
                    <Select.Item label="Mensal" value="mensal" />
                    <Select.Item label="Anual" value="anual" />
                </Select>
            </Box>
        </Center>
    )
}