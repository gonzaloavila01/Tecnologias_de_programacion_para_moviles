import {StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { AuthContextProvider } from './src/context/AuthContext';

const Stack = createStackNavigator()

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <View style={styles.container}> 
            <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false,}}>
              <Stack.Screen name='Login' component={LoginScreen}/>
              <Stack.Screen name='Account' component={AccountScreen}/>
              <Stack.Screen name='Details' component={DetailsScreen}/>
            </Stack.Navigator>
        </View>
      </NavigationContainer>
    </AuthContextProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
});