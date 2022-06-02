import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} 
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            /> 
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />             
        </Stack.Navigator>
      </NavigationContainer>

  );
}

