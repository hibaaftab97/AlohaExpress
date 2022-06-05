import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';

function MainNavigator() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>

         <Stack.Screen
          options={{headerShown: false}}
          name="AuthStack"
          component={AuthStack}
        />
        
    </Stack.Navigator>
  );
}

export default MainNavigator;
