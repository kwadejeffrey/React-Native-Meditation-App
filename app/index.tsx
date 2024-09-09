import { ImageBackground, Text, View } from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar"
import CustomButton from "@/components/CustomButton";
import AppGradient from "@/components/AppGradient";
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter();
    return (
        <View className="flex-1">
            <ImageBackground source={beachImage} className="flex-1" resizeMode="cover">
                {/* <AppGradient colors={["rgba(0,0,0,0.4) ", "rgba(0,0,0,0.8)"]}>
                        <SafeAreaView className="px-1 flex-1 justify-between">
                            <View>
                                <Text className="text-center text-3xl text-white font-bold">
                                    Meditation App
                                </Text>
                                <Text className="text-white text-center py-1">
                                    Experience Healthy Living
                                </Text>
                            </View>
                            <CustomButton onPress={() => router.push('/nature-meditate')} title="Get Started" />
                            <StatusBar style="auto" />
                        </SafeAreaView>
                </AppGradient> */}
                <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.4) ", "rgba(0,0,0,0.8)"]}>
                    <SafeAreaView className="mx-5 my-8 flex-1 justify-between">
                        <View>
                            <Text className="text-center text-3xl text-white font-bold">
                                Meditation App
                            </Text>
                            <Text className="text-white text-center py-1">
                                Experience Healthy Living
                            </Text>
                        </View>
                        <CustomButton onPress={() => router.push('/nature-meditate')} title="Get Started" />
                        <StatusBar style="light" />
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}


