import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppEntry from '../screens/AppEntry';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="AppEntry"
                component={AppEntry}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />            
        </Stack.Navigator>
      </NavigationContainer>

  );
}

