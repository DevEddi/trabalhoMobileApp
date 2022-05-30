import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function SignIn({ navigation }) {
  return (
    <View >
      <Text>Sign In</Text>
      <Button
        title='Dashboard'
        onPress={() => navigation.navigate('Dashboard')}
      />
      
    </View>
  );
}

