import React, { useState } from 'react'
import { 
  View,
  Text,
  Image,
  Button
} from 'react-native'

import ButtonMedium from '../buttons/buttonMedium/ButtonMedium'
//import imagemBalao from 'app-prova/src/image/balloon_red.jpg'
//import estourado from 'app-prova/src/image/popped_balloon_red.jpg'

//import styles from './style'



export default function RickPhrases() {    
  let phrases = ['Se você brincar um pouco com as palavras, consegue fazer qualquer coisa soar bem (ou mal).','Viver é arriscar tudo. Caso contrário você é apenas um pedaço inerte de moléculas montadas aleatoriamente à deriva onde o universo te sopra.','“Ninguém existe de propósito, ninguém pertence a lugar nenhum.', 'O amor é apenas uma reação química.', 'Planejar o fracasso é ainda mais idiota do que simplesmente planejar.', 'Casamentos são como velórios com bolo.', 'Ninguém existe de propósito. Ninguém pertence a qualquer lugar. Todo mundo vai morrer... Venha assistir TV', 'Eu vou te dizer o que eu acho das escolas, Jerry: É uma perda de tempo (...) Escola não é um lugar para pessoas inteligentes.', 'Qual a chance de ser legítimo e não uma mentira que contamos a nós mesmo porque temos medo de morrer sozinhos?', 'A vida é esforço e só vou parar quando eu morrer!']

  //const [estoura, setEstoura] = useState(imagemBalao)
  const [phrase, setPhrase] = useState([])
  //const [emocoes, setEmocoes] = useState(imagens.)  

  const sendPhrase = () => {    
    setPhrase(phrases[Math.floor(Math.random()*phrases.length)])
    //setEstoura(estourado)
  }

  const resetPhrase = () => {
    setPhrase([])
    //setEstoura(imagemBalao)
  }
  return (
    <View >
      <View >
        
        <Text>{phrase}</Text>
        <ButtonMedium
          pressButton = {sendPhrase}
          name = 'Send'
        
        />
        <ButtonMedium
          pressButton = {resetPhrase}
          name = 'Reset'
        
        />        
      </View>
    </View>
  );
}