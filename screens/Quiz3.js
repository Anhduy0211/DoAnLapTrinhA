import React, { useState,useEffect } from 'react';
import {Alert, Button, Text,View,ImageBackground, StyleSheet} from 'react-native';


import PieCharter from '../components/PieChart';
import QuizScreen from '../components/QuizScreen';
import Header from '../components/Header';

import {playStateImg } from '../shared/imageURL';

import { globalStyles } from '../globalStyle/style';
import QuizCard from '../components/QuizCard';
import Score from './Score';
import QuizStart from './QuizStart';

const Quiz =( {route,navigation}) => {
    //----------------------------------------Initial State--------------------------------------------------------// 
    //Bộ n câu hỏi
    const [quiz, setQuiz] = useState(route.params.quizFromScreen2)

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
         function delay(){
             setTimeout(()=>{
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
            },1500)
        }
        if(quiz.length==0){
            setEnd(true)
        }
        delay();
    }, [quiz])



    //Delay 1s để chạy màn hình start
    useEffect(() => {
        // console.log(route)
        async function delay(){
            await setTimeout(()=>{
                setStart(false);
            },1700)
        }
        delay();
        return () =>{
            clearTimeout();
        }
    }, [])

    //----------------------------------------End LifeCycle------------------------------------------------------// 
    
    //---------------------------------------Execute Method------------------------------------------------------// 
    //Cộng điểm và chỉnh lại câu hỏi
    const answerQuiz = (value) =>{
        //+point
        if(value === currentQuiz.correctAnswer){
            setPoint(point+1);
            setCheckValue(true)
        }
        else{
            setCheckValue(false)
        }
        let newQuizCollection = quiz.filter(quizs => quizs.id != currentQuiz.id)
        setQuiz(newQuizCollection);
    }


    //prevent back ve 
    useEffect(() =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert(
              'Discard changes?',
              'You have unsaved changes. Are you sure to discard them and leave the screen?',
              [
                { text: "Don't leave", style: 'cancel',      onPress: () => {} },
                { text: 'Discard',     style: 'destructive', onPress: () => navigation.push("Home")},
              ]
            );
          }),[navigation])

    //----------------------------------------Return UI----------------------------------------------------------// 

    //Màn hình trả lời
    //Lúc bắt đầu
    if(start)
        return( <QuizStart />   )   

    //Lúc chấm điểm
    else if(check === true)
        return(<QuizCard navigation={navigation} checkValue={checkValue} correctAnswer={currentQuiz.correctAnswer} />)

    //Xuất kết quả
    else if(end) 
        return(<Score point={point} total={total} navigation={navigation} />)

    //Màn hình của QUIZ
    else if(quiz.length != 0 )
    return(
        <View style={globalStyles.container}>
            <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>

                <QuizScreen quiz = {currentQuiz} onAnwerQuiz={answerQuiz}/>

                {/* Score */}
                <View style={{
                    paddingTop:15,
                    paddingBottom:40,
                    width:'80%',
                    alignSelf:'center',
                }} >
                    <Text style= {styles.quizText}>Score: {point}/{total}</Text>
                </View>
                
            </ImageBackground>
        </View>)
    else

    return(
        <View style={globalStyles.container}>
            <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View>
                    <Text>Loading.....................</Text>
                </View>
            </ImageBackground>
        </View>)
}

export default Quiz;

const styles = StyleSheet.create({
    quizText:{
        color:"white",
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
    },    
})


