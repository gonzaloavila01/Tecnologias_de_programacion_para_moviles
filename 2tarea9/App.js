import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { MainScreen } from './src/screens/Main';
import { AppContextProvider, AppContext } from './src/context/AppContext';
import { THEME } from './src/theme/colors';
import { MyCards } from './src/screens/MyCards';
import { Balance } from './src/screens/Balance';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

function AppContent() {
  const { themes } = useContext(AppContext);

  const getTextColor = () => {
    return themes === THEME.MODES.DARK ? 'white' : 'black';
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Main' backBehavior='initialRoute'
        screenOptions={{
          showLabel: false,
          tabBarStyle: {
            backgroundColor: themes === THEME.MODES.DARK ? 'black' : 'white',
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: getTextColor(), 
        }}
      >
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='MyCards' component={MyCards} />
        <Tab.Screen name='Balance' component={Balance} />
      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  );
}
