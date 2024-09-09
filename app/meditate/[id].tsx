import { View, Text, ImageBackground, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react';
import meditationImages from '@/constants/meditation-images';
import { MEDITATION_DATA } from '@/constants/MeditationData';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondRemaining, setSecondsRemaining] = useState(10);

  const [isMeditating, setMeditating] = useState(false);

  useEffect(() => {
    let timerID: NodeJS.Timeout;

    if (secondRemaining === 0) {
      setMeditating(false)
      return;
    }

    if (isMeditating) {

      timerID = setTimeout(() => {
        setSecondsRemaining(secondRemaining - 1)
      }, 1000)
    }


    return () => {
      clearTimeout(timerID)
    }
  }, [secondRemaining, isMeditating])

  // Format the timeLeft to ensure two digits are displayed
  const formattedTimeMinutes = String(
    Math.floor(secondRemaining / 60)
  ).padStart(2, "0");
  const formattedTimeSeconds = String(secondRemaining % 60).padStart(2, "0");

  return (
    <View className='flex-1'>
      <ImageBackground source={meditationImages[Number(id) - 1]} resizeMode='cover' className='flex-1'>
        <LinearGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]} className='flex-1'>
          <SafeAreaView className='flex-1 py-8'>
            <Pressable onPress={() => (router.back())} className='absolute z-10 top-8 left-2'>
              <Ionicons name="arrow-back-circle-outline" size={50} color="white" />
            </Pressable>

            <View className='justify-center flex-1'>
              <View className='items-center justify-center mx-auto rounded-full w-44 h-44 bg-neutral-200'>
                <Text className='text-4xl text-blue-800 fonts-rmono'>{formattedTimeMinutes}:{formattedTimeSeconds}</Text>
              </View>
            </View>

            <View className='mb-5'>
              <CustomButton title='Start' onPress={() => setMeditating(true)} />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground >
    </View>
  )
}

export default Meditate