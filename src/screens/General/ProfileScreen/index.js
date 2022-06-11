import React, { useState } from 'react';
import { View, Dimensions, Image, ImageBackground, Text,TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Icons } from '../../../assets/images';
import CommonHeader from '../../../components/Headers/CommonHeader';

import ScrollWrapper from '../../../components/ScrollWrapper';


const ProfileScreen = props => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setemail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>
          <View style={{alignItems:'center'}}>
          <Image source={Icons.profile}
            style={styles.img} />
          <TextWrapper style={styles.shortdes}>Smith Johnson</TextWrapper>
          <TouchableOpacity onPress={()=>props.navigation.navigate('EditProfileScreen')}>
          <TextWrapper style={styles.des}>Edit Profile</TextWrapper>

          </TouchableOpacity>
          </View>
        

          <View >
          <View style={{marginTop:2*vh}}>
          <TextWrapper style={styles.title}>Fist Name</TextWrapper>
          <TextWrapper style={styles.subtitle}>Smith</TextWrapper>
        </View>
        <View style={{marginTop:2*vh}}>
          <TextWrapper style={styles.title}>Last Name</TextWrapper>
          <TextWrapper style={styles.subtitle}>Johnson</TextWrapper>
        </View>
        <View style={{marginTop:2*vh}}>
          <TextWrapper style={styles.title}>Email Address</TextWrapper>
          <TextWrapper style={styles.subtitle}>Johnson@gmail.com</TextWrapper>
        </View>
            
          </View>


          
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