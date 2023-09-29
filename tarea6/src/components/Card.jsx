import { StyleSheet, TouchableOpacity, Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { THEME } from "../../theme/Colors";

export const Card = ({text, isEnabled}) =>{
    return(
        <View style={styles.container}>
            <View style={{flegap: 10}}>
                <Text style={styles.labelText}>Rate Type</Text>
                <Text style={[styles.labelText, styles.titleText]}>{text}</Text>
            </View>
            <View style={{flexDirection: 'row-reverse', justifyContent: 'left',}}>
                <TouchableOpacity style={[styles.enabledButton, isEnabled&&{backgroundColor: THEME.COLORS.ORANGE}]}>
                    <AntDesign name="check" size={24} color={isEnabled?'white':'grey'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: 180,
        width: 190,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        marginLeft: 5,
    },
    enabledButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: THEME.COLORS.GRAY,
    },
    labelText:{
        fontWeight: '800',
        fontSize: 15,
        color: 'gray',
    },
    titleText: {
        color: 'black',
        fontSize: 20,
    }
})