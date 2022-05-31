import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import Login from '../components/appEntry/login/Login';
import SignUp from '../components/appEntry/signUp/SignUp';

export default function AppEntry({ navigation }) {
  

  const [viewEnable, setViewEnable] = useState(Login)  

  function pressLogin(){
    setViewEnable(Login)

  }
  function pressSignUp(){
    setViewEnable(SignUp)
  }

  return (
    <View >
      <Text>App Entry</Text>
      
      <ButtonSmall
        pressFunc = {() => navigation.navigate('Dashboard')}
        nameToucha = 'Dashboard'      
      />
      <Button
        title='LOGIN'
        onPress={() => pressLogin()}
      />
      <Button
        title='SIGNUP'
        onPress={() => pressSignUp()}
      />
      <View>
        {viewEnable}        
      </View>
     
      
    </View>
  );
}

