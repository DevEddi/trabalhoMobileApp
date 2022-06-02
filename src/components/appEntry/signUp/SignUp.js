import {
    Text,
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';
  
import styles from '../style' 
  
export default function SignUp() {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      
      <View>
        <Text style={styles.textLabel}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Rick Sanches"
          keyboardType='default'

        />

        <Text style={styles.textLabel}>Age:</Text>
        <TextInput
          style={styles.input}
          placeholder="28"
          keyboardType='numeric'
          maxLength={2}
        />

        <Text style={styles.textLabel}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="ricksanches@mail.com"
          keyboardType='email-address'
        />

        <Text style={styles.textLabel}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="*****"
          keyboardType='default'
          secureTextEntry={true}        
        />
        </View>
      
    </View>
  );
}


  