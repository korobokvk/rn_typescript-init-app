import React from 'react';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './navigation.types';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

class NavigationRef {
  navigate(
    navigator: keyof RootStackParamList,
    screen: RootStackParamList[typeof navigator],
  ) {
    navigationRef.current?.navigate(navigator, screen);
  }

  reset(route: string) {
    return navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: route}],
      }),
    );
  }
}

export const Navigation = new NavigationRef();
