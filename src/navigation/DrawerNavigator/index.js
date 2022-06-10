import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import ProfileScreen from '../../screens/General/ProfileScreen';
import AppointmentStack from '../AppointmentStack';

import AppointmentScreen from '../../screens/General/AppointmentScreen';
import HomeScreen from '../../screens/General/HomeScreen';
import PaymentStack from '../PaymentStack';

import { vh, vw } from '../../units';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 80 * vw,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          borderRadius:1.5*vh,
          shadowRadius: 4 * vw,
          elevation: 10,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AppointmentStack" component={AppointmentStack} />
      <Drawer.Screen name="PaymentStack" component={PaymentStack} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
