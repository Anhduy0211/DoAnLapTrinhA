import React from 'react';
import {Text,View,ImageBackground,Button,StyleSheet} from 'react-native';

import Header from '../components/Header';

import {playStateImg } from '../shared/imageURL';

import { globalStyles } from '../globalStyle/style';
import PieCharter from '../components/PieChart';

const Score = ({point,total,navigation}) =>{

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

    return(
        <View style={globalStyles.container}>
        <Header navigation={navigation} title={"Quiz"} homeHeader={false}/>
        <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
            <View style={styles.quizContainer}>
                <Text style= {styles.quizText} >End of the test</Text>
                <Text style= {styles.quizText} >{evaluate(point,total)?evaluate(point,total):"Test end"}</Text>
                <PieCharter total={total} point={point}/>
                <Text style= {styles.quizText}>Score: {point}/{total}</Text>
                <Button title="Back" onPress= {()=>navigation.navigate('Quiz1')}/>
                <Button title="Again" onPress= {()=>navigation.navigate('Quiz1')}/>
            </View>
        </ImageBackground>
    </View>
    )
}

export default Score

const styles = StyleSheet.create({
    quizText:{
        color:"white",
        fontSize:25,
        textAlign:"center",
        fontWeight:"bold",
    },
    quizContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    
})