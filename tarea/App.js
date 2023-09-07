import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './theme/colors';
import Second from './screens/Second';
import MainScreen from './screens/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainScreen></MainScreen> */}
      <Second/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.ORANGE,
  },
});
