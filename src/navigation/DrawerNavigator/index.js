import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import ProfileScreen from '../../screens/General/ProfileScreen';
import PayLogScreen from '../../screens/General/PayLogScreen';
import AppointmentScreen from '../../screens/General/AppointmentScreen';
import HomeScreen from '../../screens/General/HomeScreen';

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
          width: 70 * vw,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Drawer.Screen name="PayLogScreen" component={PayLogScreen} />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
