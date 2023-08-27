import { Text } from "react-native";

export const CustomText = ({text, fontFamily, fontSize, fontWeight, color, fontStyle, textAlign, letterSpacing, lineHeight,textDecorationLine}) => {
    return(
        <Text style={{fontSize, color, fontFamily, fontWeight, fontStyle, textAlign, letterSpacing, lineHeight, textDecorationLine}}>{text}</Text>
    );
}