import {View, Text } from 'react-native';

import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import LoginForm from '../components/appEntry/login/Login';
import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';


export default function Login({navigation}) {
  return (
    <View style={ScreensStyles.containerHome}>     

        <Text>Login</Text>   
        <LoginForm/>
        <ButtonSmall
        pressFunc = {() => navigation.navigate('Dashboard')}
        nameToucha = 'Dashboard'      
      />  
    </View>
  );
}

