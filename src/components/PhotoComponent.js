import React, {Component} from 'react';

import {
  PermissionsAndroid,
  Platform,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

async function savePicture() {
  if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    return;
  }

  CameraRoll.save(tag, {type, album});
}

export class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  async hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  _handleButtonPress = () => {
    console.log(this.hasAndroidPermission());

    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    })
      .then((r) => {
        this.setState({photos: r.edges});
      })
      .catch((err) => {
        console.log(err);

        //Error Loading Images
      });
  };
  render() {
    return (
      <SafeAreaView>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView 
          contentInsetAdjustmentBehavior="automatic"
        >
        {/* style={{paddingBottom: 100, flexDirection: 'row', width: '100%',flexWrap: 'wrap'}} */}
          <View
            >
            {this.state.photos.map((p, i) => {
              return (
                <Image
                  key={i}
                  style={{
                    width: '33%',
                    height: 100,
                  }}
                  source={{uri: p.node.image.uri}}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
