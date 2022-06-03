import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExamOne from './ExamOne'
import ExamTwo from './ExamTwo'

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator       
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'RickPhrases') {
            iconName = focused
              ? 'ear-outline'
              : 'ear-outline';
          } else if (route.name === 'BankRick') {
            iconName = focused ? 'home-outline' : 'home-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#013A71',
        tabBarInactiveTintColor: 'gray',
        
      })}
    >
      <Tab.Screen 
        name="RickPhrases"
        component={ExamOne}
        options={{ headerShown: false }} 
      />
      <Tab.Screen
        name="BankRick"
        component={ExamTwo}
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

