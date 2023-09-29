import { StyleSheet, TouchableOpacity, Text} from "react-native";
import { THEME } from "../../theme/Colors";

export const Number = ({text, textColor}) =>{
    return(
        <TouchableOpacity style={styles.container }>
            <Text style={[styles.buttonText, {color: textColor,}]}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: THEME.COLORS.YELLOW,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    buttonText: {
        fontSize: 20, 
        fontWeight: '500',
        textTransform: 'capitalize',
    }
})