import React from 'react';
import { StyleSheet, View,ImageBackground } from 'react-native';

import { Button } from 'react-native-elements';

import { globalStyles } from '../globalStyle/style';
import {homeBg} from '../shared/imageURL'


const Home = ({navigation}) =>{
    return(
        <View style={globalStyles.container}>
            <ImageBackground source={{uri:homeBg}} style={globalStyles.backgroundImage}>
                <View style={styles.con}>
                    <View style={styles.btnCon}>
                        <Button buttonStyle={styles.btn} titleStyle={styles.btnText} raised title="Quiz" onPress={()=>navigation.push('Quiz')}/>
                    </View>
                    <View style={styles.btnCon}>
                        <Button buttonStyle={styles.btn}  titleStyle={styles.btnText} raised title="History" onPress={()=>navigation.push('History')}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        height:100,
        backgroundColor:'salmon',
        borderRadius:40,
    },
    con:{
        marginHorizontal:40,
    },
    btnCon:{
        marginTop:30,
    },
    btnText:{
        fontWeight:"bold", 
        textTransform:'uppercase',
    }
})



export default Home