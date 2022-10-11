import React from 'react';
import { View, Text } from 'react-native';
import { THEME } from '../theme';

export default function () {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 13}}> Texto SM </Text>
        <Text style={{fontSize: 16}}> Texto MD </Text>
        <Text style={{fontSize: 24}}> Texto LG </Text>
        <Text style={{fontSize: THEME.FONT_SIZE.SM}}> Texto SM </Text>
        <Text style={{fontSize: THEME.FONT_SIZE.MD}}> Texto MD </Text>
        <Text style={{fontSize: THEME.FONT_SIZE.LG}}> Texto LG </Text>
    </View>
  );
}