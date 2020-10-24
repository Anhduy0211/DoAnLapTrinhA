import React, { useState,useEffect } from 'react';
import {Text,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FlatButton from '../components/FlatButton';

import {globalStyles} from '../globalStyle/style';

const Quiz =() => {
    //init state
    const [quiz, setQuiz] = useState([
        {id:0,question:"We have two ..... We see with them.",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:1,question:"There ..... many books on the table.",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:2,question:"1111111", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
        {id:4,question:"2222222222",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:5,question:"33333",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:6,question:"4444444444444444", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
        {id:7,question:"1231231231",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:8,question:"99999999999999999",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        {id:9,question:"8888888888888", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
    ])

    const [total, setTotal] = useState(quiz.length);
    const [point, setPoint] = useState(0);

    const [ramdom,setRamdom] = useState(Math.floor(Math.random()*quiz.length));
    const [currentQuiz, setCurrentQuiz] = useState(quiz[ramdom]);

    const [answers, setAnswers] = useState(currentQuiz.answers)

    useEffect(() => {
        setRamdom(Math.floor(Math.random()*quiz.length));
        let arr = []
        let arrTempt = answers;
        for (let i = arrTempt.length-1 ; i >-1 ; i--){
            let ramdom = Math.floor(Math.random()*i);
            arr.push(arrTempt[ramdom])
            let tempt = arrTempt.filter( x => x != arrTempt[ramdom])
            arrTempt = tempt;
        }
        setAnswers(arr);
        // console.log(currentQuiz);
    },[quiz])

    //get point and next to new answer
    const answerQuiz = (value) =>{
        if(value === currentQuiz.correctAnwer){
            setPoint(point+1);
        }
       
        let newQuizCollection = quiz.filter(quizs => quizs.id != currentQuiz.id)
        setQuiz(newQuizCollection);
        setCurrentQuiz(quiz[ramdom]);
    }
   //Màn hình trả lời
    return quiz.length != 0?(
        <View>
            <Text style= {globalStyles.question} >{currentQuiz.question}</Text>
            <View> 
                <FlatList
                data={answers}
                renderItem={({item,index})=>(
                    <FlatButton  key={index} onPress={()=>answerQuiz(item)} style={globalStyles.button} title={item} />
                )}
                />
            </View>
                <Text style= {globalStyles.score}>Score: {point}/{total}</Text>
        </View>
    ):// Xuất kết quả khi hoàn tất
    (
        <View >
            <Text style= {globalStyles.score} >End of the test</Text>
            <Text style= {globalStyles.score}>Score: {point}/{total}</Text>
        </View>
    )
}

export default Quiz;
