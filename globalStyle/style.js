import {StyleSheet} from 'react-native'; 

export const globalStyles = StyleSheet.create({
    quizText:{
        color:"salmon",
        fontSize:25,
        textAlign:"center",
        fontWeight:"800",
    },
    quizContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    button:{
        backgroundColor:"salmon",
        marginTop:5,
        marginHorizontal:15,
        borderRadius:10,
    },
    backgroundImage: {
        flex:1,
        resizeMode:'contain',
      },

    container:{
        flex:1,
    }
})
