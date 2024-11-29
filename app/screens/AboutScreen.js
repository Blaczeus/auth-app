import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';

export default function AboutScreen() {
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-3">About This App</Text>
      <Text className="text-base mb-5">
        This app helps users manage tasks and stay productive. Built with React Native and Tailwind CSS, it delivers a sleek and user-friendly experience.
      </Text>

      <Text className="text-lg font-bold mb-2">Developer</Text>
      <Text className="text-base mb-2">Anya Chidiebere Joshua</Text>
      <TouchableOpacity onPress={() => handleOpenLink('https://github.com/Blaczeus')}>
        <Text className="text-blue-500 underline">Visit My GitHub</Text>
      </TouchableOpacity>

      <Text className="text-lg font-bold mt-5 mb-2">Version</Text>
      <Text className="text-base mb-5">1.0.0</Text>

      <TouchableOpacity onPress={() => handleOpenLink('https://example.com/privacy')}>
        <Text className="text-blue-500 underline">Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
}
