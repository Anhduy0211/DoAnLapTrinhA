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
                <View style={{
                    flex:1,
                    marginTop:55
                    }}>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#00981d"} title={"easy"} imgSrc={easyImg}/>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#d89e33"} title={"normal"} imgSrc={normalImg}/>
                    <MarioCard onPress={()=>navigation.push("Quiz2")} color={"#f90908"} title={"hard"} imgSrc={hardImg}/>
                    {/* <View style={styles.btnCon}>
                        <Button buttonStyle={styles.btn} titleStyle={styles.btnText} raised title="Quiz" onPress={()=>navigation.push('Quiz1')}/>
                    </View>
                    <View style={styles.btnCon}>
                        <Button buttonStyle={styles.btn}  titleStyle={styles.btnText} raised title="History" onPress={()=>navigation.push('History')}/>
                    </View> */}
                </View>
            </ImageBackground>
        </View>
    )
}




export default Home