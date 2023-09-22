import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CharacterScreen from './src/Screens/CharacterScreen';
import { CharactersScreen } from './src/Screens/CharactersScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <CharactersScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});