import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsGalleryProps {
    title?: string,
    preview?: GalleryPreviewData[],

}

const GuidedAffirmationsGallery = ({ title, preview }: GuidedAffirmationsGalleryProps) => {
    return (
        <View className='my-2'>
            <View className='mb-2'>
                <Text className='text-lg font-semibold text-white'>{title}</Text>
            </View>
            <View>
                <FlatList
                    data={preview}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Link href={`/affirmation/${item.id}`} asChild>
                            <Pressable>
                                <View className='h-36 w-32 rounded-md mr-4'>
                                    <Image source={item.image} className='w-full h-full' />
                                </View>
                            </Pressable>
                        </Link>
                    )}
                    horizontal
                />
            </View>
        </View>
    )
}

export default GuidedAffirmationsGallery