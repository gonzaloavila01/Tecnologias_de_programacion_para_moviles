import { AntDesign } from '@expo/vector-icons'; 
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme/colors';

export const IconButton=({name, size, color})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name={name} size={size} color={color} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: THEME.COLORS.ORANGE1.LIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60,
      padding: 15,
      marginHorizontal:10,
    },
});