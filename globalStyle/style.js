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
        textAlign:"center",
        marginHorizontal:15,
        borderRadius:10,
    },
    question:{
        fontSize:25,
        textAlign:"center",
        fontStyle:"italic",
        marginHorizontal:10,
        height:100,
        marginTop:100,
    },

    score:{
        color:"salmon",
        fontSize:25,
        textAlign:"center",
        fontWeight:"800",
        marginTop:50,
    },

    backgroundImage: {
        flex: 1,
        resizeMode:'center',
        // justifyContent: "center"
      },

    container:{
        flex:1,
        // alignItems:"center",
        // paddingHorizontal:"auto"
    }
})
