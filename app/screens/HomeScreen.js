import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default function HomeScreen({ setIsAuthenticated }) {
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
    <View className="flex-1 p-5 mt-10">
      <View className="flex-1 p-6 mt-14">
            <Text className="text-black text-3xl font-bold mb-20">Add Task</Text>
            <TouchableOpacity
                className="bg-black p-4 rounded-lg mb-6 mt-6"
                // onPress={handleAddTask}
            >

            </TouchableOpacity>
        </View>
      {userInfo ? (
        <>
          <View className="mb-5 mt-10 items-center">
            <Text className="text-3xl font-bold">Welcome Back, {userInfo.username}!</Text>
            <Text className="text-lg">Here's a quick overview of your activities.</Text>
          </View>

          <View className="mb-5 mt-5">
            <Text className="text-3xl font-semibold mt-8 mb-3">Quick Actions</Text>
            {/* Quick Action Cards in Two Columns */}
            <View className="flex-row flex-wrap justify-between">
              <TouchableOpacity className="bg-gradient-to-r from-blue-400 to-blue-600 flex-1 min-w-[48%] items-center py-3 mx-1 rounded-lg shadow-lg">
                <Text className="font-semibold text-white">Add Task</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-gradient-to-r from-green-400 to-green-600 flex-1 min-w-[48%] items-center py-3 mx-1 rounded-lg shadow-lg">
                <Text className="font-semibold text-white">View Settings</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-gradient-to-r from-yellow-400 to-yellow-600 flex-1 min-w-[48%] items-center py-3 mx-1 rounded-lg shadow-lg">
                <Text className="font-semibold text-white">About Us</Text>
              </TouchableOpacity>

              <TouchableOpacity className="bg-gradient-to-r from-red-400 to-red-600 flex-1 min-w-[48%] items-center py-3 mx-1 rounded-lg shadow-lg">
                <Text className="font-semibold text-white">Notifications</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mb-5">
            <Text className="text-lg font-semibold mb-3">Recent Activities</Text>
            <View className="p-4 rounded-lg shadow-md">
              <Text className="text-base font-medium">You completed 5 tasks this week!</Text>
              <Text className="text-sm text-gray-500 mt-2">Keep up the great work!</Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <Text className="text-3xl font-bold mb-4">Welcome Guest!</Text>
          <Text className="text-lg text-gray-200 mb-8">You have not been successfully authenticated.</Text>
          <TouchableOpacity
            onPress={() => setIsAuthenticated(false)}
            className="flex items-center justify-center px-4 py-2 bg-sky-400 h-14 rounded-2xl"
          >
            <Text className="text-xl font-bold text-center text-white">Go back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
