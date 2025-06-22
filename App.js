import React from "react";
import { Text, View } from "react-native";

// IMPORT STYLES
import { styles } from "./src/styles/styles";

// IMPORT PAGES
import Home from "./src/pages/LoginScreen";
import Sobre from "./src/pages/HomeScreen";

// Fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
// Importando as funções da Rota Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
