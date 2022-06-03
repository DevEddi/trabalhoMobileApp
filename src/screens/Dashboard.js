import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
              ? 'self_improvement'
              : 'self_improvement';
          } else if (route.name === 'ExamTwo') {
            iconName = focused ? 'account_balance' : 'account_balance';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#013A71',
        tabBarInactiveTintColor: '#D2E054',
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

