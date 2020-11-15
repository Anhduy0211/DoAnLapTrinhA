import React,{useEffect} from 'react';
import { View,ImageBackground,Alert } from 'react-native';

import MarioCard from '../components/MarioCard';
import Header from '../components/Header';

import { globalStyles } from '../globalStyle/style';
import {easyImg, playStateImg, hardImg, normalImg} from '../shared/imageURL'


const Home = ({navigation}) =>{

    useEffect(() =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
          }),[navigation])

    return(
        <View style={globalStyles.container}>
            <Header title="Home" homeHeader={true} />
            <ImageBackground source={{uri:playStateImg}} style={globalStyles.backgroundImage}>
                    <MarioCard onPress={()=>navigation.push("Quiz1")} color={"#00981d"} title={"easy"} imgSrc={easyImg}/>
            </ImageBackground>
        </View>
    )
}




export default Home