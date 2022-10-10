import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScPetAdd } from "../screens/petAdd/PetAdd";
import { ScPetChoice } from "../screens/petChoice/PetChoice";
import { ScVizuPet } from "../screens/vizuPet/VizuPet";
import { ScHome } from "../screens/home/Home";
import { ScRegisterAdd } from "../screens/registerAdd/RegisterAdd";
import { ScStatistics } from "../screens/statistics/Statistics";


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
      <Screen name="ScStatistics" component={ScStatistics}/>
    </Navigator>
  );
}
