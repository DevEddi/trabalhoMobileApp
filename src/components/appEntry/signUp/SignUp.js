import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';
  
import styles from '../style' 
  
export default function SignUp(props) {
  return (
    <KeyboardAvoidingView>

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


  