import React, { useState } from 'react';
import styles from './styles';
import { Image, ImageBackground, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress, DrawerContentScrollView, } from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerButton from '../DrawerButton';
import SubmitButton from '../../../components/Buttons/SubmitButton';



const routeOrders = [
  'HomeScreen',
  'AppointmentScreen',
  'PaymentStack',
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

  PaymentStack: {
    label: 'Pay Logs',
    icon: Icons.drawer3,
  },
  ProfileScreen: {
    label: 'My Profile',
    icon: Icons.drawer4,
  },
};


const DrawerContent = props => {
const [timeIn,setTimein]=useState(false)

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
      <ImageBackground source={Icons.drawerbg}
        imageStyle={{ width: 80 * vw, height: 50 * vh }}
        resizeMode='cover'
        style={{ width: 80 * vw, height: 20 * vh, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Icons.logo}
          style={styles.logo} />
      </ImageBackground>

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
      <View style={{alignItems:'center',marginTop:10*vh}}>
      <SubmitButton
      onPress={()=>setTimein(!timeIn)}
          style={styles.submitButtonStyle}
          title={timeIn?"Time Out":"Time In"}
        />
        <SubmitButton
          style={styles.submitButtonStyle}
          title="Log Out"
        />
      <TextWrapper style={styles.label}>© 2022 Aloha Express Medical. All Rights Reserved</TextWrapper>

      </View>

    </DrawerContentScrollView>
  );
};
export default DrawerContent;
