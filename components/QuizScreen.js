import React, { useState,useEffect } from 'react';
import {StyleSheet, Text,View, VirtualizedList} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FlatButton from '../components/FlatButton';

import {globalStyles} from '../globalStyle/style';

const QuizScreen =({quiz,onAnwerQuiz})=>{
    const [answers, setAnswers] = useState(quiz.answers)
    useEffect(() => {
        let arr = []
        let arrTempt = quiz.answers;
        for (let i = arrTempt.length-1 ; i >-1 ; i--){
            let random = Math.floor(Math.random()*(i+1));
            if(random==i+1){
                random = Math.floor(Math.random()*(i+1));
            }
            arr.push(arrTempt[random])
            let tempt = arrTempt.filter( x => x != arrTempt[random])
            arrTempt = tempt;
        }
        setAnswers(arr)
    }, [quiz])
    return(
        <View style={{
            flex:1,
            justifyContent:'space-between',
            paddingHorizontal:20
        }}> 
            <View style={{
                flex:1,
                flexWrap:'nowrap',
                justifyContent:'center'
            }}>
                <View>
                    <Text style={styles.question}>{quiz.question}</Text>
                </View>
            </View>
            <View> 
                <FlatList
                data={answers}
                renderItem={({item,index})=>(
                    <FlatButton  key={index} 
                    onPress={()=>(onAnwerQuiz(item))} 
                    title={item}
                    pos={index} />
                    )}
                    keyExtractor={(item,index) => index }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    question:{
        fontSize:25,
        fontStyle:"italic",
        textAlign:'center'
    },
})


export default QuizScreen





