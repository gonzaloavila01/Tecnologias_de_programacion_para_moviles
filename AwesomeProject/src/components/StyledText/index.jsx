import { Text } from "react-native"

export const StyledText = ({text, fontSize, fontWeight, color}) => {
    return(
        <Text style={{fontSize, color, fontWeight}}>{text}</Text>
    );
}
