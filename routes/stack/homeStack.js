import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

import Header from '../components/Header' ;

const HomeNavigator = createStackNavigator();

const HomeNavigatorScreen = () => {
    return (
      <HomeNavigator.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: '#7cc' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' }
        }}>
        <HomeNavigator.Screen name='Home' component={Home}
          options={({ navigation }) => ({
            headerTitle: 'Home',
            headerLeft: () => (<Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />)
          })} />
      </HomeNavigator.Navigator>
    );
  }

export default HomeNavigatorScreen;
