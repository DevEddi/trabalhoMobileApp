import {View, Text } from 'react-native';

import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import LoginForm from '../components/appEntry/login/Login';
import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import TitleHome from '../components/title/titleHome/TitleHome';

export default function Login({navigation}) {
  return (
    <View style={ScreensStyles.containerLogin}>  
        
        <View>
          <LoginForm
              sendForm = {() => navigation.navigate('Dashboard')}
              nameTouch = 'Login'  
          />  
        </View> 
        
    </View>
  );
}

