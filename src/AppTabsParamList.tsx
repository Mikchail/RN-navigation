import {RouteProp} from '@react-navigation/native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

export type AppTabsParamsList = {
  Home: undefined;
  Search: undefined;
};

// export type AuthNavProps<T extends keyof AppTabsParamsList> = {
//   navigation: BottomTabBarButtonProps<AppTabsParamsList, T>;
//   route: RouteProp<AppTabsParamsList, T>;
// };
