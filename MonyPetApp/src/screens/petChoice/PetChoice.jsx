import React, { useCallback } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import PetSelection from './components/PetSelection'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

import { styles } from './styles'

import { THEME } from '../../theme'
import { RFPercentage } from 'react-native-responsive-fontsize'

export function ScPetChoice(props) {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/BgTelaEscolhaPet.png')}
				defaultSource={require('../../assets/images/BgTelaEscolhaPet.png')}
				resizeMode="cover"
				style={{ flex: 1 }}>
				{/* Titulo */}
				<View style={styles.title}>
					<Image
						source={require('../../assets/images/logo.png')}
						style={styles.logo}
						resizeMode="stretch"
					/>
				</View>

				{/* Escolha de pet */}
				<PetSelection />

				{/* Botao de adicionar */}
				<View style={{ flex: 1, justifyContent: 'flex-end' }}>
					<TouchableOpacity
						style={styles.addButton}
						onPress={() => navigation.navigate('ScPetAdd')}>
						<AntDesign name="plus" size={RFPercentage(5)} color={THEME.COLORS.TEXT_BUTTON} style={{ margin: 8 }} />
					</TouchableOpacity>

					{/* Rodapé */}
					<Text style={styles.styleCopyRight}>
						COPYRIGHT@MonyPet
					</Text>
				</View>
			</ImageBackground>
		</View>
	)
}
