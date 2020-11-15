import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, Button ,TouchableOpacity} from 'react-native';

import Box from '../components/Box'
import Header from '../components/Header';
import {globalStyles} from '../globalStyle/style';

import { playStateImg } from '../shared/imageURL';

const QuizMain =({navigation,route}) => {
    //----------------------------------------Initial State--------------------------------------------------------// 
    const [quiz, setQuiz] = useState(route.params.quizFromScreen1)
    const [quantiies, setQuantiies] = useState(5)
    //----------------------------------------End Init State-------------------------------------------------------// 


    //---------------------------------------Execute Method------------------------------------------------------//    

    // Chọn số lượng câu hỏi
    const getQuizQuantities =(val)=>{
        if(val==="+" && quantiies<10){
            setQuantiies(quantiies+1)
        }
        if(val==="-" && quantiies>5){
            setQuantiies(quantiies-1)
        }
    }
    
    // Ramdom bộ câu hỏi
    const ramdomQuizPosition = ()=>{
        let arr = []
        let arrTempt = quiz;
        let y = 0; // cờ để dừng ramdom
        for (let i = arrTempt.length-1 ; i >-1 ; i--){
            //Ramdom vị trí
            let random = Math.floor(Math.random()*(i+1));
            if(random==i+1){
                random = Math.floor(Math.random()*(i+1));
            }

            // Ramdom đúng số lượng câu hỏi được chọn
            if(y == quantiies){
                break;
            }
            
            // Tạo mảng tạm để chứa giá trị ramdom
            arr.push(arrTempt[random])
            
            // Lọc mảng mới và xóa giá trị vừa push
            let tempt = arrTempt.filter( x => x != arrTempt[random])
            arrTempt = tempt;
            y++;
        }
        return arr;
    }
    function navigationToScreen3(){
        let value = ramdomQuizPosition();
        navigation.push("Quiz3",{
            quizFromScreen2:value
        })
    }

    //-----------------------------------End Execute Method------------------------------------------------------//   
     

    //----------------------------------------Return UI----------------------------------------------------------// 
    return(
        <View style={{flex:1}}>
            <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View style={styles.container}>

                    <View style={styles.sec1}>
                        {/* Title */}
                        <View style={styles.title}>
                            <Text style={styles.choose}>Choose the number of questions</Text>
                        </View>
                        {/* ----------------------------------- */}
                        
                        {/* Cloud */}
                        <View >
                            <ImageBackground style={styles.clound} source={require('../shared/images/cloud1.png')}>
                                <Text style={{...styles.choose,...{fontSize:85}}}>{quantiies}</Text>
                            </ImageBackground>
                        </View>
                        {/* ----------------------------------- */}
                    </View>
                            
                    <View style={styles.sec2}> 
                        {/* Box  */}
                        <View style={styles.toolBox}>
                            <Box name='minus' onPress={()=>getQuizQuantities("-")} />
                            <Box name='plus' onPress={()=>getQuizQuantities("+")} />
                        </View>
                        {/* ----------------------------------- */}
                        
                        {/* Nút bắt đầu */}
                        <View>
                            <TouchableOpacity style={styles.btn} onPress={navigationToScreen3} >
                                <Text  style={styles.btnText}>Get start</Text>
                            </TouchableOpacity>
                        </View>
                        {/* ----------------------------------- */}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
    },
    clound:{
        resizeMode:'cover',
        width:300,
        height:150,
        opacity:.8,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:15,
    },
    choose:{
        fontWeight:'bold',
        color:'#e8504d',
        fontSize:30,
        textTransform:'uppercase',
        textAlign:'center',
    },
    toolBox:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:40,
        marginBottom:50,
    },
    btn:{
        backgroundColor:'#e8504d',
        // borderWidth:3,
        // borderColor:'#e8504d',
        width:"60%",
        height:50,
        alignItems:'flex-end',
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginRight:40,
        marginVertical:50,
    },
    btnText:{
        letterSpacing:2,
        color:'white',
        fontWeight:'bold',
        fontSize:25,
    },
    title:{
        marginVertical:40,
        marginHorizontal:30,
    },
    // sec2:{
    //     backgroundColor:'red',
    // },
    // sec1:{
    //     backgroundColor:'red',
    // }
})
export default QuizMain;
