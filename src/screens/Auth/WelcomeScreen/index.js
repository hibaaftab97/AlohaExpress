import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import TextWrapper from '../../../components/TextWrapper';


const WelcomeScreen = props => {
  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>

          <TextWrapper style={styles.shortdes}>We provide Fast & reliable Medical testing services</TextWrapper>
          <TextWrapper style={styles.des}>Not sure which test is right for you? While all of our diagnost</TextWrapper>
          
          
          <SubmitButton
            style={styles.submitButtonStyle}
            title="Get Started"
            onPress={()=>props.navigation.navigate('LoginScreen')}
          />
          </View>
      </View>
    );
  };
  return (
    // <MainContainer source={'none'}>
      <ImageBackground  
      style={{height:100*vh,width:100*vw, 
      justifyContent:'flex-end'}}
      resizeMode='cover'
      imageStyle={styles.scroll}
      source={require('../../../assets/images/aboutus.png')}>
      {/* <ScrollWrapper avoidKeyboard={true}
      //  style={styles.scroll}
       contentContainerStyle={styles.content}> */}
        {renderFields()}


      {/* </ScrollWrapper> */}
      </ImageBackground>
    // </MainContainer>
  );
};
export default WelcomeScreen;
