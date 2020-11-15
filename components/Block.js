import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';
import { blockImg, boxImg } from '../shared/imageURL';

export default Block = ({title}) =>{
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    let arr1 = [0,1,2,3,4]
    return(
        <View style={{
            flex:1,
            position:'relative',
            flexDirection:'row',
            flexWrap:'wrap',
        }}>
            {
                arr.map(a => {
                    if(a==10||a==11||a==14) 
                        return <Image style={styles.block} source={{uri:boxImg}} />
                    return <Image style={styles.block} source={{uri:blockImg}} />
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    block:{
        width:"20%",
        height:"20%",
    }

})