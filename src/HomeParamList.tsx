import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductParamList} from './ProductParamList';

export type HomeParamsList = {
  Feed: undefined;
} & ProductParamList;

export type HomeNavProps<T extends keyof HomeParamsList> = {
  navigation: StackNavigationProp<HomeParamsList, T>;
  route: RouteProp<HomeParamsList, T>;
};
