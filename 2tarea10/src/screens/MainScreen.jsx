import {StyleSheet, Text, View } from 'react-native';


export default function MainScreen({navigation, route}) {
  const { text } = route.params || '';
  return (
    <View style={styles.container}> 
    <Text>{text}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
