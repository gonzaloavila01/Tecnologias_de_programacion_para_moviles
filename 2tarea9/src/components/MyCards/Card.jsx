import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Card({money, account, color, textColor}) {


  return (
      <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
            <FontAwesome name="cc-mastercard" size={35} color={textColor} />
            <Text style={{color: textColor}}>**** {account}</Text>
        </View>
        <Text style={{color: textColor}}>$ {money}.00</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 150,
    width: 250,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 2.5,
    borderWidth: 1,
    borderColor: 'black'
  },
});
