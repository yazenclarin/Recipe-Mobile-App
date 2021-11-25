import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home'
import MainDishScreen from './screens/MainDish'
import SideDishScreen from './screens/SideDish'
import DessertsScreen from './screens/Desserts'
import AllRecipeScreen from './screens/AllRecipe'



const Stack = createNativeStackNavigator();

const MyStack = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MainDish" component={MainDishScreen}/>
        <Stack.Screen name="SideDish" component={SideDishScreen}/>
        <Stack.Screen name="Desserts" component={DessertsScreen}/>
        <Stack.Screen name="AllRecipe" component={AllRecipeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default MyStack