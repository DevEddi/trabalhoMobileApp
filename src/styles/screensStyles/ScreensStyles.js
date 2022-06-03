import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 


const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.greenPortalThree,       
    },
    containerLogin:{ 
        flex: 1,
        justifyContent: 'space-around',
    },
    buttonsLoginRow:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerExamOne:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.blueMorty,
        alignItems: 'center',        
    },
    containerExamTwo:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',   
        backgroundColor: colors.blueMorty,
    },
    containerLogin:{
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',   
        backgroundColor: colors.whiteRick
    },
    containerSignUp:{
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.whiteRick  
    },
    signUpComponents:{
        alignSelf: 'flex-start',
        backgroundColor: colors.greenPortal,
        width: '50%',
        height: 100,
        borderBottomRightRadius: 100,
    },
    loginComponents:{
        alignSelf: 'flex-start',
        backgroundColor: colors.greenPortal,
        width: '50%',
        height: 100,
        borderBottomRightRadius: 100,
    }
})

export default styles