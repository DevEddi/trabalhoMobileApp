import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Home({navigation}) {
  return (
    <View >
      <Text>Home</Text>
      <Button
        title='Sign In'
        onPress={() => navigation.navigate('SignIn')}
      />
     
      
    </View>
  );
}

