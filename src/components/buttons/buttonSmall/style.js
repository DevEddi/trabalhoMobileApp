import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../styles'; 

const styles = StyleSheet.create({
    viewSmallButton:{
        alignItems: 'center',
    },
    smallButton:{
        padding: 2,
        margin: 6,
        backgroundColor: colors.blueMorty,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        width: '50%',
        
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