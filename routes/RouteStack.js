import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function RouteStack() {
  return (    
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Cadastro" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

