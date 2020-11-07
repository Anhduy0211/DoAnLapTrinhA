import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Quiz2 from '../../screens/Quiz2';
import Quiz3 from '../../screens/Quiz3';

import Header from '../../components/Header' ;

const QuizNavigator = createStackNavigator();

const QuizNavigatorScreen = () => {
    return (
      <QuizNavigator.Navigator initialRouteName='Quiz1'
        screenOptions={{
          headerShown:false,
          headerStyle: { backgroundColor: 'salmon' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' }
        }}>
        <QuizNavigator.Screen name='Quiz2' component={Quiz2}
          options={({ navigation }) => ({
            headerTitle: 'Quiz2',
            headerRight: () => (<Header navigation={navigation}/>)
          })} />
          <QuizNavigator.Screen name='Quiz2' component={Quiz3}
          options={({ navigation }) => ({
            headerTitle: 'Quiz3',
            headerRight: () => (<Header navigation={navigation}/>)
          })} />
      </QuizNavigator.Navigator>
    );
  }

export default QuizNavigatorScreen;
