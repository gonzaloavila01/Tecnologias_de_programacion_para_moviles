import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Screen } from './src/screens/Screen';
import { THEME } from './src/theme/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.WHITE,
    paddingTop: 40,
    alignItems: 'center',
  },
});