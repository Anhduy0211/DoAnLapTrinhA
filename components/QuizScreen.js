import React, { useState,useEffect } from 'react';
import {StyleSheet, Text,View, FlatList} from 'react-native';
import FlatButton from '../components/FlatButton';

// import Sound from 'react-native-sound';

// const buttonFailed = new Sound(require('../assets/audio/MarioFailed.mp3'), error => console.log(error));
// const buttonSucceeded = new Sound(require('../assets/audio/MarioSuccess.mp3'),error=>console.log(error));

// export const playButtonPress = () => {
//     buttonSucceeded.play((success) => buttonSucceeded.reset());
//   }

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
                <View style={styles.questionBox}>
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
                    positon={index} />
                    )}
                    keyExtractor={(item,index) => index.toString() }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    question:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'black',
        paddingVertical:10,
    },
    questionBox:{
        width:"100%",  
        height:"100%",
        justifyContent:'center',
        alignItems:'center'
        
    }
})


export default QuizScreen





