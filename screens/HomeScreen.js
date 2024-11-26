import React, {useState, useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ setIsAuthenticated }) 
{
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const loggedInUser = await SecureStore.getItemAsync('loggedInUser');
      if (loggedInUser) {
        setUserInfo(JSON.parse(loggedInUser));
      }
      setLoading(false);
    };
    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('loggedInUser');
    setIsAuthenticated(false);
  };


  return (
    <View className="flex-1 justify-center items-center bg-white">
      {userInfo ? (
        <>
          <Text className="text-2xl font-bold mb-4">Welcome {userInfo.username}!</Text>
          <Text className="text-lg mb-8">You have been successfully authenticated.</Text>
          <TouchableOpacity onPress={handleLogout} className="flex items-center justify-center px-4 bg-sky-400 h-14 rounded-2xl">
            <Text className="text-xl font-bold text-center text-white">Log out</Text>
          </TouchableOpacity>
        </>
      ): (
        <>
          <Text className="text-2xl font-bold mb-4">Welcome Guest!</Text>
          <Text className="text-lg mb-8">You have not been successfully authenticated.</Text>
          <TouchableOpacity onPress={handleLogout} className="flex items-center justify-center px-4 bg-sky-400 h-14 rounded-2xl">
            <Text className="text-xl font-bold text-center text-white">Log out</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
