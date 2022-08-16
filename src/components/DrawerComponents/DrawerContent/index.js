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
import { showToast } from '../../../redux/Api/HelperFunction';
import { _timeIn, timeOut } from '../../../redux/actions/TimeInOut';
import { useDispatch } from 'react-redux';
import moment from 'moment'
import { store } from '../../../redux/store';
import { userLogout } from '../../../redux/actions/authActions';


const routeOrders = [
  'HomeScreen',
  'AppointmentStack',
  'PaymentStack',
  'ProfileStack',



];
const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: Icons.drawer1,
  },

  AppointmentStack: {
    label: 'About',
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


const DrawerContent = props => {
  const [timeIn, setTimein] = useState(false)
  const dispatch = useDispatch();
  const data = store.getState();


  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };

  const logout=()=>{
    console.log('props.navigation.pop()',props);
    // props.navigation.navigate('AuthStack')

    dispatch(userLogout()).then(response => {
      console.log('response?.status', response);
      if (response?.message=='You have been successfully logged out!') {
        // setVisible(!visible);
        // props.navigation.pop()
        // props.navigation.navigate('AuthStack')


      }
    });
  }

  const MarkTimeIn = () => {

    let data = {
      time: moment().format('hh:mm'),
      date: moment().format('yy-MM-DD')

    }
    if (timeIn == true) {
      dispatch(timeOut(data)).then(response => {
        console.log('response?.status', response);
        if (response.status==true) {
          showToast(response.message)

          setTimein(!timeIn)
        }
      });
    }
    else {
      console.log('datttt', data);

      dispatch(_timeIn(data)).then(response => {
        console.log('response?.status', response);
        if (response.status==true) {
          showToast(response.message)
          setTimein(!timeIn)

        }
      });
    }
  }


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
      <View style={{ alignItems: 'center', marginTop: 10 * vh }}>
        <SubmitButton
          onPress={() => MarkTimeIn()}
          style={styles.submitButtonStyle}
          title={data.commonReducer.attendance ? "Time Out" : "Time In"}
        />
        <SubmitButton
        onPress={()=>logout()}
          style={styles.submitButtonStyle}
          title="Log Out"
        />
        <TextWrapper style={styles.label}>© 2022 Aloha Express Medical. All Rights Reserved</TextWrapper>

      </View>

    </DrawerContentScrollView>
  );
};
export default DrawerContent;
