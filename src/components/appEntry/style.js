import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 

const styles = StyleSheet.create({
    container:{
        margin: 20,
        backgroundColor: colors.whiteRick,
        shadowColor: colors.blueMorty,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderRadius: 20,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
    input:{
        padding: 20,
        margin:10,
        borderWidth: 1,
        borderRadius: 10, 
               
        
    },
    text:{
        fontSize: fonts.medium,
        color: colors.blueMorty,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        margin: 10,
    },
    textLabel:{
        paddingLeft: 10,
    },
    textForgot:{
        alignSelf: 'flex-end',
        paddingRight: 20,
    }
    
})

export default styles