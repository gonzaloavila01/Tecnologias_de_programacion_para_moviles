import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, } from 'react-native';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/UserNavigation/HomeScreen';
import { useAppContext } from './src/hooks/useAppContext';
import { CustomDrawerContent } from './src/components/CustomDrawerContent';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { THEME } from './src/theme/Colors';
import { UserNavigationScreen } from './src/screens/UserNavigationScreen';

const Tab = createMaterialBottomTabNavigator()
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const NavigationHolder = () => {
    const [isAuthenticated,] =useAppContext()
    
  
  if(!isAuthenticated){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: true, title:false, headerStyle:{backgroundColor: THEME.COLORS.BACKGROUND}}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )}
  else{
    return(
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent{...props}/>} screenOptions={{headerTitle:''}}>
          <Drawer.Screen name= 'Main' component={UserNavigationScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
