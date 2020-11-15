import React,{useRef} from 'react';

import { Image,ImageBackground,View,StyleSheet,Animated} from 'react-native';

import { Button } from 'react-native-elements';
import { Easing } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { boxImg, coinImg } from '../shared/imageURL';


const Box =({onPress,name})=>{
    const coin = useRef(new Animated.Value(0)).current;

    const animatedCoin = () =>{
        onPress();
        Animated.stagger(250,[
            Animated.timing(coin,{
                toValue:-120,
                duration:200,
                useNativeDriver:true,
                easing:Easing.linear,
            }),
            Animated.timing(coin,{
                toValue:0,
                duration:200,
                useNativeDriver:true,
                easing:Easing.linear,
            })
        ]).start();
    }

    return(
            <ImageBackground style={styles.box} source={{uri:boxImg}}  >
                    <Animated.View style={{...styles.coinContainer,...{transform:[{translateY:coin }]}}}>
                        <Image style={styles.coin}  source={require('../shared/images/coin.png')}/>
                    </Animated.View>
                    <View style={{backgroundColor:'#f2cc09'}}>
                        <Button
                            onPress={animatedCoin}
                            buttonStyle={styles.btn}
                            icon={
                                <Icon
                                name={name}
                                size={80}
                                color="white"
                                />
                            }
                        />
                    </View>
            </ImageBackground>
    )
}





const styles = StyleSheet.create({
    btn:{
        height:75,
        width:75,
        backgroundColor:'#f2cc09',
    },
    box:{
        resizeMode:'center',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        position:'relative',
    },
    coinContainer:{
        position:'absolute',
        top:0,
        left:0,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        zIndex:-1,
    },

    coin:{
        width:80,
        height:80,
    }
})




export default Box