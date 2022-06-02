import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 


const styles = StyleSheet.create({    
    buttonsRow:{          
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',       
    },
    image:{
        width: 400,
        height: 400,
    },
    text:{ 
        fontSize: fonts.medium, 
        margin: 20,
        padding: 10,     
    },
    
})

export default styles