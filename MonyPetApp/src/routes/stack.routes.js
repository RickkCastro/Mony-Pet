import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScPetAdd } from "../screens/ScreenPetAdd";
import { ScPetChoice } from "../screens/ScreenPetChoice";

//Armazenar todas as telas no navigator
export function StackRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            
            <Screen 
                name='screenA'
                component={ScreenA}
            />
            
            <Screen 
                name='ScPetAdd'
                component={ScPetAdd}
            />
            <Screen 
                name='ScPetChoice'
                component={ScPetChoice}
            />
        </Navigator>
    )
}