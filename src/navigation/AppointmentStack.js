import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import AppointmentScreen from '../screens/General/AppointmentScreen';
import AppointmentDetailScreen from '../screens/General/AppointmentDetailScreen';


function AppointmentStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="AppointmentScreen"
        component={AppointmentScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="AppointmentDetailScreen"
        component={AppointmentDetailScreen}
      />   
         
    </Stack.Navigator>
  );
}

export default AppointmentStack;
