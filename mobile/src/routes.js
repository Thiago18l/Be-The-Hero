import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AppStack = createStackNavigator();

// Páginas
import Incidents from "./pages/incidents";
import Details from "./pages/detail";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
