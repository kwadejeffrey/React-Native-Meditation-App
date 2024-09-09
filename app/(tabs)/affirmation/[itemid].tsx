import { View, Text, ImageBackground, SafeAreaView, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory'
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const AffirmationPractice = () => {
    const { itemid } = useLocalSearchParams()

    const [affirmation, setAffirmation] = useState<GalleryPreviewData>()
    const [sentences, setSentences] = useState<string[]>([])

    useEffect(() => {
        // console.log(data)
        for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
            const affirmationData = AFFIRMATION_GALLERY[idx].data;

            const affirmationToStart = affirmationData.find(
                (a) => a.id === Number(itemid)
            );

            if (affirmationToStart) {
                setAffirmation(affirmationToStart);

                const affirmationsArray = affirmationToStart.text.split(".");

                // Remove the last element if it's an empty string
                if (affirmationsArray[affirmationsArray.length - 1] === "") {
                    affirmationsArray.pop();
                }

                setSentences(affirmationsArray);
                return;
            }
        }
    }, [])
    return (
        <View className='flex-1'>
            <ImageBackground source={affirmation?.image} resizeMode='cover' className='flex-1' >
                <LinearGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]} className='flex-1'>
                    <SafeAreaView className='flex-1 '>
                        <Pressable onPress={() => (router.back())} className='absolute z-10 top-8 left-2'>
                            <Ionicons name="arrow-back-circle-outline" size={50} color="white" />
                        </Pressable>

                        <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
                            <View className="justify-center h-full border-white">
                                <View className="justify-center h-4/5">
                                    {sentences.map((sentence, idx) => (
                                        <Text key={idx} className='px-4 mt-2 text-3xl text-centertext-white'>
                                            {/* {affirmation?.text} */}
                                            {sentence}.
                                        </Text>

                                    ))}

                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default AffirmationPractice