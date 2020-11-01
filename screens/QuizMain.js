import React, { useState,useEffect } from 'react';
import { ImageBackground, Text,View,StyleSheet,Image, Button} from 'react-native';

import { Card } from 'react-native-elements';

import Box from '../components/Box'
import Quiz from './Quiz';

import { mushroomImg, quizBg } from '../shared/imageURL';
import {globalStyles} from '../globalStyle/style';

const QuizMain =({navigation}) => {
    //Bộ câu hỏi
    //----------------------------------------Initial State--------------------------------------------------------// 
    const [quiz, setQuiz] = useState([
        {id:0,question:"1",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:1,question:"2",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:2,question:"3", answers:["true","flase"],correctAnwer: "true"},
        {id:3,question:"4",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:4,question:"5",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:5,question:"6", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
        {id:6,question:"7",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:7,question:"8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:8,question:"9", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
    ])

    const [quizColl, setQuizColl] = useState([])

    const [start, setStart] = useState(true)
    const [end, setEnd] = useState(false)

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
        setQuizColl(arr)
        setStart(false)
        setEnd(true)
    }

    //-----------------------------------End Execute Method------------------------------------------------------//   
     

    //----------------------------------------Return UI----------------------------------------------------------// 
    if(start == true)
    return(
        <View style={globalStyles.container}>
            <ImageBackground source={{uri:quizBg}} style={globalStyles.backgroundImage}>
                <Card> 
                    <View>
                        <Text style={styles.choose}>How many quiz do you want</Text>
                    </View>
                    <View style={styles.quizCon}>
                        <Box name='minus' onPress={()=>getQuizQuantities("-")} />
                        <ImageBackground style={styles.mushroom} source={{uri:mushroomImg}}>
                            <Text style={{...styles.choose,marginTop:4}}>{quantiies}</Text>
                        </ImageBackground>
                        <Box name='plus' onPress={()=>getQuizQuantities("+")} />
                    </View>
                    <Button title="Play" onPress={sendColl}/>
                </Card>
            </ImageBackground>
        </View>
    )
    else if (end == true)
    return(
        <Quiz navigation={navigation} quizColl={quizColl}/>
    )
    else
    return(
        <View/>
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
    },
    quizCon:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:30,
    },
})
export default QuizMain;
