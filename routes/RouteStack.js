import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import Dashboard from '../screens/Dashboard';
import Home from '../screens/Home';
import ExamOne from '../screens/ExamOne';
import ExamTwo from '../screens/ExamTwo';

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
                name="SignIn"
                component={SignIn}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard} 
            />
            <Stack.Screen
                name="ExamOne"
                component={ExamOne} 
            />
            <Stack.Screen
                name="ExamTwo"
                component={ExamTwo} 
            />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

