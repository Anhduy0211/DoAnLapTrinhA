import React from 'react';
import { Text, ImageBackground,StyleSheet,View,Image } from 'react-native';

import Header from '../components/Header';
import {playStateImg } from '../shared/imageURL';
import { globalStyles } from '../globalStyle/style';


export default QuizCard = ({correctAnswer,checkValue,navigation})=>{
    return(
        <View style={globalStyles.container}>
                <View style={globalStyles.container}>
                    <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
                    <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                        <View style={{...styles.container,marginTop:'25%'}}>
                            {checkValue?
                                <View style={styles.container}>
                                    <Image style={styles.img} source={require('../shared/images/happymario.png')} />
                                    <View style={{...styles.box,marginTop:2}}>
                                        <Text style= {{...styles.quizText,borderBottomWidth:.5,marginBottom:10}}>Your answer is:</Text>
                                        <Text style= {{...styles.quizText,fontSize:40,color:'#58b84b'}}>"Correct"</Text>
                                    </View>
                                </View>
                            :
                                <View style={styles.container}>
                                    <Image style={{...styles.img,resizeMode:'center'}} source={require('../shared/images/sadmario.png')} />
                                    <View style={styles.box}>
                                        <Text style= {{...styles.quizText,borderBottomWidth:.5,marginBottom:10}}>Your answer is wrong</Text>
                                        <Text style= {{...styles.quizText,...{fontSize:18}}}>Correct answer is:</Text>
                                        <Text style= {{...styles.quizText,fontSize:40,color:'#db0911'}}>{correctAnswer}</Text>
                                    </View>
                                </View>
                            }
                        </View>
                    </ImageBackground>
                </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    img:{
        width:250,
        height:250,
    },
    container:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center'
    },
    quizText:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
        letterSpacing:1,
        textAlign:'center'
    },
    box:{
        marginHorizontal:20,
        backgroundColor:'white',
        borderBottomEndRadius:50,
        borderRadius:7,
        padding:10,
        opacity:.65,
    }

    
})

     