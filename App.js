import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "./screeens/home";
import SpaceCraftScreen from "./screeens/spaceCraft";
import StarMapScreen from "./screeens/starMap";
import DailyPictureScreen from "./screeens/dailyPic";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="Daily" component={DailyPictureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
