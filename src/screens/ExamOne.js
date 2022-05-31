import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RickPhrases from '../components/rickPhrases/RickPhrases';

export default function ExamOne() {
  return (
    <View >
      <Text>ExamOne</Text>
      <RickPhrases/>
    </View>
  );
}

