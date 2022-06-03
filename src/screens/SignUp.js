import {View, Text } from 'react-native';


import ScreensStyles from '../styles/screensStyles/ScreensStyles'
import SignUpForm from '../components/appEntry/signUp/SignUp';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import TitleHome from '../components/title/titleHome/TitleHome';

export default function SignUp( { navigation } ) {
  return (
    <View style={ScreensStyles.containerSignUp}>
        <View style={ScreensStyles.signUpComponents}>
          <TitleHome titlehome='Sign Up'></TitleHome>
        </View>
        <SignUpForm
          sendForm = {() => navigation.navigate('Dashboard')}
          nameTouch = 'Sign Up'  
        
        /> 
             
    </View>
  );
}

