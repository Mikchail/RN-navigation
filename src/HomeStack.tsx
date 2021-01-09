import React, {useEffect, useRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamsList, HomeNavProps} from './HomeParamList';
import {Center} from './style';
import {
  Alert,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import faker from 'faker';
import { appStackNav } from './appStack';
interface HomeStackProps {}
const HomeStackNav = createStackNavigator<HomeParamsList>();

function Feed({navigation}: HomeNavProps<'Feed'>) {
  return (
    <Center>
      <FlatList
        keyExtractor={(i, t) => i + t}
        contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}
        style={{width: '100%'}}
        renderItem={({item}) => {
          return (
            <View style={{maxWidth: 120, width: '100%', marginBottom: 20}}>
              <Button
                title={item}
                onPress={() =>
                  navigation.navigate('Product', {
                    name: item,
                  })
                }
              />
            </View>
          );
        }}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = () => {
  return (
    <HomeStackNav.Navigator initialRouteName="Feed">
      <HomeStackNav.Screen
        options={{
          headerRightContainerStyle: {
            marginRight: 20,
            width: '100%',
          },
          headerRight: () => {
            return (
              <TouchableOpacity>
                <Button title="logout" onPress={() => Alert.alert('alert')} />
              </TouchableOpacity>
            );
          },
        }}
        name="Feed"
        component={Feed}
      />
      {appStackNav(HomeStackNav)}
    </HomeStackNav.Navigator>
  );
};
