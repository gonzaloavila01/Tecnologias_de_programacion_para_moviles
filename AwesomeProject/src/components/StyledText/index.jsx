import { Text } from "react-native"

export const StyledText = ({text, fontSize, marginLeft, fontWeight, color}) => {
    return(
        <Text style={{fontSize, color, marginLeft, fontWeight}}>{text}</Text>
    );
}
