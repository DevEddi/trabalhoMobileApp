import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import Login from '../components/appEntry/login/Login';
import SignUp from '../components/appEntry/signUp/SignUp';
import ButtonMedium from '../components/buttons/buttonMedium/ButtonMedium'
import ScreensStyles from '../styles/screensStyles/ScreensStyles'


export default function AppEntry({ navigation }) {
  

  const [viewEnable, setViewEnable] = useState(Login)  

  function pressLogin(){
    setViewEnable(Login)

  }
  function pressSignUp(){
    setViewEnable(SignUp)
  }

  return (
    <View style={ScreensStyles.containerLogin}>

      <ButtonSmall
        pressFunc = {() => navigation.navigate('Dashboard')}
        nameToucha = 'Dashboard'      
      />
      <View>
        {viewEnable}        
      </View>
      <View style={ScreensStyles.buttonsLoginRow}>
        <ButtonMedium          
          pressFunc = {() => pressLogin()}
          nameToucha = 'Login'         
        />
        <ButtonMedium
          pressFunc = {() => pressSignUp()}
          nameToucha = 'Sign Up'         
        />
      </View>
      
     
      
    </View>
  );
}

