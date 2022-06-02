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
    componentsExamOne:{  
    },
    rowExamOne:{  
    },
    containerExamTwo:{
        flex: 1,
        margin: 10, 
        flexDirection: 'column',
        justifyContent: 'space-around',   
    },
    componentsExamTwo:{  
    },
    rowExamOne:{  
    },
})

export default styles