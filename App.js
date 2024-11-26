import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './assets/styles/global.css';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen.js';



const Stack = createNativeStackNavigator();

export default function App ()
{

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect( () => {
    const checkAuth = async () => {
      const loggedInUser = await SecureStore.getItemAsync('loggedInUser');
      setIsAuthenticated(!!loggedInUser);
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 3000,
        }}
      >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home">
              {() => <HomeScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login">
              {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
              {() => <SignupScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );

}
