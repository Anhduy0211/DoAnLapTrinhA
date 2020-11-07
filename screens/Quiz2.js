import React, { useState,useEffect } from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Button} from 'react-native';

import { Card } from 'react-native-elements';

import Box from '../components/Box'
import Header from '../components/Header';
import {globalStyles} from '../globalStyle/style';

import { mushroomImg, playStateImg } from '../shared/imageURL';

const QuizMain =({navigation}) => {
    //----------------------------------------Initial State--------------------------------------------------------// 
    const [quiz, setQuiz] = useState([
        {id:0,question:"1111111111111111111111111111sssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"easy"},
        {id:1,question:"222222222222222222sssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"normal"},
        {id:2,question:"33333333333333333333333333333ssssss", answers:["true","flase"],correctAnwer: "true",type:"hard"},
        {id:3,question:"3334444444444s44ssssssssssssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"hard"},
        {id:4,question:"444444444445ssssssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:5,question:"33333333333333333333333sssssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"hard"},
        {id:6,question:"444444444444444444444ssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"normal"},
        {id:7,question:"444444444444444444444444ssssssss8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:8,question:"33333333333333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
    ])

    const [quizColl, setQuizColl] = useState([])

    const [quantiies, setQuantiies] = useState(5)

    //----------------------------------------End Init State-------------------------------------------------------// 

    //---------------------------------------Execute Method------------------------------------------------------//    

    const getQuizQuantities =(val)=>{
        if(val==="+" && quantiies<10){
            setQuantiies(quantiies+1)
        }
        if(val==="-" && quantiies>5){
            setQuantiies(quantiies-1)
        }
    }
    
    const sendColl = ()=>{
        let arr = []
        let arrTempt = quiz;
        let y = 0;
        for (let i = arrTempt.length-1 ; i >-1 ; i--){
            if(y==quantiies){break;}

            let random = Math.floor(Math.random()*(i+1));
            if(random==i+1){
                random = Math.floor(Math.random()*(i+1));
            }
            arr.push(arrTempt[random])

            let tempt = arrTempt.filter( x => x != arrTempt[random])
            arrTempt = tempt;
            y++;
        }
        return arr;
    }
    function nav(){
        let value = sendColl();
        navigation.push("Quiz3",{
            quizCollections:value
        })
    }

    //-----------------------------------End Execute Method------------------------------------------------------//   
     

    //----------------------------------------Return UI----------------------------------------------------------// 
    return(
        <View style={{flex:1}}>
            <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <Card> 
                    <View>
                        <Text style={styles.choose}>Choose the number of questions</Text>
                    </View>
                    <View style={styles.quizCon}>
                        <Box name='minus' onPress={()=>getQuizQuantities("-")} />
                        <ImageBackground style={styles.mushroom} source={{uri:mushroomImg}}>
                            <Text style={{...styles.choose,marginTop:4}}>{quantiies}</Text>
                        </ImageBackground>
                        <Box name='plus' onPress={()=>getQuizQuantities("+")} />
                    </View>
                    <Button title="Play" onPress={nav}/>
                </Card>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    mushroom:{
        width:80,
        height:80,
        alignItems:'center',
        marginHorizontal:15,
    },
    choose:{
        fontWeight:'bold',
        color:'#ec2d36',
        fontSize:23,
        textTransform:'uppercase',
    },
    quizCon:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30,
    },
})
export default QuizMain;
