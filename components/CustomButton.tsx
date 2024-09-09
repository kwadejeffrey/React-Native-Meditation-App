import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps{
    title?: string,
    onPress: () => void,
    textStyles?: string,
    containerStyles?: string
}


export default function CustomButton({onPress, title, textStyles, containerStyles}: CustomButtonProps){
    return (
        <TouchableOpacity activeOpacity={0.7} className={`bg-white cursor-pointer min-h-[62px] items-center rounded-xl text-center justify-center ${containerStyles}`} onPress={onPress}>
            <Text className={`font-semibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

