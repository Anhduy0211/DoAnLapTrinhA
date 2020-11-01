import React from 'react';
import { Text, View } from 'react-native';

import { Icon } from 'react-native-elements';

import { createDrawerNavigator, DrawerContentScrollView,DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HistoryNavigatorScreen from './stack/historyStack';
import HomeNavigatorScreen from './stack/homeStack';


//------------------------------------------Custom Drawer-----------------------------------------------------------//
const MainNavigator = createDrawerNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

    {/* --------------------------------------------Custom Header -----------------------------------------*/}
      <View style={{ backgroundColor: 'salmon', height: 80, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          {/* <Image source={{uri:baseUrl + "images/logo.png"}} style={{ margin: 10, width: 80, height: 60 }} /> */}
        </View>

        <View style={{ flex: 2 }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: 'bold' }}>Trung</Text>
        </View>
      </View>
    {/* ---------------------------------------------------------------------------------------------------- */}

    {/* ---------------------------------------------Props------------------------------------------------- */}
      <DrawerItemList {...props} />

    {/* ---------------------------------------Additional Item Below---------------------------------------- */}
    </DrawerContentScrollView>
  );
}



function MainNavigatorScreen() {
  return (
    <MainNavigator.Navigator initialRouteName='Home' drawerContent={props => <CustomDrawerContent {...props} />}>
      <MainNavigator.Screen name='Home' component={HomeNavigatorScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (<Icon name='home' size={size} color={focused ? '#7cc' : '#ccc'} />)
        }} />
    </MainNavigator.Navigator>
  );
}

//---------------------------------------------------Render------------------------------------------------------------//
const MainNavigation = () => {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
}

export default MainNavigation