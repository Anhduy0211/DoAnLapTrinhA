import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import StackScreen from './Stack';

const MainNavigation = () => {
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
}

export default MainNavigation