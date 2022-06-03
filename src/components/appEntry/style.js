import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.greenPortalTwo,
        shadowColor: colors.blueMorty,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        borderTopLeftRadius: 100,
        borderTopRightRadius:100,
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40,
        paddingTop: 70,
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
    },
    buttonStyle:{
        alignSelf: "center",
        padding: 8,
        margin: 3,
        backgroundColor: colors.titleRick,
        borderRadius: 10,
        shadowColor: colors.greenPortalThree,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        width: '90%',
    },
    textButton:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
    
})

export default styles