import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../styles'; 


const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: colors.greenPortalThree,
        alignItems: 'center',        
    },
    componentsHome:{  
    },
    containerLogin:{ 
        flex: 1,             
        backgroundColor: colors.greenPortalThree,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    buttonsLoginRow:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,   
    },
    
})

export default styles