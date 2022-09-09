import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function(props){
  return (
    <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButtons}
          onPress={props.onPressBt1}>
          <AntDesign name="close" size={24} color="#747474" />
        </TouchableOpacity>

        <Text style={styles.lineText}>{props.txt1}</Text>

        <TouchableOpacity
          style={styles.headerButtons}
          onPress={props.onPressBt2}>
          <FontAwesome name="trash" size={24} color={props.bt2Color}/>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      headerButtons: {
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      },

      lineText: {
        color: '#461EA2',
        fontSize: 20,
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10
    },
})