import React from 'react';

import { Icon} from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';

import History from '../../screens/History';

import Header from '../../components/Header' ;

const HistoryNavigator = createStackNavigator();

const HistoryNavigatorScreen = () => {
    return (
      <HistoryNavigator.Navigator initialRouteName='History'
        screenOptions={{
          headerStyle: { backgroundColor: 'salmon' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' }
        }}>
        <HistoryNavigator.Screen name='History' component={History}
          options={({ navigation }) => ({
            headerTitle: 'History',
            headerRight: () => (<Header navigation={navigation}/>)
          })} />
      </HistoryNavigator.Navigator>
    );
  }

export default HistoryNavigatorScreen;
