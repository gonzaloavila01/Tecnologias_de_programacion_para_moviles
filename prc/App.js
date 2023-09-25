import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CharactersScreen } from './src/Screens/CharactersScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <CharactersScreen/>
        <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272b33',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});