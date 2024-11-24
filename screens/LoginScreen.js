import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen ()
{
    const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://developbetterapps.com', {
                email,
                password,
            });

            await SecureStore.setItemAsync('authToken', response.data.token);

            navigation.navigate('Home')
        } catch (error) {
            console.error('Login Failed: ', error.response.data );
        }
    };


    return (
        <View className="">
            <View className="w-full h-full bg-white">
                <StatusBar style="dark" />
                <Image source={require( '../assets/images/background.png' )} className="absolute w-full h-full" />

                {/*Lights*/}
                <View className="absolute flex-row justify-around w-full">
                    <Animated.Image entering={FadeInUp.delay( 200 ).duration( 1000 ).springify().damping( 3 )} source={require( '../assets/images/light.png' )} className="h-[225] w-[90]" />
                    <Animated.Image entering={FadeInUp.delay( 400 ).duration( 1000 ).springify().damping( 2 )} source={require( '../assets/images/light.png' )} className="h-[160] w-[65]" />
                </View>

                {/*Title and Form*/}
                <View className="flex justify-around w-full h-full pt-40 pb-10">

                    {/*Title*/}
                    <View className="flex items-center">
                        <Animated.Text entering={FadeInUp.duration( 1000 ).springify()} className="text-5xl font-bold tracking-wider text-white">Login</Animated.Text>
                    </View>

                    {/*Form*/}
                    <View className="flex items-center mx-4 space-y-4">
                        <Animated.View entering={FadeInDown.duration( 1000 ).springify()} className="w-full p-5 m-5 bg-black/5 rounded-2xl">
                            <TextInput 
                                placeholder="Email" 
                                placeholderTextColor={'gray'} 
                                value={email}
                                onChangeText={setEmail}
                            />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 200 ).duration( 1000 ).springify()} className="w-full p-5 m-5 bg-black/5 rounded-2xl">
                            <TextInput 
                                placeholder="Password" 
                                placeholderTextColor={'gray'}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 400 ).duration( 1000 ).springify()} className="flex items-center justify-center w-full p-5 mt-5 rounded-2xl">
                            <TouchableOpacity onPress={handleLogin}  className="flex items-center justify-center w-full px-4 bg-sky-400 h-14 rounded-2xl">
                                <Text className="text-xl font-bold text-center text-white">Login</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 600 ).duration( 1000 ).springify()} className="flex-row justify-center">
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push( 'Signup' )}>
                                <Text className="font-bold text-sky-600">Sign Up</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </View>
    )
}
