import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({icon, text, isActive, onPress}) {
    const getColor = () => {
        return(isActive ? "#20B0B0" : 'gray')
    }
  return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Feather name={icon} size={24} color={getColor()}/>
        <Text style={{color:getColor()}}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    width: 70,
    height: 70
  },
});
