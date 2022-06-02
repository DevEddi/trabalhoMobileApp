import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewMediumButton:{
    },
    mediumButton:{
        padding: 20,
        backgroundColor: colors.titleRick,
        shadowColor: colors.greenPortalThree,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        
    },
    textMediumButton:{
        fontSize: fonts.medium,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export default styles