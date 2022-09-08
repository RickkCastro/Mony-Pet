import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from ".";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScPetAdd } from "../screens/ScreenPetAdd";
import { ScPetChoice } from "../screens/petChoice/ScreenPetChoice";
import { ScVizuPet } from "../screens/ScreenVizuPet";
import { ScHome } from "../screens/home/screenHome";
import { ScRegisterAdd } from "../screens/registerAdd/registerAdd";


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
      <Screen name="ScHome" component={ScHome}/>
      <Screen name="ScRegisterAdd" component={ScRegisterAdd}/>
    </Navigator>
  );
}
