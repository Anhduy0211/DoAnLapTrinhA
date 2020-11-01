import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FlatButton = ({onPress,style,title,pos})=>{
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
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style= {{  fontSize:25, color:"white",marginVertical:20,fontWeight:"300"}}>{title}</Text>
        </TouchableOpacity>
    );
}   
export default FlatButton;