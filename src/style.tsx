import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CenterProps {
  children?: any;
}
export const Center: React.FC<CenterProps> = ({children}) => {
  return <View style={styles.flex}>{children}</View>;
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
