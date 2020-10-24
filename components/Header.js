import React from 'react';
import {Text,View} from 'react-native';

import {globalStyles} from '../globalStyle/style'

const Header = ({title}) =>{
    return(
        <View style ={globalStyles.header}>
            <View>
                <Text style ={globalStyles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header;