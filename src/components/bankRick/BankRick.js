import React, { useState } from 'react'
import { 
  View,
  Text,
  Image,
  Button
} from 'react-native'
import styles from './style'

import FormAccount from '../forms/formAccount/FormAccount';


export default function BankRick() {    
  
  return (
    <View style={styles.container}>
      <FormAccount/>
    </View>
  );
}