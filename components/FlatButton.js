import React from 'react';
import { Text, TouchableOpacity,StyleSheet,View,Image } from 'react-native';


const FlatButton = ({onPress,title,positon})=>{
    // Đánh số thứ tự câu
    const getPosition= (pos)=>{
        if(pos==0)
            return "A";
        if(pos==1)
            return "B"
        if(pos==2)
            return "C"
        if(pos==3)
            return "D"
    }

    const getImgSource= (pos)=>{
        if(pos==0)
            return require('../shared/images/Hat2.png');
        if(pos==1)
            return require('../shared/images/Hat1.png');
        if(pos==2)
            return require('../shared/images/Hat3.png');
        if(pos==3)
            return require('../shared/images/Hat4.png');
    }

    const getColor= (pos)=>{
        if(pos==0)
            return "#ff1d1f";
        if(pos==1)
            return "#39b54a";
        if(pos==2)
            return "#ffcc02";
        if(pos==3)
            return "#511c8e";
    }


    const getLightColor= (pos)=>{
        if(pos==0)
            return "#fcd2d2";
        if(pos==1)
            return "#daf1dd";
        if(pos==2)
            return "#ffffbd";
        if(pos==3)
            return "#e7dee0";
    }
    
    //------------------------------------------------Render UI-------------------------------------------------------------//

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={{
                width:'100%',
                height:'100%',
                backgroundColor:'white',
                position:'absolute',
                top:0,
                left:0,
                borderWidth:5,
                borderColor:getColor(positon),
                borderRadius:15,
                opacity:.9,
            }}/> 
            <View style={{...styles.buttonContainer}}>
                <Text style= {{...styles.title,...{color:getColor(positon)}}}>{title}</Text>

                <View style={{
                    width:50,
                    height:50,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:40,
                    borderColor:getColor(positon),
                    borderWidth:3,
                    opacity:.85,
                }}>
                    <Image style={{
                        width:35,
                        height:35,
                    }} source={getImgSource(positon)} />
                </View>

            </View>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:12,
    },

    title:{  
        fontSize:20, 
        color:"white",
        flex:1
    },

    button:{
        marginTop:4,
        position:'relative'
    },
   
})
export default FlatButton;