import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native'
import ExamOne from './ExamOne'
import ExamTwo from './ExamTwo'
import ScreensStyles from '../styles/screensStyles/ScreensStyles';
const Tab = createBottomTabNavigator();

export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator       
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tips') {
            iconName = focused
              ? 'ear-outline'
              : 'ear-outline';
          } else if (route.name === 'Bank Morty') {
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
        name="Tips"
        component={ExamOne}
        options={{ headerShown: true,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Sair"
              color="#f11"
              style={ScreensStyles.buttomHeader}
            />
          ),
        }} 
      />
      <Tab.Screen
        name="Bank Morty"
        component={ExamTwo}
        options={{ headerShown: true,
          headerTitle: 'Dashboard',
          headerStyle: {
            backgroundColor: '#013A71',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          style: { 
            backgroundColor: '#fff',
            shadowColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
                height: 0,
            }
           },
          
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Home')}
              title="Sair"
              color="#f11"
              style={ScreensStyles.buttomHeader}
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

