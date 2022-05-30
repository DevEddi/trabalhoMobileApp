import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'

import imagemBalao from 'app-prova/src/image/balloon_red.jpg'
import estourado from 'app-prova/src/image/popped_balloon_red.jpg'

import styles from './style'
import Botao from '../Botao'

export default function BalloonImage() {
   

  let frases = [' “Nenhum homem será um grande líder se quiser fazer tudo sozinho ou se quiser levar todo o crédito por fazer isso” – Andrew Carnegi', '“Bom mesmo é ir à luta com determinação, abraçar a vida com paixão, perder com classe e vencer com ousadia, porque o mundo pertence a quem se atreve e a vida é muito curta, para ser insignificante” — Charlie Chaplin', '“Só existem dois dias do ano em que você não pode fazer nada: um se chama ontem e outro amanhã” – Dalai Lama']
  
  const [estoura, setEstoura] = useState(imagemBalao)
  const [frase, setFrase] = useState([])
  //const [emocoes, setEmocoes] = useState(imagens.)  
  
  const enviarBalao = () => {    
    setFrase(frases[Math.floor(Math.random()*frases.length)])
    setEstoura(estourado)
  }
  
  const resetar = () => {
    setFrase([])
    setEstoura(imagemBalao)
  }
  
  return (
    <View style={styles.boxImagem}>
      <View style={styles.conteudoImagem}>
        <Image style={styles.balao} source={estoura}  />
        <Text style={styles.textoSupresa} >{frase}</Text>
        <Botao
          chama = {enviarBalao}
          nome = 'Enviar'          
        />
        <Botao
          chama = {resetar}
          nome = 'Resetar'          
        />
      </View>
    </View>
  );
}