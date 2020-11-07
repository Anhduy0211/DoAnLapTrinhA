import React from 'react';
import { Text,View, TouchableOpacity,StyleSheet, ImageBackground } from 'react-native';
import { globalStyles } from '../globalStyle/style';

const MarioCard = ({imgSrc,title,color,onPress})=>{
    return (
        <TouchableOpacity onPress={onPress}  style={styles.bgImg} >
            <ImageBackground source={{uri:imgSrc}} style={globalStyles.backgroundImage}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardTitle} >
                        <Text style= {{
                            fontSize:20,
                            letterSpacing:2,
                            textTransform:'uppercase',
                            fontWeight:"bold",
                            textAlign:'center',
                            color:color,
                            }}>{title}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}   

const styles = StyleSheet.create({
    bgImg:{
        marginTop:30,
        overflow:'hidden',
        borderRadius:10,
        borderColor:"white",
        borderWidth:1,
        marginHorizontal:20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        minHeight:150,
    },
    cardContainer:{
        height:"100%",
        borderRadius:80,
        position:'relative'
    },
    cardTitle:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        height:'30%',
        backgroundColor:"white",
        color:"gray",
        opacity:.85,
        justifyContent:'center'
        
    }
 })

export default MarioCard;