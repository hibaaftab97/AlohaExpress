import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {Icons} from '../../../assets/images';
import {vw, vh} from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: Icons.drawer1,
  },

  AppointmentStack: {
    label: 'Appointment',
    icon: Icons.drawer2,
  },

  PaymentStack: {
    label: 'Pay Logs',
    icon: Icons.drawer3,
  },
  ProfileStack: {
    label: 'My Profile',
    icon: Icons.drawer4,
  },

};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };
  const routeConfigs = drawerRoutes[props.routeName];
  console.log('DrawerButton :', routeConfigs);
  if (!routeConfigs) {
    return null;
  }
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <Image style={styles.icon} source={routeConfigs.icon} />
      <TextWrapper style={styles.label}>{routeConfigs.label}</TextWrapper>
    </TouchableOpacity>
  );
};

export default DrawerButton;
