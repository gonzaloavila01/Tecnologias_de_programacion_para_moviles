import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CharactersScreen } from './src/Screens/CharactersScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { InfoCaracters } from './src/Screens/InfoCharacters';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName='Characters' 
          screenOptions={{headerTitleStyle:{ 
            fontWeight: '600', fontSize: 20
            },
            headerStyle:{
              backgroundColor: '#272b33',
            }, 
            headerTintColor: 'white'
          }} >
          <Stack.Screen name='Characters' component={CharactersScreen}/>
          <Stack.Screen name='Information' component={InfoCaracters}/>
        </Stack.Navigator> 
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 10,
  backgroundColor: '#272b33',
},
headerTitleStyle:{
  fontWeight: '900',
  fontFamily: 40,
},
});