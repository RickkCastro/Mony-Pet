import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export function Loading(props) {
  return (
    <View>
        <Image style={{width: RFPercentage(props.size), height: RFPercentage(props.size)}} 
        source={require('../assets/images/loading.gif')} 
        defaultSource={require('../assets/images/loading.gif')}
        resizeMode={'cover'}/>
    </View>
  );
}