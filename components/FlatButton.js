import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

const FlatButton = ({onPress,title,pos})=>{
    //Đánh số thứ tự câu
    // const getPosition= (pos)=>{
    //     if(pos==0)
    //         return "A";
    //     if(pos==1)
    //         return "B"
    //     if(pos==2)
    //         return "C"
    //     if(pos==3)
    //         return "D"
    // }
    
    //------------------------------------------------Render UI-------------------------------------------------------------//

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style= {{  
                fontSize:25, 
                color:"white",
                fontWeight:"300",
                paddingVertical:15,
                paddingHorizontal:20,
                }}>{title}</Text>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
  
    button:{
        backgroundColor:"salmon",
        marginTop:10,
        marginHorizontal:15,
        borderRadius:10,
        shadowOffset:{width:10 ,height:3},
        shadowColor:"black",
        shadowOpacity:.7,
    },
   
})
export default FlatButton;