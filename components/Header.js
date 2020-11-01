import React from 'react';

import { Icon } from 'react-native-elements';

import { StyleSheet } from 'react-native';
import {Text,View} from 'react-native';


const Header = ({navigation}) =>{
    return(
        <View style ={styles.header}>
            <Icon name='menu' size={36} color='white' onPress={() => navigation.toggleDrawer()} />
        </View>
    )
}

 const styles = StyleSheet.create({
    header:{
        marginRight:15,
    },
 })


export default Header;

