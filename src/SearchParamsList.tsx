import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductParamList} from './ProductParamList';

export type SearchParamsList = {
  Search: undefined;
} & ProductParamList;

export type SearchNavProps<T extends keyof SearchParamsList> = {
  navigation: StackNavigationProp<SearchParamsList, T>;
  route: RouteProp<SearchParamsList, T>;
};
