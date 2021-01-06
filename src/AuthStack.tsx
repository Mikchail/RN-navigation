import React, {Component} from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {AuthNavProps, AuthParamsList} from './AuthParamsList';
import {AuthContext} from './AuthProvider';
import {Center} from './style';
import {Button, Text} from 'react-native';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamsList>();

class Login extends Component<AuthNavProps<'Login'>> {
  static contextType = AuthContext;
  public render() {
    const {user, login} = this.context;
    const {navigation, route} = this.props;
    return (
      <Center>
        <Text>Login</Text>
        <Button
          title="go to login"
          onPress={() => navigation.navigate('Register')}
        />
        <Button title="log in" onPress={() => login()} />
      </Center>
    );
  }
}
function Register({navigation}: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>Register</Text>
    </Center>
  );
}
export class AuthStack extends Component<AuthStackProps, {}> {
  render() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerTitle: 'Login Updata',
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
}
