import * as React from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import PetSelection from './components/PetSelection'

import { styles } from './styles'

export function ScPetChoice(props) {
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require('../../assets/images/BgTelaEscolhaPet.png')}
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
						<AntDesign name="plus" size={25} color="white" style={{ margin: 8 }} />
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
