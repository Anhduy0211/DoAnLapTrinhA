import React,{useState} from 'react';
import { View,ImageBackground } from 'react-native';

import MarioCard from '../components/MarioCard';
import Header from '../components/Header';

import { globalStyles } from '../globalStyle/style';
import {easyImg, playStateImg, hardImg, normalImg} from '../shared/imageURL'


const Quiz1 = ({navigation}) =>{

    const [quiz, setQuiz] = useState([
        {id:0,question:"11111111111asdas11111111111111111sssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"easy"},
        {id:1,question:"2222222222asd22222222sssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"normal"},
        {id:2,question:"33333333333dasdasd3dasd33333333333333333ssssss", answers:["true","flase"],correctAnwer: "true",type:"hard"},
        {id:3,question:"33344444444dasdasasdas44s44ssssssssssssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"hard"},
        {id:4,question:"44444444444dasd5ssssssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:5,question:"3333333333asd3asdasd333333333333sssssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"hard"},
        {id:6,question:"4444444444asd44444444444ssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"normal"},
        {id:7,question:"4444444444dasas4daas4444444444444ssssssss8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:8,question:"33333333333sd333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
        {id:9,question:"asd", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
        
        {id:10,question:"111111asd1111111111111111111111sssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"easy"},
        {id:11,question:"222222adass222222222222sssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"normal"},
        {id:12,question:"3333333dasdas3333333333333333333333ssssss", answers:["true","flase"],correctAnwer: "true",type:"hard"},
        {id:13,question:"333444444asdas4444s44ssssssssssssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"hard"},
        {id:14,question:"44444444dasdasads4445ssssssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:15,question:"333333333sadasd33333333333333sssssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"hard"},
        {id:16,question:"4444444444sdsd44444444444ssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"normal"},
        {id:17,question:"4444444444sdsds44444444444444ssssssss8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:18,question:"3333333333dsds3333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
        {id:19,question:"3333333333dsds3333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},

        {id:20,question:"1111111111111111111111111111sssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"easy"},
        {id:21,question:"222222222222222222sssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"normal"},
        {id:22,question:"33333333333333dsd333333333333333ssssss", answers:["true","flase"],correctAnwer: "true",type:"hard"},
        {id:23,question:"3334444444444s44ssssssssssssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"hard"},
        {id:24,question:"444444444445ssssssssssss",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:25,question:"33333333333333333333333sssssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"hard"},
        {id:26,question:"444444444444444444444ssss",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes",type:"normal"},
        {id:27,question:"444444444444444444444444ssssssss8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are",type:"easy"},
        {id:28,question:"33333333333333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
        {id:29,question:"33333333333333sssssssssss", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping",type:"easy"},
        
    ])


    // Chọn level
    function navigationToScreen2(option){
        if(option ===  "easy"){
            const easyLevel = quiz.filter(quiz => quiz.type == option)
            navigation.push("Quiz2",{quizFromScreen1:easyLevel})
        }
        else if(option ===  "normal"){
            const normalLevel = quiz.filter(quiz => quiz.type == option)
            navigation.push("Quiz2",{quizFromScreen1:normalLevel})
        }
        else if(option ===  "hard"){
            const hardLevel = quiz.filter(quiz => quiz.type == option)
            navigation.push("Quiz2",{quizFromScreen1:hardLevel})
        }
    }

    // Render UI
    return(
        <View style={globalStyles.container}>
            <Header title="Quiz" homeHeader={false} />
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View style={{flex:1,marginTop:55 }}>
                    <MarioCard onPress={()=>navigationToScreen2("easy")} color={"#00981d"} title={"easy"} imgSrc={easyImg}/>
                    <MarioCard onPress={()=>navigationToScreen2("normal")} color={"#d89e33"} title={"normal"} imgSrc={normalImg}/>
                    <MarioCard onPress={()=>navigationToScreen2("hard")} color={"#f90908"} title={"hard"} imgSrc={hardImg}/>
                </View>
            </ImageBackground>
        </View>
    )
}




export default Quiz1