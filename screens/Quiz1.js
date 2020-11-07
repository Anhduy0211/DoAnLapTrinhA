import React from 'react';
import { View,ImageBackground } from 'react-native';

import MarioCard from '../components/MarioCard';
import Header from '../components/Header';

import { globalStyles } from '../globalStyle/style';
import {easyImg, playStateImg, hardImg, normalImg} from '../shared/imageURL'


const Quiz1 = ({navigation}) =>{
    return(
        <View style={globalStyles.container}>
            <Header title="Quiz" homeHeader={false} />
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                <View style={{flex:1,marginTop:55 }}>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#00981d"} title={"easy"} imgSrc={easyImg}/>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#d89e33"} title={"normal"} imgSrc={normalImg}/>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#f90908"} title={"hard"} imgSrc={hardImg}/>
                </View>
            </ImageBackground>
        </View>
    )
}




export default Quiz1