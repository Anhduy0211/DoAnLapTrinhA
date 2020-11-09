import React  from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import History from '../screens/History';
import Quiz1 from '../screens/Quiz1';
import Quiz2 from '../screens/Quiz2';
import Quiz3 from '../screens/Quiz3';


const Stack = createStackNavigator();

const StackScreen = () => {
    return (
      <Stack.Navigator initialRouteName='Quiz1'
        screenOptions={{
          headerShown:false,
        }}
        >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Quiz1' component={Quiz1}/>
        <Stack.Screen name='Quiz2' component={Quiz2}/>
        <Stack.Screen name='Quiz3' component={Quiz3}/>
        <Stack.Screen name='History' component={History}/>
      </Stack.Navigator>
    );
  }

export default StackScreen;
