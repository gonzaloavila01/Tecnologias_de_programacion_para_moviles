import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native';

export default function Card({name, price, image}) {
  return (
      <TouchableOpacity style={styles.container}>
        <Image source={{uri: image}} style={{width: 180, height: 180}}/>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{name}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: "#20B0B0"}}>{price}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: "#20B0B0",
    borderRadius: 10,
    height: 300,
    padding: 20,
    marginHorizontal: 15,
    margin: 2.5,
    backgroundColor: 'white'
  },
});
