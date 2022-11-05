import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../../../theme';

export function TaskBox(props) {
	const done = props.done

	return (
		<TouchableOpacity style={styles.container} onPress={props.handleTaskPress}>

			{/* Icon */}
			<MaterialCommunityIcons name={props.icon} size={40} color={THEME.COLORS.GRAY} />

			{/* Textos */}
			<View style={{ height: '100%', width: '55%' }}>
				<Text style={styles.txtData}>{props.date}</Text>
				<Text style={styles.txtLine} numberOfLines={1} ellipsizeMode={'tail'}>Nome: {props.title}</Text>
				<Text style={styles.txtLine} numberOfLines={2} ellipsizeMode={'tail'}>{props.desc}</Text>
			</View>

			{/* CheckBox */}
			<TouchableOpacity style={done ? [styles.checkBox, {borderColor: THEME.COLORS.SUCCESS}] : styles.checkBox} onPress={props.handleCheck}>
				{done && <MaterialCommunityIcons name={'check'} size={25} color={THEME.COLORS.SUCCESS} />}
			</TouchableOpacity>

		</TouchableOpacity>
	)
}