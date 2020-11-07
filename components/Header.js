import React from 'react';

import { ImageBackground, StyleSheet } from 'react-native';
import {Text,View,Image} from 'react-native';

import { Icon } from 'react-native-elements';
import { globalStyles } from '../globalStyle/style';



const Header = ({navigation,title,homeHeader}) =>{
    if(!homeHeader){
        return(
            <View style ={styles.header}>
                <View style={{paddingTop:30}}>
                    <View style={styles.headerContainer}>
                            
                            <View style={{marginLeft:15,}}>
                                <Image source={require('../shared/images/logo3.png')} style={styles.imgLogo}  />
                            </View>
    
                            <View style={{flex:1}}>
                                <Text style={styles.hearText}>{title}</Text>
                            </View>
    
                            <View style={{marginRight:15,}}>
                                <Icon color={"white"} name={"clear"} size={32} onPress={()=>{navigation.goBack()}}/>
                            </View>
                    </View>
                </View>
            </View>
        )
       
    } else {
        return(
            <View style ={styles.header}>
                <View style={{paddingTop:30}}>
                    <View style={styles.headerContainer}>
                            
                            <View style={{marginLeft:15,}}>
                                <Image source={require('../shared/images/logo3.png')} style={styles.imgLogo}  />
                            </View>
    
                            <View style={{
                                flex:1,
                            }}>
                                <Text style={styles.hearText}>{title}</Text>
                            </View>
    
                            <View style={{marginRight:15,}}>
                                <Icon color={"white"} name={"face"} size={32}/>
                            </View>
                    </View>
                </View>
            </View>
        )
    }
   
}

 const styles = StyleSheet.create({
    header:{
        backgroundColor:"#f2cc09",
    },
    hearText:{
        lineHeight:50,
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:30,
        color:"white",
        textAlign:'center',
        
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
    },
    imgLogo:{
        width:32,
        height:32,
        borderRadius:16 
    }
 })


export default Header;

