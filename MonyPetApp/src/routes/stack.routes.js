import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from "../screens/ScreenA";
import { ScPetAdd } from "../screens/ScreenPetAdd";
import { ScPetChoice } from "../screens/ScreenPetChoice";
import { ScVizuPet } from "../screens/ScreenVizuPet";

//Armazenar todas as telas no navigator
export function StackRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            
            <Screen 
                name='ScPetChoice'
                component={ScPetChoice}
            />
            <Screen 
                name='ScPetAdd'
                component={ScPetAdd}
                options={{
                    headerShown: true,
                    title: 'Adicione seu Pet',
                    headerTitleAlign: 'center',
                    headerTintColor: '#527BCB',
                }}
            />
            <Screen 
                name='ScVizuPet'
                component={ScVizuPet}
                options={{
                    headerShown: true,
                    title: '{Nome Pet}',
                    headerTitleAlign: 'center',
                    headerTintColor: '#527BCB',
                }}
            />
        </Navigator>
    )
}