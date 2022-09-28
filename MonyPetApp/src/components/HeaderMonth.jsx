import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export function () {
    return (
        <View style={styles.headerStyle}>
            {/* Imagem perfil */}
            <Text style={styles.Title}>Tela Inicial</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}>
                <Image
                    source={petImage ? { uri: petImage } : require('../../assets/images/AddPet.png')}
                    resizeMode={'stretch'}
                    style={styles.imgPet}
                />
            </TouchableOpacity>

            {/* Mes */}
            <Text style={styles.scrollTitle}> Intervalo de data dos registros: </Text>
            <View style={styles.datesView}>
                <TouchableOpacity onPress={() => setShowDP1(true)} style={styles.monthStyle}>
                    <AntDesign name="calendar" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
                    <Text style={styles.txtDate}> {formatDate(minDate)} </Text>
                    <AntDesign name="caretdown" size={13} color="#75739c" style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>

                {showDP1 && (
                    <DateTimePicker
                        value={minDate}
                        mode={'date'}
                        onChange={onChangeMinDate}
                    />
                )}

                <Text style={styles.ateTxt}>Até</Text>

                <TouchableOpacity onPress={() => setShowDP2(true)} style={styles.monthStyle}>
                    <AntDesign name="calendar" size={13} color="#75739c" />
                    <Text style={styles.txtDate}> {formatDate(maxDate)} </Text>
                    <AntDesign name="caretdown" size={13} color="#75739c" />
                </TouchableOpacity>

                {showDP2 && (
                    <DateTimePicker
                        value={maxDate}
                        mode={'date'}
                        onChange={onChangeMaxDate}
                        minimumDate={minDate}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {}
});