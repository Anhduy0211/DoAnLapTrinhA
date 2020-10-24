import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FlatButton = ({onPress,style,title})=>{
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text style= {{  fontSize:25, color:"white",marginVertical:20,fontWeight:300}}>{title}</Text>
        </TouchableOpacity>
    );
}   

export default FlatButton;