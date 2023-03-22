import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import Option1 from "../screens/Option1";
import Option2 from "../screens/Option2";
import Option3 from "../screens/Option3";


const Stack = createStackNavigator();

export const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Option1" component={Option1}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Option2" component={Option2}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Option3" component={Option3}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}