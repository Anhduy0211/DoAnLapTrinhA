import React  from 'react';

import { Icon } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/Home';
import QuizMain from '../../screens/QuizMain';
import History from '../../screens/History';


import Header from '../../components/Header' ;

const HomeNavigator = createStackNavigator();

const HomeNavigatorScreen = () => {
    return (
      <HomeNavigator.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#f2cc09' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' }
        }}
        >
        <HomeNavigator.Screen name='Home' component={Home}
          options={({ navigation }) => ({
            headerRight: () => (  <Header navigation={navigation} />)
          })} />
          <HomeNavigator.Screen name='Quiz' component={QuizMain}
          options={({ navigation }) => ({
            headerRight: () => ( <Header navigation={navigation}  />)
          })} />

        <HomeNavigator.Screen name='History' component={History}
          options={({ navigation }) => ({
            headerRight: () => ( <Header navigation={navigation}  />)
          })} />
      </HomeNavigator.Navigator>
    );
  }

export default HomeNavigatorScreen;
