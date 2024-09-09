import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLaout = () => {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.primary}}>
        <Tabs.Screen name='nature-meditate' 
        options={{
            tabBarLabel: "Meditate",
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="flower" size={24} color={color} />
            )

        }} />
        <Tabs.Screen name='affirmation' 
        options={{
            tabBarLabel: "Affirmation",
            tabBarIcon: ({color}) => (
                <Entypo name="emoji-happy" size={24} color={color} />
            )

        }} />
    </Tabs>
  )
}

export default TabsLaout