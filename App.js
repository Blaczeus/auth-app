import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './assets/styles/global.css';


const Stack = createNativeStackNavigator();

function RootStack ()
{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={} />
    </Stack.Navigator>
  );
}


export default function App ()
{
  return (
    <NavigationContainer>
      <RootStack />
      {/* <View className="flex-1 justify-center items-center bg-gray-200">
        <Text className="text-4xl font-bold text-blue-500">Hello World!</Text>
      </View> */}
    </NavigationContainer>
  );
}