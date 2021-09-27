import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './navigationRef';
import {Navigators} from './routes';

import Hello from './navigators/Hello/Hello';

const Stack = createStackNavigator();

const {HELLO_NAVIGATOR} = Navigators;

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={HELLO_NAVIGATOR.ROOT}>
        <Stack.Screen name={HELLO_NAVIGATOR.ROOT} component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
