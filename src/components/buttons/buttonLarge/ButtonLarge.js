import React, {useState} from 'react'
import { View, Button, Text, Image, TouchableOpacity} from 'react-native'

import styles from './style'

export default function ButtonLarge(props) {
 
  return (
    <View>     
      
      <TouchableOpacity
        onPress={props.pressFunc}      
      >
        <Text>{props.nameToucha}</Text>
      </TouchableOpacity>
      
    </View>
  );
}