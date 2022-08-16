import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import DrawerNavigator from './DrawerNavigator';
import { store } from '../redux/store';
import {useSelector} from 'react-redux';


function MainNavigator() {

  const Stack = createStackNavigator();
  // const data = store.getState();
  const loggedIn = useSelector(state => state.authReducer.loggedin);


  return (
    <Stack.Navigator>

      {loggedIn ? <Stack.Screen
        options={{ headerShown: false }}
        name="DrawerNavigator"

        component={DrawerNavigator}
     
      />
        : <Stack.Screen
          options={{ headerShown: false }}
          name="AuthStack"
          component={AuthStack}
        />}

    </Stack.Navigator>
  );
}

export default MainNavigator;
