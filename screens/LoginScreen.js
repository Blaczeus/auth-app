import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen ()
{
    const navigation = useNavigation();
    return (
        <View className="">
            <View className="bg-white h-full w-full">
                <StatusBar style="dark" />
                <Image source={require( '../assets/images/background.png' )} className="h-full w-full absolute" />

                {/*Lights*/}
                <View className="absolute w-full flex-row justify-around">
                    <Animated.Image entering={FadeInUp.delay( 200 ).duration( 1000 ).springify().damping( 3 )} source={require( '../assets/images/light.png' )} className="h-[225] w-[90]" />
                    <Animated.Image entering={FadeInUp.delay( 400 ).duration( 1000 ).springify().damping( 2 )} source={require( '../assets/images/light.png' )} className="h-[160] w-[65]" />
                </View>

                {/*Title and Form*/}
                <View className="h-full w-full flex justify-around pt-40 pb-10">

                    {/*Title*/}
                    <View className="flex items-center">
                        <Animated.Text entering={FadeInUp.duration( 1000 ).springify()} className="text-white font-bold tracking-wider text-5xl">Login</Animated.Text>
                    </View>

                    {/*Form*/}
                    <View className="flex items-center mx-4 space-y-4">
                        <Animated.View entering={FadeInDown.duration( 1000 ).springify()} className="bg-black/5 p-5 m-5 rounded-2xl w-full">
                            <TextInput placeholder="Email" placeholderTextColor={'gray'} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 200 ).duration( 1000 ).springify()} className="bg-black/5 p-5 m-5 rounded-2xl w-full">
                            <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry={true} />
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 400 ).duration( 1000 ).springify()} className="w-full mt-5 p-5 rounded-2xl flex justify-center items-center">
                            <TouchableOpacity className="w-full bg-sky-400 h-14 px-4 rounded-2xl flex justify-center items-center">
                                <Text className="text-white font-bold text-center text-xl">Login</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View entering={FadeInDown.delay( 600 ).duration( 1000 ).springify()} className="flex-row justify-center">
                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.push( 'SignUp' )}>
                                <Text className="text-sky-600 font-bold">Sign Up</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </View>
    )
}