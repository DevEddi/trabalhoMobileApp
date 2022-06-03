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
        justifyContent: 'center',  
        backgroundColor: colors.greenPortalThree,
    },
    containerSignUp:{
        flex: 1, 
        justifyContent: 'center',  
        backgroundColor: colors.greenPortalThree,

    },
    signUpComponents:{
    },
    loginComponents:{
        
    },
    buttomHeader:{
        marginRight: 20,
    }
})

export default styles