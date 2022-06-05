import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import theme from '../../utils/theme';
import {vh, vw} from '../../units';

const MainContainer = props => {
  return (
    <View
      {...props}
      style={[styles.container, props.style]}
      // source={props.source ? props.source : generalImages.backgroundImage}
    >
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.defaultBackgroundColor,
    flex: 1,
  },
});
export default MainContainer;
