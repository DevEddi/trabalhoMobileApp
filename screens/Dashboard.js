import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExamOne from '../screens/ExamOne'
import ExamTwo from '../screens/ExamTwo'

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ExamOne') {
            iconName = focused
              ? 'location-outline'
              : 'location-outline';
          } else if (route.name === 'ExamTwo') {
            iconName = focused ? 'cash-outline' : 'cash-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="ExamOne"
        component={ExamOne}
        options={{ headerShown: false }} 
      />
      <Tab.Screen
        name="ExamTwo"
        component={ExamTwo}
        options={{ headerShown: false }} 
      />
    </Tab.Navigator>
  );
}

