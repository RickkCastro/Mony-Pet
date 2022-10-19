import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../../../theme';

export function TaskBox(props) {
	return (
			<TouchableOpacity style={styles.container}>

				{/* Icon */}
				<MaterialCommunityIcons name={'content-cut'} size={40} color={'gray'} />

				{/* Textos */}
				<View style={{ height: '100%', width: '55%' }}>
					<Text style={styles.txtData}>25/05/2005</Text>
					<Text style={styles.txtLine}>Nome: Banho</Text>
					<Text style={styles.txtLine}>Descrição: Banho no teddy na rua 2045</Text>
				</View>

				{/* CheckBox */}
				<TouchableOpacity style={styles.checkBox}>
					{/* <MaterialCommunityIcons name={'check'} size={25} color={'green'} /> */}
				</TouchableOpacity>

			</TouchableOpacity>
	)
}