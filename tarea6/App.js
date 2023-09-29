
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './src/screens/MainScreen';
import { SecondScreen } from './src/screens/SecondScreen';


const Stack = createStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
          <Stack.Screen name='Main' component={MainScreen}/>
          <Stack.Screen name='Second' component={SecondScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
