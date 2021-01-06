import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AuthParamsList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavProps<T extends keyof AuthParamsList> = {
  navigation: StackNavigationProp<AuthParamsList, T>;
  route: RouteProp<AuthParamsList, T>;
};
