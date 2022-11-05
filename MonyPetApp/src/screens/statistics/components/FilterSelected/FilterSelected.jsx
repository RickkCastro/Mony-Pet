import React from 'react';
import { View, Text} from 'react-native';

// styles do Statistics, não do próprio FilterSelected
import { styles } from '../../styles';

import { Select, Box, CheckIcon, Center } from "native-base";
import { THEME } from '../../../../theme';

export function FilterSelected(props) {
    return (
        <View> 
            <Text style={styles.graphicTitle}>Mostrar Dados:</Text> 
            <Center>
                <Box maxW="300">
                    <Select selectedValue={props.selectedValue} borderColor= {THEME.COLORS.PRIMARY} color= {THEME.COLORS.TEXT} size={THEME.FONT_SIZE.SM} 
                            borderRadius="10" minWidth="225" marginTop={5} accessibilityLabel="Time" _selectedItem={{
                            bg: THEME.COLORS.PRIMARY,
                            borderRadius:"10",
                        }} mt={1} onValueChange={props.onValueChange}>
                            <Select.Item label="Diários" value="diario" />
                            <Select.Item label="Semanais" value="semanal" />
                            <Select.Item label="Mensais" value="mensal" />
                    </Select>
                </Box>
            </Center>
        </View>
    )
}