import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';

import ScreensStyles from '../styles/screensStyles/ScreensStyles'

export default function Home({navigation}) {
  return (
    <View style={ScreensStyles.containerHome}>        
      <View style={ScreensStyles.containerHome}>
        <ButtonSmall          
          pressFunc = {() => navigation.navigate('AppEntry')}
          nameToucha = 'App Entry'      
        />
      </View>
     
      
    </View>
  );
}

