import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {Center} from './style';
import {AuthNavProps, AuthParamsList} from './AuthParamsList';
import {AuthContext} from './AuthProvider';
import {AppTabs} from './AppTabs';
import {AuthStack} from './AuthStack';
import {MainDrawer} from './MainDrawer';

interface RoutesProps {}

export class Router extends Component<RoutesProps, {}, {}> {
  public static contextType = AuthContext;
  public render() {
    const {user} = this.context;
    console.log(this.context);
    return (
      <NavigationContainer>
        {user ? <MainDrawer /> : <AuthStack />}
      </NavigationContainer>
    );
  }
}
