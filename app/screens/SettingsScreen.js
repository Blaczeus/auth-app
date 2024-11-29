import React, { useState, useEffect } from 'react';
import { View, Text, Switch, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function SettingsScreen({ setIsAuthenticated }) {
  const [darkMode, setDarkMode] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const loggedInUser = await SecureStore.getItemAsync('loggedInUser');
        if (loggedInUser) {
          setUserInfo(JSON.parse(loggedInUser));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync('loggedInUser');
      setIsAuthenticated(false); 
    } catch (error) {
        console.error('Failed to log out:', error);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-100 p-5 mt-10">
      <Text className="text-2xl font-bold mb-5">Settings</Text>

      <View className="flex-row justify-between items-center mb-5">
        <Text className="text-lg">Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode((prev) => !prev)}
          thumbColor={darkMode ? '#007bff' : '#ddd'}
        />
      </View>

      <View className="flex-row justify-between items-center mb-5">
        <Text className="text-lg">Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode((prev) => !prev)}
          thumbColor={darkMode ? '#007bff' : '#ddd'}
        />
      </View>
      
      <TouchableOpacity className="mt-5 bg-blue-500 py-3 rounded-lg">
        <Text className="text-white text-center text-lg">Change Password</Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="mt-3 bg-red-500 py-3 rounded-lg" onPress={handleLogout}>
        <Text className="text-white text-center text-lg">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
