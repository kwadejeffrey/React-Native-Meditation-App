import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmation = () => {
    return (
        <View className='flex-1'>
            <LinearGradient className='flex-1' colors={["#2e1f58", "#54426b", "#a790af"]}>
                <SafeAreaView className='flex-1 my-6 px-2'>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text className='text-3xl text-white font-bold p-1'>Change your beliefs with positive affirmations.</Text>
                        </View>
                        <View>
                            {AFFIRMATION_GALLERY.map((g)=> (
                                <GuidedAffirmationsGallery key={g.title} title={g.title} preview={g.data}/>
                            ))}
                        </View>
                    </ScrollView>

                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

export default Affirmation