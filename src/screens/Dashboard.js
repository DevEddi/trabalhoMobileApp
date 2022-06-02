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

          if (route.name === 'ExamOne') {
            iconName = focused
              ? 'flask-outline'
              : 'flask-outline';
          } else if (route.name === 'ExamTwo') {
            iconName = focused ? 'cash-outline' : 'cash-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#013A71',
        tabBarInactiveTintColor: '#D2E054',
      })}
    >
      <Tab.Screen 
        name="Rick Phrases"
        component={ExamOne}
        options={{ headerShown: false }} 
      />
      <Tab.Screen
        name="Bank Rick"
        component={ExamTwo}
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

