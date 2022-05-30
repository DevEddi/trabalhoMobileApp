import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'

import styles from './style'

export default function Botao(props) {
 
  return (
    <View style = {styles.botaoBox}>      
      <Button
        
        onPress={props.chama}
        title={props.nome}
      />
    </View>
  );
}