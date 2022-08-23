import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const themeColor = '#461EA2'

const pets=[ //Dados para a flatList
  {
    id: '001', name: 'Bolt', animal: 'dog'
  },
  {
    id: '002', name: 'Mia', animal: 'cat'
  },
  {
    id: '003', name: 'Athena', animal: 'dog'
  },
  {
    id: '004', name: 'Scooby', animal: 'dog'
  },
  {
    id: '005', name: 'Snoopy', animal: 'dog'
  },
  {
    id: '006', name: 'Nala', animal: 'cat'
  },
]


export default () => {
    return(
    <View style={{flex: 2, justifyContent:'center', alignSelf: 'center'}}>
        <AntDesign name="caretup" size={pets.length > 4 ? 30 : 0} color={themeColor} style={{
          marginBottom: 10,
          alignSelf: 'center'
        }}/>

        <FlatList
          contentContainerStyle={pets.length > 4 ? '' : styles.flatList}
          refreshing={true}
          numColumns={2}
          data={pets}
          keyExtractor={item => item.id} //Arrow function com param item
          renderItem={({item}) => { //Arrow function com param item com obj
            return (
              <TouchableOpacity style={styles.circle}>
                <FontAwesome5 name={item.animal} size={28} color="white"  style={{margin: 8}}/>
                <Text style={styles.txtName}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
        />

        <AntDesign name="caretdown" size={pets.length > 4 ? 30 : 0} color={themeColor}  style={{
          marginTop: 10,
          alignSelf: 'center'
        }}/>
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
      alignItems:'center', 
      justifyContent: 'center',
      opacity: 0.98
    },
    txtName: {
        color: 'white',
        textAlign: 'center',
        fontSize:18
    },
    flatList: {
      flex: 1,
      justifyContent: 'center'
    },
});