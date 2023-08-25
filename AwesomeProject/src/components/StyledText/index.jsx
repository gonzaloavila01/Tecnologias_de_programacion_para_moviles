import { Text } from "react-native"

export const StyledText = ({text, fontSize, fontWeight, color, bold}) => {
    return(
        <Text style={{fontSize, color, fontWeight}}>{text}</Text>
    )
}
