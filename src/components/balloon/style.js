import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
        boxImagem:{
            width: '100%',
            height: '90%',
            bottom: 0,
            backgroundColor: '#ffffff',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,             
            marginTop:30,
        },
        balao:{
            width: 200,
            height: 300,
        },
        conteudoImagem:{
            width: '100%',
            height: 'auto',
            padding: 10,            
        },
        textoSupresa:{
            color: '#0081cf',
            fontSize: 18,
            paddingLeft: 10,
            paddingBottom: 30,
        },
        button:{
            width: '90%',
            borderRadius: 50,
            backgroundColor: '#f6f6f6',
            height: 40,
            margin: 12,
            paddingLeft: 10,
        }
    
})

export default styles