import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';

const PaylogScreen = props => {
  
  return (
      <ImageBackground  
      style={{height:100*vh,width:100*vw,  alignItems: 'flex-end',
      justifyContent:'flex-end'}}
      resizeMode='cover'
      imageStyle={styles.scroll}
      source={require('../../../assets/images/aboutus.png')}>

      </ImageBackground>
  );
};
export default PaylogScreen;