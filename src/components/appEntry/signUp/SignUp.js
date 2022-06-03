import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';
  
import styles from '../style' 
  
export default function SignUp(props) {

  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  function new_user(){       
    if (name != null &&  age != null && email != null && password != null){
        props.sendForm()
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View  style={styles.container}>
          <Image
              style={styles.imageRickCrazy}
              source={require('../../../images/logoRickCrazy.png')}
            />  
          <Text style={styles.text}>Sign Up</Text>
            
          <Text style={styles.textLabel}>Name:</Text>
          <View>
          <TextInput
            style={styles.input}
            placeholder="Rick Sanches"
            keyboardType='default'
            value={name}
            onChangeText={setName} 

          />

          <Text style={styles.textLabel}>Age:</Text>
          <TextInput
            style={styles.input}
            placeholder="28"
            keyboardType='numeric'
            maxLength={2}
            value={age}
            onChangeText={setAge} 
          />

          <Text style={styles.textLabel}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="ricksanches@mail.com"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail} 
          />

          <Text style={styles.textLabel}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="*****"
            keyboardType='default'
            secureTextEntry={true}   
            value={password}
            onChangeText={setPassword}      
          />
          <TouchableOpacity
            onPress={new_user}
            style={styles.buttonStyle}
          >           
            <Text style={styles.textButton}>{props.nameTouch}</Text>
          </TouchableOpacity>   
          </View>      
        
      </View>
      </ScrollView> 
    </KeyboardAvoidingView>
  );
}


  