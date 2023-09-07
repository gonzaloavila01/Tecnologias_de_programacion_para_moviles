//import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { THEME } from '../../theme/colors';

export const MenuButton=({name, size, color, text})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon}>
                <Feather name={name} size={size} color={color} />
            </TouchableOpacity>
            <Text>{text}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon:{
        marginBottom: 5,
    },
  });