import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Dashboard({ navigation }) {
  return (
    <View >
      <Text>Dashboard</Text>
      <Button
      title='Exam One'
      onPress={() => navigation.navigate('ExamOne')}
      />
      <Button
      title='Exam Two'
      onPress={() => navigation.navigate('ExamTwo')}
      />
      
      
    </View>
  );
}

