import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import PayLogScreen from '../screens/General/PayLogScreen';
import PaymentDetailScreen from '../screens/General/PaymentDetailScreen';


function PaymentStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="PayLogScreen"
        component={PayLogScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="PaymentDetailScreen"
        component={PaymentDetailScreen}
      />   
         
    </Stack.Navigator>
  );
}

export default PaymentStack;
