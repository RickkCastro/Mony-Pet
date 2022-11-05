import * as React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'

import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'

import { styles } from './../styles'
import { Loading } from '../../../components/Loading'

import { THEME } from '../../../theme'

export default () => {
  const navigation = useNavigation()
  const [petsData, setPetsData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const { getItem } = useAsyncStorage('@monypet:pets')

  async function handleFetchData() {
    setLoading(true)
    const response = await getItem()
    const data = response ? JSON.parse(response) : []
    setPetsData(data)
    setLoading(false)
  }

  useFocusEffect(
    React.useCallback(() => {
      handleFetchData()
      // AsyncStorage.multiRemove(['@monypet:regs', '@monypet:pets'])
    }, [])
  )

  return (
    <View style={styles.container1}>
      <AntDesign
        name="caretup"
        size={petsData.length > 4 ? 30 : 0}
        color={THEME.COLORS.BUTTON}
        style={{ marginBottom: 10, alignSelf: 'center', }}
      />

      {loading ? <Loading size={10}/> 
      : <FlatList
          contentContainerStyle={petsData.length > 4 ? '' : styles.flatList}
          refreshing={true}
          numColumns={2}
          data={petsData}
          keyExtractor={(item) => item.id} //Arrow function com param. item
          renderItem={({ item }) => {
            //Arrow function com param. item com obj
            return (
              <TouchableOpacity
                style={styles.circle}
                onPress={() =>
                  navigation.navigate('ScHome', {
                    petId: item.id,
                    petType: item.petType,
                    petImage: item.petImage
                  })
                }>
                <FontAwesome5
                  name={item.petType}
                  size={28}
                  color={THEME.COLORS.TEXT_BUTTON}
                  style={{ margin: 8 }}
                />
                <Text style={styles.txtName}>{item.petName}</Text>
              </TouchableOpacity>
            )
          }}
        />
      }

      <AntDesign
        name="caretdown"
        size={petsData.length > 4 ? 30 : 0}
        color={THEME.COLORS.BUTTON}
        style={{ marginTop: 10, alignSelf: 'center', }}
      />
    </View>
  )
}

