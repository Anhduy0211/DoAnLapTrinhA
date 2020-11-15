import React, { useEffect, useState } from 'react';
import {Text,View,ImageBackground,Image,StyleSheet,Dimensions} from 'react-native';

import Header from '../components/Header';

import {logo, playStateImg, quizStartImg } from '../shared/imageURL';


import { globalStyles } from '../globalStyle/style';

const screenWidth = Dimensions.get("window").width;
const QuizStart = ()=>{
    const getColor= (pos)=>{
        if(pos==0)
            return "#e62311";
        if(pos==1)
            return "#43af35";
        if(pos==2)
            return "#0026c9";
        if(pos==3)
            return "#fccf00";
    }
   
    return(
        <View style={globalStyles.container}>
            <Header title={"Quiz"} homeHeader={false}/>
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View style={styles.quizContainer}>
                    <Image  style={{width:screenWidth,height:100,resizeMode:'contain',marginTop:10}}  source={{uri:logo}} />
                    <Image style={{width:screenWidth,height:250,resizeMode:'contain',marginTop:20}} source={{uri:quizStartImg}} />
                    <View style={{paddingHorizontal:25,}}>
                        <Text style={{ fontSize:25,fontWeight:"bold" }}>Wellcome to the Game</Text>
                    </View>
                  
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:"bold",
    },
    quizContainer:{
        flex:1,
        alignItems:'center',
    },
    
})

export default QuizStart

