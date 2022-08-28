import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from ".";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScPetAdd } from "../screens/ScreenPetAdd";
import { ScPetChoice } from "../screens/ScreenPetChoice";
import { ScVizuPet } from "../screens/ScreenVizuPet";

//Armazenar todas as telas no navigator
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="ScPetChoice" component={ScPetChoice} />
      <Screen name="ScPetAdd" component={ScPetAdd} />
      <Screen name="ScVizuPet" component={ScVizuPet} />
    </Navigator>
  );
}
