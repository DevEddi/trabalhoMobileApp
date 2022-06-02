import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewMediumButton:{
        
    },
    mediumButton:{
        padding: 2,
        margin: 6,
        backgroundColor: colors.yellowMorty,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    textMediumButton:{
        fontSize: fonts.medium,
        color: colors.blackRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export default styles