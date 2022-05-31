import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';

export default function Home({navigation}) {
  return (
    <View >
      <Text>Home</Text>
      
      <ButtonSmall
        pressFunc = {() => navigation.navigate('AppEntry')}
        nameToucha = 'App Entry'      
      />
     
      
    </View>
  );
}

