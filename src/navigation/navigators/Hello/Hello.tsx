import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Navigators} from '../../routes';
import {HelloScreen} from '~screens/HelloScreen';

const Stack = createStackNavigator();

const {HELLO_NAVIGATOR} = Navigators;

const Hello = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={HELLO_NAVIGATOR.HELLO_CHILD}
        component={HelloScreen}
        initialParams={{title: 'Awesome app'}}
      />
    </Stack.Navigator>
  );
};

export default Hello;
