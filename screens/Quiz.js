import React, { useState,useEffect } from 'react';
import {Text,View} from 'react-native';
import QuizScreen from '../components/QuizScreen';

import {globalStyles} from '../globalStyle/style';

const Quiz =() => {
    //Bộ câu hỏi
    //----------------------------------------Initial State--------------------------------------------------------// 
    const [quiz, setQuiz] = useState([
        {id:0,question:"1",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        {id:1,question:"2",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        // {id:2,question:"3", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
        // {id:3,question:"4",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        // {id:4,question:"5",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        // {id:5,question:"6", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
        // {id:6,question:"7",answers:["eyes","legs","hands","ears"],correctAnwer:"eyes"},
        // {id:7,question:"8",answers:["is" ,"eyes", "are" ,"has"] ,correctAnwer:"are"},
        // {id:8,question:"9", answers:["shopping","to shop", "for shopping" ,"to make shopping"],correctAnwer: "to make shopping"},
    ])

    // Flag start / end
    const [start, setStart] = useState(true)
    const [end, setEnd] = useState(false)
    
    // Flag chấm điểm 
    const [check,setCheck] = useState(false)
    const [checkValue, setCheckValue] = useState(false)
    
    // Điểm số và tống câu hỏi
    const [total, setTotal] = useState(quiz.length);
    const [point, setPoint] = useState(0);

    //Câu hỏi hiện tại
    const [currentQuiz, setCurrentQuiz] = useState(quiz[Math.floor(Math.random()*quiz.length)]);
    //----------------------------------------End Init State-------------------------------------------------------// 

    //----------------------------------------Initital LifeCycle---------------------------------------------------// 
    //Delay để chấm điểm 
    useEffect(() => {
        setCheck(true)
        async function delay(){
            await setTimeout(()=>{
                if(quiz.length!=0){
                    let random = Math.floor(Math.random()*quiz.length);
                    if(random == quiz.length){
                        random = Math.floor(Math.random()*quiz.length)
                    }
                    setCurrentQuiz(quiz[random]);
                    setCheck(false);
                }
                else{
                    setCheck(false);
                }
            },800)
        }
        delay();
        if(quiz.length==0){
            setEnd(true);
        }
    }, [quiz])

    //Delay 1s để chạy màn hình start
    useEffect(() => {
        async function delay(){
            await setTimeout(()=>{
                setStart(false)
            },1000)
        }
        delay();
    }, [])
    
    //----------------------------------------End LifeCycle------------------------------------------------------// 
    
    //---------------------------------------Execute Method------------------------------------------------------// 
    //Cộng điểm và chỉnh lại câu hỏi
    const answerQuiz = (value) =>{
        //+point
        if(value === currentQuiz.correctAnwer){
            setPoint(point+1);
            setCheckValue(true)
        }
        else{
            setCheckValue(false)
        }

        let newQuizCollection = quiz.filter(quizs => quizs.id != currentQuiz.id)
        setQuiz(newQuizCollection);
    }

    //đánh giá theo 3 thang điểm 
    const evaluate = (point,total)=>{
        if(point <= total*1/3)
            return "Bad";
        else if(point <= total*2/3)
            return "Good";
        else if(point <= total)
            return"Excellent"
        else
            return null;
    }

    //----------------------------------------Return UI----------------------------------------------------------// 

    //Màn hình trả lời
    //Lúc bắt đầu
    if(start)
        return(
            <View>
                <Text style={globalStyles.score}>Wellcome to the test</Text>
            </View>)   

    //Lúc chấm điểm
    else if(check === true)
        return(
        <View>
            {checkValue?
            <View>
                <Text style= {globalStyles.score}>Your answer is correct</Text>
            </View>
            :<View>
                <Text style= {globalStyles.score}>Your answer is wrong</Text>
                <Text style= {globalStyles.score}>Correctt answer is {currentQuiz.correctAnwer}</Text>
            </View>}
        </View>)

    //Xuất kết quả
    else if(end) 
    return(
        <View >
            <Text style= {globalStyles.score} >End of the test</Text>
            <Text style= {globalStyles.score} >{evaluate(point,total)?evaluate(point,total):"Test end"}</Text>
            <Text style= {globalStyles.score}>Score: {point}/{total}</Text>
        </View>)

    //Màn hình của QUIZ
    else if(quiz.length != 0 )
    return(
        <View>
            <QuizScreen quiz = {currentQuiz} onAnwerQuiz={answerQuiz}/>
            <Text style= {globalStyles.score}>Score: {point}/{total}</Text>
        </View>)
    else

    return(
        <View/>)
}

export default Quiz;

