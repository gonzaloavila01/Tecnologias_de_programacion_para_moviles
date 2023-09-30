import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './src/screens/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2bc76',
  },
});
