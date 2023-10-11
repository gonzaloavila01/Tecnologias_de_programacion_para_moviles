import React from 'react';
import { TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import { AuthContextProvider } from './src/context/AuthContext';
import { useAuthContext } from './src/hooks/useAuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import StartScreen from './src/screens/StartScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const Draw = createDrawerNavigator()

function LogOut({navigation}) {
  const {handleLogout} = useAuthContext()
  handleLogout()
  navigation.navigate('Login')

}

function HomeDrawer({navigation}) {
  return (
    <Draw.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Draw.Screen name="Home" component={HomeTabScreen} />
      <Draw.Screen name="Log Out" component={LogOut} />
    </Draw.Navigator>
  )
}

function HomeTabScreen({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { height: 80 },
      tabBarShowLabel: false,
      headerShown: false
      }}
    >
      <Tab.Screen name="Home2" component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Header
              icon="compass"
              text="Home"
              isActive={focused}
              onPress={() => {
                navigation.navigate('Home2');
              }}
            />
          ),
          }}
      />
      <Tab.Screen name="Wishlist" component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Header
              icon="heart" 
              text="Wishlist"
              isActive={focused}
              onPress={() => {
                navigation.navigate('Wishlist', { text: 'Wishlist' });
              }}
            />
          ),
          }}
      />
      <Tab.Screen name="Cart" component={MainScreen} initialParams={text='Cart'}  
        options={{
          tabBarIcon: () => (
            <TouchableOpacity style={{backgroundColor:'#20B0B0', borderRadius: 50, width: 60, height: 60, padding: 10, alignItems: 'center',justifyContent: 'center',}} onPress={() => {navigation.navigate('Cart')}}>
              <Feather name="shopping-cart" size={24} color="white" />
            </TouchableOpacity>
          ),
          }}
      />
      <Tab.Screen name="Orders" component={MainScreen} initialParams={text='Orders'}  
        options={{
          tabBarIcon: ({ focused }) => (
            <Header
              icon="clipboard" 
              text="Orders"
              isActive={focused}
              onPress={() => {navigation.navigate('Orders', { text: 'Orders' })}}
            />
          ),
          }}
      />
      <Tab.Screen name="Profile" component={MainScreen} initialParams={text='Profile'}  
        options={{
          tabBarIcon: ({ focused }) => (
            <Header
              icon="user" 
              text="Profile"
              isActive={focused}
              onPress={() => {
                navigation.navigate('Profile', { text: 'Profile' });
              }}
            />
          ),
          }}
      />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown: false,}}>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='Start' component={StartScreen}/>
            <Stack.Screen name='Home1' component={HomeDrawer}/>
          </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  )
}


