import React from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import RegisterBox from './components/RegisterBox';
import TipsBox from './components/tipsBox';

export function ScHome({ route, navigation }) {
    const { petId, petType } = route.params

    return (
        <View style={styles.container}>
            {/* Dicas e registros */}
            <ScrollView contentContainerStyle={styles.scrollStyle}>
                {/* Header */}
                <View style={styles.headerStyle}>
                    {/* Imagem perfil */}
                    <TouchableOpacity onPress={() => navigation.navigate('ScVizuPet', {petId: petId})}
                    style={{height: 85, width: 85, borderWidth: 1, borderColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5
                            name={petType}
                            size={35}
                            color="black"
                            style={{ margin: 8 }}/>
                    </TouchableOpacity>

                    {/* Mes */}
                    <View style={styles.monthStyle}>
                        <TouchableOpacity>
                            <AntDesign name="left" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.lineText}>
                            Novembro / 2022
                        </Text>
                        <TouchableOpacity>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Dicas */}
                <TipsBox petType={petType}/>

                {/* Registros */}
                <View style={styles.regViewStyles}>
                    <Text style={styles.scrollTitle}> Últimos Registros: </Text>
                    <RegisterBox emoji='emoticon-excited' color='darkgreen' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-happy' color='green' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-neutral' color='gray' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-sad' color='#ffb600' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />

                    <RegisterBox emoji='emoticon-angry' color='brown' date='20/11'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </View>

            </ScrollView>

            {/* Menu de botoes */}
            <View style={styles.menuButtons}>
                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome5 name="home" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="area-graph" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonsMenu, { height: 70, width: 70 }]}>
                    <FontAwesome5 name="plus" size={38} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <Entypo name="calendar" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonsMenu}>
                    <FontAwesome name="gear" size={28} color="white" />
                </TouchableOpacity>

            </View>
        </View >
    );
}