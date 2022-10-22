import React, { useState} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView

  } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';
import { MotiView } from 'moti';

import ScreensStyles from '../styles/screensStyles/ScreensStyles'


export default function Login({navigation}) {
  const [email, setEmail] = useState(null)  
  const [password, setPassword] = useState(null)

  function acessUser(){       
    if (email != null && password != null){
        let emailUser = 'rick@gmail.com'
        let passwordUser = 123456
        if(email == emailUser && password == passwordUser){
          props.sendForm()
        }
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
      <ScrollView>
          <View style={ScreensStyles.container}>
            <MotiView
              from={{
                scale: 0,
                translateX: -10,
                translateY: -20,
              }}
              animate={{
                scale: 1,
                translateX: 0,
                translateY: 0,
      
              }}
              transition={{
                type: 'spring',
                duration: 10000,
              }}
            
            >
              <Image
                style={ScreensStyles.imageRick}
                source={require('../images/logoRickNormal.png')}
              /> 
            </MotiView>
          <Text style={ScreensStyles.text}>Login</Text>
          <MotiView
            from={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
    
            }}
            transition={{
              type: 'timing',
              duration: 3000,
            }}
              
          >
            <Text style={ScreensStyles.textLabel}>E-mail:</Text>
            <TextInput
              style={ScreensStyles.input}
              placeholder="ricksanches@mail.com"
              keyboardType='email-address'    
              value={email}
              onChangeText={setEmail}     

            />
            <Text style={ScreensStyles.textLabel}>Password:</Text>
            <TextInput
              style={ScreensStyles.input}
              placeholder="*******"
              keyboardType='default'
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              
            />
            <Text style={ScreensStyles.textForgot}>Forgot password ?</Text>
            <TouchableOpacity
              style={ScreensStyles.buttonStyle}
            >           
              
            </TouchableOpacity>
          </MotiView>      
        </View>
      </ScrollView>      
    </KeyboardAvoidingView>
  );
}


