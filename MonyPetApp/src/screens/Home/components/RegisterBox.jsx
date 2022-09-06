import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function (props) {
  return (
    <View style={styles.box}>
      <MaterialCommunityIcons name={props.emoji} size={70} color={props.color} />
      <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 10 }}>
        <Text style={{ color: '#565583', marginBottom: 5 }}>
          Dia {props.date}:
        </Text>
        <Text style={{ fontSize: 12 }}>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#ECE4FC',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,

    elevation: 10,
    shadowColor: 'black',

    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
})