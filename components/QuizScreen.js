import React, { useState,useEffect } from 'react';
import {Text,View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FlatButton from '../components/FlatButton';

import {globalStyles} from '../globalStyle/style';

const QuizScreen =({quiz,onAnwerQuiz})=>{
    const [answers, setAnswers] = useState(quiz.answers)
    useEffect(() => {
        let arr = []
        let arrTempt = quiz.answers;
        for (let i = 3 ; i >-1 ; i--){
            let random = Math.floor(Math.random()*(i+1));
            if(random==i+i){
                random = Math.floor(Math.random()*(i+1));
            }
            arr.push(arrTempt[random])
            let tempt = arrTempt.filter( x => x != arrTempt[random])
            arrTempt = tempt;
        }
        setAnswers(arr)
    }, [quiz])
    return(
        <View>
            <Text style={globalStyles.question}>{quiz.question}</Text>
            <View> 
                <FlatList
                data={answers}
                renderItem={({item,index})=>(
                    <FlatButton  key={index} 
                    onPress={()=>(onAnwerQuiz(item))} 
                    style={globalStyles.button} 
                    title={item} />
                    )}/>
            </View>
        </View>
    )
}

export default QuizScreen




