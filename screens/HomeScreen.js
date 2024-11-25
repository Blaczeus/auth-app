import React, {useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen () 
{
  const navigation = useNavigation();

  const handleLogout = () => {
    
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Welcome to the Home Screen!</Text>
      <Text className="text-lg mb-8">You have been successfully authenticated.</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
