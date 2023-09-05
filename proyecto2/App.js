import { StatusBar } from 'expo-status-bar';
import { 
    StyleSheet, 
    Text, 
    View, 
    Platform
  } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import IosText from './IosText';
import WebText from './WebText';

const CustomText = Platform.select({
  ios: IosText,
  web: WebText
})()


  //El <SafeAreaView> nos sirve en ios para que el statusBar quede bien
export default function App() {

  return (
    <View style={styles.container}>
      <CustomText></CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',

  
  },
});

