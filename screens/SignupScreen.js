import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function SignupScreen ()
{
    const navigation = useNavigation();
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
                <View className="flex justify-around w-full h-full pt-48">

                    {/*Title*/}
                    <View className="flex items-center">
                        <Animated.Text entering={FadeInUp.duration( 1000 ).springify()} className="text-5xl font-bold tracking-wider text-white">Sign Up</Animated.Text>
                    </View>

                    {/*Form*/}

                    <View className="flex items-center mx-4 space-y-4">
                        <Animated.View entering={FadeInDown.duration( 1000 ).springify()} className="w-full p-5 m-3 bg-black/5 rounded-2xl">
                            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 200 ).duration( 1000 ).springify()} className="w-full p-5 m-3 bg-black/5 rounded-2xl">
                            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 400 ).duration( 1000 ).springify()} className="w-full p-5 m-3 bg-black/5 rounded-2xl">
                            <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={true} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 600 ).duration( 1000 ).springify()} className="flex items-center justify-center w-full p-5 mt-5 rounded-2xl">
                            <TouchableOpacity className="flex items-center justify-center w-full px-4 bg-sky-400 h-14 rounded-2xl">
                                <Text className="text-xl font-bold text-center text-white">Sign Up</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 800 ).duration( 1000 ).springify()} className="flex-row justify-center">
                            <Text>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push( 'Login' )}>
                                <Text className="font-bold text-sky-600">Login</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>

                </View>
            </View>
        </View>
    )
}