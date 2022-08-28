import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";

import Constants from "expo-constants";
import { RadioButton } from "react-native-paper";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";


export function ScVizuPet({ route }) {
  const { petId } = route.params;
  const { getItem } = useAsyncStorage("@monypet:pets");
  const [petData, setPetData] = useState({});

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];

    setPetData(data.find((pet) => pet.id === petId));

    console.log(petData);
  }

  useFocusEffect(
    React.useCallback(() => {
      handleFetchData();
    }, [])
  );

  async function handleRemovePet(){
    const response = await getItem();
    const previousPets = response ? JSON.parse(response) : [];
    
    const petsData = [...previousPets, newPet];
  }

  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "white",
        flex: 1
      }}
    >
      {/* Cabeçalho */}
      <View style={styles.conteiner}>
        <TouchableOpacity style={{ marginLeft: 15 }}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.lineText}>Informações do Pet</Text>

        <TouchableOpacity style={{ marginRight: 15 }} onPress={handleRemovePet}>
          <FontAwesome name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={{ alignItems: "center", marginBottom: 20, marginTop: 10 }}>
          <ImageBackground
            source={require("../assets/images/DogAddImg.png")}
            resizeMode={"stretch"}
            imageStyle={{ margin: 10 }}
          >
            <TouchableOpacity style={styles.addPhoto}>
              <FontAwesome name="pencil" size={20} color="black" />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View style={{ marginHorizontal: 30 }}>
          <Text style={styles.lineText}> Nome do seu pet:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petName}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Idade do seu pet:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petYears}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Raça:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petRace}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Peso:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petWeight}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Tipo de Pelagem:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petFur}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Comportamento:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtInformation}
              value={petData.petBehavior}
              editable={false}
            ></TextInput>
            <TouchableOpacity style={styles.styleButton}>
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>

          <Text style={styles.lineText}>Ele(a) é um:</Text>
          <RadioButton.Group value={petData.petType}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <RadioButton
                value="dog"
                color="#527BCB"
                uncheckedColor="#527BCB"
              />
              <Text style={styles.styleTextSelection}>Cachorro</Text>

              <RadioButton
                value="cat"
                color="#527BCB"
                uncheckedColor="#527BCB"
              />
              <Text style={styles.styleTextSelection}>Gato</Text>
            </View>
          </RadioButton.Group>

          <Text style={styles.lineText}>Descrição:</Text>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.txtDesc}
              value={petData.petDescription}
              editable={false}
              multiline={true}
              numberOfLines={5}
            ></TextInput>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 30,
                marginVertical: 55,
              }}
            >
              <FontAwesome name="pencil" size={20} color="#461EA2" />
            </TouchableOpacity>
          </View>
        </View>

        <ImageBackground
          source={require("../assets/images/Onda.png")}
          resizeMode={"stretch"}
        >
          <View
            style={{
              alignItems: "center",
              height: 140,
              justifyContent: "flex-end",
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity style={styles.saveButton}>
              <Text style={{ color: "white", fontSize: 18 }}>Salvar</Text>
            </TouchableOpacity>

            <Text style={{ color: "black", fontSize: 12, alignSelf: "center", marginTop:10, alignItems:'flex-end'}}>
              COPYRIGHT@MonyPet
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 15,
  },

  scroll: {
    minHeight: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  addPhoto: {
    borderColor: "Black",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderWidth: 1,
    height: 120,
    width: 120,
    padding: 10,
  },

  txtInformation: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#527BCB",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    width: "90%",
    color: "black",
  },

  txtDesc: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#527BCB",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    width: "90%",
    textAlignVertical: "top",
    height: 150,
    color: "black",
  },

  lineText: {
    color: "#527BCB",
    fontSize: 20,
    marginBottom: 5,
  },

  styleButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 30,
  },
  saveButton: {
    borderRadius: 10,
    backgroundColor: "#461EA2",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 300,
    marginBottom: 10,
  },

  styleTextSelection: {
    fontSize: 16,
    color: "gray",
    paddingRight: 10,
  },
});
