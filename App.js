import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/navigation/AuthStack';
import AuthenticatedTabs from './app/navigation/AuthenticatedTabs';
import './assets/styles/global.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const loggedInUser = await SecureStore.getItemAsync('loggedInUser');
        if (loggedInUser) {
          setUserInfo(JSON.parse(loggedInUser));
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
     <NavigationContainer>
      {isAuthenticated ? (
        <AuthenticatedTabs 
          setIsAuthenticated={setIsAuthenticated} 
          userInfo={userInfo} 
        />
      ) : (
        <AuthStack setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );

}
