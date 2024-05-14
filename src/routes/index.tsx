import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../pages/home"
import { Details } from "../pages/details"
import { Favorites } from "../pages/favorites"

export type StackParamList = {
    home: undefined;
    details: undefined;
    favorites: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>()

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="details"
                component={Details}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="favorites"
                component={Favorites}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}