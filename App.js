import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './assets/styles/global.css';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';



const Stack = createNativeStackNavigator();

export default function App ()
{
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false, animation: 'simple_push', animationDuration: 1000 }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}