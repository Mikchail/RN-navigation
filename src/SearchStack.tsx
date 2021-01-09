import React, {useEffect, useRef, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import {appStackNav} from './appStack';
import {SearchNavProps, SearchParamsList} from './SearchParamsList';
interface HomeStackProps {}
const SearchStack = createStackNavigator<SearchParamsList>();

function Search({navigation}: SearchNavProps<'Search'>) {
  const [state, setState] = useState(false);
  return (
    <Center>
      <TouchableOpacity
        onPress={() => {
          setState(true);
        }}>
        <Text>Open Search</Text>
      </TouchableOpacity>
      {state ? (
        <FlatList
          keyExtractor={(i, t) => i + t}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
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
      ) : null}
    </Center>
  );
}

export const SearchStackComponent: React.FC<HomeStackProps> = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
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
        name="Search"
        component={Search}
      />
      {appStackNav(SearchStack)}
    </SearchStack.Navigator>
  );
};
