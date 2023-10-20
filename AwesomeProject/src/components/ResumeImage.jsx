import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function ResumeImage(dir) {
    
  return (
    <Image style={styles.image} source={{uri: dir}}/>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100
  },
});
