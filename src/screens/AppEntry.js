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
  

  const [entrada, setEntrada] = useState(Login)  

  function pressLogin(){
    setEntrada(Login)

  }
  function pressSignUp(){
    setEntrada(SignUp)
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
      <View >
        {entrada}
        
      </View>
     
      
    </View>
  );
}

