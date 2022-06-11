import React, { useState } from 'react';
import { View, Dimensions, Image, ImageBackground, Text } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Icons } from '../../../assets/images';
import CommonHeader from '../../../components/Headers/CommonHeader';

import ScrollWrapper from '../../../components/ScrollWrapper';


const ProfileScreen = props => {
  const [fName, setfName] = useState('Smith');
  const [lName, setlName] = useState('Johnson');
  const [email, setemail] = useState('Johnson@gmail.com');

  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>
          <View>
            <Image source={Icons.profile}
              style={styles.img} />
            <View style={styles.circle}>
              <Image source={Icons.camera}
                style={styles.imgIcon} />
            </View>

          </View>

          <TextWrapper style={styles.shortdes}>Smith Johnson</TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={fName}
              icon
              onChangeText={text => setfName(text)}
              placeHolder=" First Name"
            />
            <AuthTextInput
              value={lName}
              icon
              onChangeText={text => setlName(text)}
              placeHolder="Last Name"

            />
            <AuthTextInput
              value={email}
              icon
              onChangeText={text => setemail(text)}
              placeHolder="Email address"

            />
            <AuthTextInput
              value={password}
              icon
              onChangeText={text => setPassword(text)}
              placeHolder="Password"

            />
            <AuthTextInput
              value={confirmpassword}
              icon
              onChangeText={text => setconfirmPassword(text)}
              placeHolder="Confirm password"

            />
          </View>


          <SubmitButton
          onPress={()=>props.navigation.goBack()}
            style={styles.submitButtonStyle}
            title="Save"
          />
        </View>

      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <ScrollWrapper avoidKeyboard={true}
        contentContainerStyle={styles.content}>

        <ImageBackground
          style={{
            width: 100 * vw, height: 100 * vh

          }}
          resizeMode='cover'
          imageStyle={styles.scroll}
          source={require('../../../assets/images/ProfileBG.png')}>
          <CommonHeader
            edit
          />
          {renderFields()}

        </ImageBackground>
      </ScrollWrapper>
    </View>

  );
};
export default ProfileScreen;