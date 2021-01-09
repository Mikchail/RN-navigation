import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabsParamsList} from './AppTabsParamList';
import { Center } from './style';
import { Text } from 'react-native';
import { HomeStack } from './HomeStack';
import { SearchStackComponent } from './SearchStack';
import { MapScreen } from './ScreenForMap/MapScreen';
interface AppTabsProps {}


function Home (){
  return(
    <Center>
      <Text>
      Home
      </Text>
    </Center>
  )
}
function Search (){
  return(
    <Center>
      <Text>
      Search
      </Text>
    </Center>
  )
}
const Tabs = createBottomTabNavigator<AppTabsParamsList>();
export class AppTabs extends Component<AppTabsProps, {}> {
  public render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeStack}/>
        <Tabs.Screen name="Search" component={SearchStackComponent} />
        <Tabs.Screen name="MapScreen" component={MapScreen} />
      </Tabs.Navigator>
    );
  }
}
