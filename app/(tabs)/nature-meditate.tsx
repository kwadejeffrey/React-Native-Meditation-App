import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MEDITATION_DATA } from '@/constants/MeditationData';
import Meditation_Images from '@/constants/meditation-images';
import { router } from 'expo-router';

const NatureMeditate = () => {
    return (
        <View className='flex-1'>
            <LinearGradient className='flex-1' colors={["#161b2e", "#0a4d4a", "#766e67"]}>
                <SafeAreaView className='justify-between flex-1 mx-5 my-8'>
                    <View className='mb-6'>
                        <Text className='text-4xl font-bold text-left text-white'>
                            Welcome Nii
                        </Text>
                        <Text className='mt-2 text-lg text-white font-sembold'>
                            Start your meditation.
                        </Text>
                    </View>
                    <View>
                        <FlatList data={MEDITATION_DATA}
                            className='mb-20'
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => router.push(`/meditate/${item.id}`)}
                                    className='h-48 my-3 overflow-hidden rounded-lg'
                                >
                                    <ImageBackground
                                        source={Meditation_Images[item.id - 1]}
                                        resizeMode='cover'
                                        className='justify-center flex-1 rounded-md'
                                    >
                                        <LinearGradient colors={["transparent", "rgba(0,0,0,.8)"]} className='items-center justify-center flex-1'>
                                            <Text className='text-3xl text-center text-white font-sembold'>
                                                {item.title}
                                            </Text>

                                        </LinearGradient>
                                    </ImageBackground>
                                </Pressable>
                            )}
                        />

                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

export default NatureMeditate
