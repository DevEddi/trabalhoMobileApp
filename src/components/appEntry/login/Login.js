import {
    Text,
    View,
    TextInput,
    TouchableOpacity
  } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';

import styles from '../style' 

export default function Login(props) {
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <View>
        <Text style={styles.textLabel}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="ricksanches@mail.com"
          keyboardType='email-address'        

        />
        <Text style={styles.textLabel}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          keyboardType='default'
          secureTextEntry={true}
          
        />
        <Text style={styles.textForgot}>Forgot password ?</Text>
        <TouchableOpacity
          onPress={props.sendForm}
          style={styles.buttonStyle}
        >           
          <Text style={styles.textButton}>{props.nameTouch}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </KeyboardAvoidingView>
  );
}

