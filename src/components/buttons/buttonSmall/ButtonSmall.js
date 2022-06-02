import React, {useState} from 'react'
import { View, Button, Text, Image, TouchableOpacity} from 'react-native'

import styles from './style'

export default function ButtonSmall(props) {
 
  return (
    <View style={styles.viewSmallButton}>    
      
      <TouchableOpacity
        style={styles.smallButton}
        onPress={props.pressFunc}      
      >
        <Text style={styles.textSmallButton}>{props.nameToucha}</Text>
      </TouchableOpacity>
      
    </View>
  );
}