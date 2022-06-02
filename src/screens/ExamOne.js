import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import RickPhrases from '../components/rickPhrases/RickPhrases';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'

export default function ExamOne() {
  return (
    <View style={ScreensStyles.containerExamOne}>
      <RickPhrases/>
    </View>
  );
}

