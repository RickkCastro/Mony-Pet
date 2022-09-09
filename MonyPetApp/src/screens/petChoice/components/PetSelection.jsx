import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'

import { useAsyncStorage } from '@react-native-async-storage/async-storage'

const themeColor = '#7b5eb4'

export default () => {
  const navigation = useNavigation()
  const [petsData, setPetsData] = React.useState([])

  const { getItem } = useAsyncStorage('@monypet:pets')

  async function handleFetchData() {
    const response = await getItem()
    const data = response ? JSON.parse(response) : []
    setPetsData(data)
  }

  useFocusEffect(
    React.useCallback(() => {
      handleFetchData()
    }, [])
  )

  return (
    <View style={{ flex: 2, justifyContent: 'center', alignSelf: 'center' }}>
      <AntDesign
        name="caretup"
        size={petsData.length > 4 ? 30 : 0}
        color={themeColor}
        style={{
          marginBottom: 10,
          alignSelf: 'center',
        }}
      />

      <FlatList
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
                  petType: item.petType
                })
              }>
              <FontAwesome5
                name={item.petType}
                size={28}
                color="white"
                style={{ margin: 8 }}
              />
              <Text style={styles.txtName}>{item.petName}</Text>
            </TouchableOpacity>
          )
        }}
      />

      <AntDesign
        name="caretdown"
        size={petsData.length > 4 ? 30 : 0}
        color={themeColor}
        style={{
          marginTop: 10,
          alignSelf: 'center',
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: themeColor,
    borderRadius: 100,
    width: 140,
    height: 140,
    margin: 5,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.98,
  },
  txtName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  flatList: {
    flex: 1,
    justifyContent: 'center',
  },
})
