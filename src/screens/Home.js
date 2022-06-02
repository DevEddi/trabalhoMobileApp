import {View } from 'react-native';

import ButtonSmall from '../components/buttons/buttonSmall/ButtonSmall';
import ImageHome from '../components/imageComponents/imageHome/ImageHome';
import ScreensStyles from '../styles/screensStyles/ScreensStyles'

export default function Home({navigation}) {
  return (
    <View style={ScreensStyles.containerHome}>     

      <ImageHome
        
      />     
    
      <ButtonSmall
        style={ScreensStyles.containerHome}          
        pressFunc = {() => navigation.navigate('AppEntry')}
        nameToucha = 'Next'      
      />
     
      
    </View>
  );
}

