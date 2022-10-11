import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import Header1 from '../../components/header1'

import { styles } from './styles';

export function ScCompromise({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        {/* Cabeçalho */}
			<Header1 txt1={'Adicionar Compromisso'} bt2Color={'#747474'} onPressBt2={null} onPressBt1={() => navigation.goBack()} />

    </SafeAreaView>
  );
}