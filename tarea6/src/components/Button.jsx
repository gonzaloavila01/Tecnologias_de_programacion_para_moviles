import { StyleSheet, TouchableOpacity, Text} from "react-native";

export const Button = ({text, onPress, buttonColor, textColor}) =>{
    return(
        <TouchableOpacity style={[styles.container, {backgroundColor: buttonColor}]} onPress={onPress}>
            <Text style={[styles.buttonText, {color: textColor,}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:20,
        paddingHorizontal: 25,
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 20, 
        fontWeight: '500',
        textTransform: 'capitalize',
    }
})