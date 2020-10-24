import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import FlatButton from '../components/FlatButton';

export default function Quiz() {
    const [quiz, setQuiz] = useState({
        1: {Question:"We have two ..... We see with them.",A:"eyes",B:"legs",C:"hands",D:"ears",anwer:"A"},
        2: {Question:"There ..... many books on the table.", A :"is" ,B:"have",C: "are" ,D:"has" ,anwer:"C"},
        3: {Question:"They go.... on Sundays", A:"shopping", B:"to shop", C:"for shopping" ,D:"to make shopping",anwer: "A"},
    })
    const [point, setPoint] = useState(0);
    const [currentPos, setCurrentPos] = useState(1)
    const [currentQuiz, setCurrentQuiz] = useState(quiz[currentPos]);
    // const [state, setState] = useState("");

    const anwerQuiz = (value) =>{
        if(value==currentQuiz.anwer){
            setPoint(point+1)
        }
        setCurrentPos(currentPos + 1);
        setCurrentQuiz(quiz[currentPos+1]);
    }

   
    return currentQuiz != null?(
        <View>

            <Text style= {styles.question} >{currentQuiz.Question}</Text>

            <View> 
                <FlatButton onPress={()=>anwerQuiz("A")} style={styles.button} title={currentQuiz.A} />
                <FlatButton onPress={()=>anwerQuiz("B")} style={styles.button} title={currentQuiz.B} />
                <FlatButton onPress={()=>anwerQuiz("C")} style={styles.button} title={currentQuiz.C} />
                <FlatButton onPress={()=>anwerQuiz("D")} style={styles.button} title={currentQuiz.D} />
            </View>

                <Text style= {styles.score}>Score: {point}/8</Text>
        </View>
    ):
    (
        <View style={{paddingVertical:"60%",flex:1}}> 
            <Text style= {styles.score} >End of the test</Text>
            <Text style= {styles.score}>Score: {point}/8</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"salmon",
        marginTop:5,
        textAlign:"center",
        marginHorizontal:15,
        borderRadius:10,
    },

    question:{
        fontSize:25,
        textAlign:"center",
        fontStyle:"italic",
        marginHorizontal:10,
        height:100,
        marginTop:100,
    },

    score:{
        color:"salmon",
        fontSize:25,
        textAlign:"center",
        fontWeight:"800",
        marginTop:50,
    },
})