import React  from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../../components/Header' ;

import Home from '../../screens/Home';
import History from '../../screens/History';
import Quiz2 from '../../screens/Quiz2';
import Quiz3 from '../../screens/Quiz3';


const HomeNavigator = createStackNavigator();

const HomeNavigatorScreen = () => {
    return (
      <HomeNavigator.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown:false,
        }}
        >
        <HomeNavigator.Screen name='Home' component={Home}/>
        <HomeNavigator.Screen name='Quiz2' component={Quiz2}/>
        <HomeNavigator.Screen name='Quiz3' component={Quiz3}/>
        <HomeNavigator.Screen name='History' component={History}/>
      </HomeNavigator.Navigator>
    );
  }

export default HomeNavigatorScreen;
