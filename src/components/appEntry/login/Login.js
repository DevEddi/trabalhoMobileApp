import {
    Text,
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';

import styles from '../style' 
import ButtonMedium from '../../buttons/buttonMedium/ButtonMedium';

export default function Login() {
  return (
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
        
      </View>
      
    </View>
  );
}

