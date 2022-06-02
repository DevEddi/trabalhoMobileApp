import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewSmallButton:{
        alignItems: 'center',
    },
    smallButton:{
        padding: 20,
        margin: 6,
        backgroundColor: colors.titleRick,
        borderRadius: 30,
        shadowColor: colors.greenPortalThree,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        width: '100%',
        
    },
    textSmallButton:{
        fontSize: fonts.large,
        color: colors.whiteRick,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
})

export default styles