import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";

//This will prevent auto hiding until loading all fonts
SplashScreen.preventAutoHideAsync();
export default function RootLayout(){
    const [fontsLoaded, error] = useFonts({
        "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
    });

    // const [fontsLoaded, setFontsLoaded] = useState()

    useEffect(()=> {
        if(error) throw error;

        if(fontsLoaded) SplashScreen.hideAsync();
    },[]);

    if(!fontsLoaded) return null;
    if(!fontsLoaded && !error) return null;

    return (
        // <Slot/>
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
            <Stack.Screen name="index" options={{headerShown:false}}/>
            <Stack.Screen name="meditate/[id]" options={{headerShown:false}}/>
        </Stack>
    );
}