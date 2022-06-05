import React from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import Navigator from './src/navigation/index';
import theme from './src/utils/theme';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = props => {
  return (
        <View style={styles.container}>
          <StatusBar
            // barStyle="light-content"
            backgroundColor={theme.defaultBackgroundColor}
            translucent={true}
          />
          
            <Navigator />
        </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
