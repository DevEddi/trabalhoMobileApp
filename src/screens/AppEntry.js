import {
  Text,
  View,
} from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';

export default function AppEntry({ navigation }) {
  return (
    <View >
      <Text>Sign In</Text>
      
      <ButtonSmall
        pressFunc = {() => navigation.navigate('Dashboard')}
        nameToucha = 'Dashboard'      
      />
      
    </View>
  );
}

