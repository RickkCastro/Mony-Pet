import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import { PetImageBT } from '../../components/PetImageBt';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuButtons } from '../../components/MenuButtons'; 

import { AntDesign } from '@expo/vector-icons'

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

export function ScCalendar({ route, navigation }) {
    const { petId, petType, petImage } = route.params

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                
                {/* Cabeçalho */}
                <View style={styles.headerStyle}>
                    <Text style={styles.Title}>Calendário</Text>
                    <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })} 
                    source={petImage ? { uri: petImage } : require('../../assets/images/IconeFotoGato2.png')}/>
                </View>

                <Calendar
                    theme={styles.calendarTheme}
                />

                <View>
                    <Text style={styles.Title}>Próximos Compromissos:</Text>
                    
                    <Text style={styles.Title}>Próximos Compromissos:</Text>
                    
                    <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('ScCompromise')}>
						<AntDesign name="plus" size={35} color="white" style={{ margin: 8 }} />
					</TouchableOpacity>

                </View>
            </ScrollView>

            {/* Menu de botoes */}
            <MenuButtons petType={petType} petId={petId} petImage={petImage}/>
        </SafeAreaView>
    );
}