import React, { useState } from 'react';
import styles from './styles';
import { Image, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress ,DrawerContentScrollView,} from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { vh } from '../../../units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerButton from '../DrawerButton';


const routeOrders = [
  'HomeScreen',
  'AppointmentScreen',
  'PayLogScreen',
  'ProfileScreen',



];
const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: Icons.drawer1,
  },

  AppointmentScreen: {
    label: 'About',
    icon: Icons.drawer2,
  },

  PayLogScreen: {
    label: 'Pay Logs',
    icon: Icons.drawer3,
  },
  ProfileScreen: {
    label: 'Orders',
    icon: Icons.drawer4,
  },
};

const DrawerContent = props => {
  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };
  const progress = useDrawerProgress();
  // const opacity = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-4, 1],
  // });

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerScrollView}>
      <TouchableOpacity
        // onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.crossButtonView}>
      </TouchableOpacity>
      <View style={styles.header}>

        <TextWrapper
          numberOfLines={3}
          style={{
            color: theme.whiteBackground,
            marginTop: 2 * vh,
          }}
        >
          {/* {user} */}
          Sarah Parker
        </TextWrapper>
        <TextWrapper
          numberOfLines={3}
          style={{
            color: theme.whiteBackground,
            fontSize: 1.7 * vh,
            // marginTop: 2 * vh,
          }}
        >
          {/* {user} */}
          @sarah.parker
        </TextWrapper>
      </View>
      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      </View>


    </DrawerContentScrollView>
  );
};
export default DrawerContent;
