import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ResumenScreen from './src/screens/ResumenScreen';
import BaseScreen from './src/screens/BaseScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator()

// npx expo install expo-file-system
// npx expo install expo-media-library
// npx expo install expo-image-picker

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{tabBarStyle:{paddingTop: 40}}}>
      <Tab.Screen name='Base' component={BaseScreen}/>
      <Tab.Screen name='Resume' component={ResumenScreen}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
