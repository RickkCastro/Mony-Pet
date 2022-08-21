import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const pets=[ //Dados para a flatList
  {
    id: '001', name: 'Bolt', animal: 'dog'
  },
  {
    id: '002', name: 'Athena', animal: 'dog'
  },
  {
    id: '003', name: 'Nala', animal: 'cat'
  },
  {
    id: '004', name: 'Mina', animal: 'cat'
  },
  {
    id: '005', name: 'Bolt', animal: 'dog'
  },
  {
    id: '006', name: 'Athena', animal: 'dog'
  },
  {
    id: '007', name: 'Nala', animal: 'cat'
  },
  {
    id: '008', name: 'Mina', animal: 'cat'
  },
  {
    id: '009', name: 'Mina', animal: 'cat'
  },
  {
    id: '010', name: 'Nala', animal: 'cat'
  },
  {
    id: '011', name: 'Mina', animal: 'cat'
  },
  {
    id: '012', name: 'Mina', animal: 'cat'
  },
]


export default props => {
    return(
      <View style={{flex: 1}}>
        <FlatList
          style={{alignSelf: 'center'}}
          refreshing={true}
          contentContainerStyle={styles.flatListStyle}
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
      </View>
    )
}

const styles = StyleSheet.create({
    circle: {
      backgroundColor: '#461EA2',
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
});