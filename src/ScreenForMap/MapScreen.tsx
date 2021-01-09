import React, {Component, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import PlacesListScreen from './PlaceListScreen';
import PlaceDetailScreen from './PlaceDetailScreen';
import {useDispatch} from 'react-redux';
import * as placesActions from '../store/places-actions';
import CameraRoll from '@react-native-community/cameraroll';
import {ScrollView} from 'react-native-gesture-handler';
import {Photo} from '../components/PhotoComponent';
import {AppCamera} from '../components/CameraComponent';
interface Props {}

function Map(props: any) {
  const {navigation}: {navigation: any} = props;
  return (
    <View
      style={{
        width: Dimensions.get('window').width - 40,
        marginHorizontal: 20,
        marginVertical: 20,
      }}>
      <Button title="Photo place" onPress={() => navigation.navigate('Photo')} />
      <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
}
function AddMap(props: any) {
  const {navigation}: {navigation: any} = props;
  const [titleValue, setTitleValue] = useState('');

  const dispatch = useDispatch();

  const titleChangeHandler = (text: any) => {
    // you could add validation
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };
  return (
    <View
      style={{
        width: Dimensions.get('window').width - 40,
        marginHorizontal: 20,
        marginVertical: 20,
      }}>
      <Text>Title</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={titleChangeHandler}
        value={titleValue}
      />
      <Button title="Save place" onPress={savePlaceHandler} />
    </View>
  );
}
const Stack = createStackNavigator();

export const MapScreen: React.FC<Props> = (props) => {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen
        options={({navigation}) => {
          return {
            headerRightContainerStyle: {paddingRight: 20},
            headerRight: (props) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('AddMap')}>
                  <Text style={{fontSize: 36}}>+</Text>
                </TouchableOpacity>
              );
            },
          };
        }}
        name="Map"
        component={Map}
      />
      <Stack.Screen name="AddMap" component={AddMap} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Camera" component={AppCamera} />
      <Stack.Screen
        options={({navigation, route}) => {
          return {
            headerTitle: route.params.placeTitle,
          };
        }}
        name="PlaceDetail"
        component={PlaceDetailScreen}
      />
      <Stack.Screen
        options={({navigation}) => {
          return {
            headerRightContainerStyle: {paddingRight: 20},
            headerRight: (props) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('AddMap')}>
                  <Text style={{fontSize: 36}}>+</Text>
                </TouchableOpacity>
              );
            },
          };
        }}
        name="PlacesList"
        component={PlacesListScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: '#f84d4d',
    borderBottomWidth: 1,
    fontSize: 18,
    marginBottom: 15,
  },
});
