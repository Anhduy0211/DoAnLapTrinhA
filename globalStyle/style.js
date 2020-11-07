import {StyleSheet} from 'react-native'; 

export const globalStyles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff',
        letterSpacing:1,
    },
    button:{
        backgroundColor:"salmon",
        marginTop:5,
        marginHorizontal:15,
        borderRadius:10,
    },
    score:{
        color:"salmon",
        fontSize:25,
        textAlign:"center",
        fontWeight:"800",
    },

    backgroundImage: {
        flex:1,
        resizeMode:'contain',
      },

    container:{
        flex:1,
    }
})
