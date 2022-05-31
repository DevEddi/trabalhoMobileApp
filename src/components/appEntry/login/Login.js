import {
    Text,
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';
  
  
  export default function Login() {
    return (
      <View >
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"

        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          
        />
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });