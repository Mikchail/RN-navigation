import React, {PureComponent} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  ImageBackgroundBase,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      avatarSource: false,
    };
  }

  // More info on all the options is below in the API Reference... just some common use cases shown here
  takePhoto = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.takePhoto();
          }}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <View>
          {Boolean(this.state.avatarSource) && (
            <Image  style={{width: 200,height: 200}} source={this.state.avatarSource} />
          )}
        </View>
      </View>
    );
  }
}

export const AppCamera = () => {
  return (
    <SafeAreaView>
      <Camera />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
});
