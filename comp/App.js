import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '700'
            },
          }}>
          <Stack.Screen name= 'Home' component={HomeScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
