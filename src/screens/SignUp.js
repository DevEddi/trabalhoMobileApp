import {View, Text } from 'react-native';


import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import SignUpForm from '../components/appEntry/signUp/SignUp';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';

export default function SignUp( { navigation } ) {
  return (
    <View style={ScreensStyles.containerHome}>   
        <Text>Sign Up</Text> 
        <SignUpForm/> 
        <ButtonSmall
        pressFunc = {() => navigation.navigate('Dashboard')}
        nameToucha = 'Dashboard'      
      />      
    </View>
  );
}

