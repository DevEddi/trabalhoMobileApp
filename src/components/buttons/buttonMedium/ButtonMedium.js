import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'

//import styles from './style'

export default function ButtonMedium(props) {
 
  return (
    <View >      
      <Button        
        onPress={props.pressButton}
        title={props.name}
      />
    </View>
  );
}