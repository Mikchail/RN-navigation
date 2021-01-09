import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AppTabs} from './AppTabs';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
type DrowerContentUniqT = {};
// type TDrawer = DrowerContentUniqT ;
const DrowerContentUniq: React.FC<DrowerContentUniqT> = (
  props: DrowerContentUniqT,
) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 40,paddingVertical: 20,paddingLeft: 10}}>
        <Text style={{fontSize: 25}}>Аватарка</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem label="Search"/>
        <DrawerItem label="PlacesList" onPress={()=>props.navigation.navigate('MapScreen', {screen: 'PlacesList'})}/>
      </DrawerContentScrollView>
    </View>
  );
};

export const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MainDrawer" drawerContent={(props:DrowerContentUniqT) => {
      return <DrowerContentUniq {...props} />;
    }}>
      <Drawer.Screen name="MainDrawer" component={AppTabs} />
    </Drawer.Navigator>
  );
};
