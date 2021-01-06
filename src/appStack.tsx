import {StackNavigationState, TypedNavigator} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Text, Button} from 'react-native';
import {HomeNavProps, HomeParamsList} from './HomeParamList';
import {SearchParamsList} from './SearchParamsList';
import {Center} from './style';

function Product({navigation, route}: HomeNavProps<'Product'>) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="EditProduct"
        onPress={() => {
          navigation.navigate('EditProduct', {
            name: route.params.name,
          });
        }}
      />
    </Center>
  );
}
function apiCall(x: any) {
  return x;
}
function EditProduct({navigation, route}: HomeNavProps<'EditProduct'>) {
  const [state, setState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    apiCall(state);
    navigation.goBack();
  };
  useEffect(() => {
    navigation.setParams({submit});
  }, []);
  return (
    <Center>
      <Text>EditProduct: {route.params.name}</Text>
    </Center>
  );
}

export const appStackNav = (
  Stack: TypedNavigator<
    SearchParamsList | HomeParamsList,
    StackNavigationState<Record<string, object | undefined>>,
    any,
    any,
    any
  >,
) => {
  return (
    <>
      <Stack.Screen
        options={({route}) => {
          return {
            headerTitle: route.params.name,
          };
        }}
        name="Product"
        component={Product}
      />
      <Stack.Screen
        options={({route}) => {
          return {
            headerTitle: route.params.name,
            headerRightContainerStyle: {paddingRight: 20},
            headerRight: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (route.params.submit) {
                      route.params.submit.current();
                    }
                  }}>
                  <Text>Done</Text>
                </TouchableOpacity>
              );
            },
          };
        }}
        name="EditProduct"
        component={EditProduct}
      />
    </>
  );
};
