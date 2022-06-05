import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity } from 'react-native';
import MainContainer from '../../../components/MainContainer';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';


const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>

          <TextWrapper style={styles.shortdes}>LogIn</TextWrapper>
          <TextWrapper style={styles.des}>Please login to continue</TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your Mail"
              keyboardType="email-address"
            />
            <AuthTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeHolder="Enter Your Password"
              secureTextEntry
              type="password"
            />

          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
            <TextWrapper style={styles.fpw}>Fotgot Password</TextWrapper>

          </TouchableOpacity>

          <SubmitButton
            style={styles.submitButtonStyle}
            title="LogIn"
          />
        </View>

      </View>
    );
  };
  return (
    <ScrollWrapper avoidKeyboard={true}
      contentContainerStyle={styles.content}>
      <ImageBackground
        style={{
          height: 100 * vh, width: 100 * vw, alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}
        resizeMode='cover'
        imageStyle={styles.scroll}
        source={require('../../../assets/images/aboutus.png')}>

        {renderFields()}



      </ImageBackground>
    </ScrollWrapper>


  );
};
export default LoginScreen;
