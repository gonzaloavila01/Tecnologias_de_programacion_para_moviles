import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {  AntDesign } from '@expo/vector-icons';

const Button = ({ icon, size, color, backgroundColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={[styles.iconContainer, { backgroundColor}]}>
          <AntDesign name={icon} size={size} color={color} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 50
  },
  iconContainer: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});

export default Button;