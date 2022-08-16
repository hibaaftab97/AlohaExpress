import React, { useState } from 'react';
import { View, Dimensions, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Icons } from '../../../assets/images';
import CommonHeader from '../../../components/Headers/CommonHeader';
import ImagePicker from '../../../components/ImagePicker'
import ScrollWrapper from '../../../components/ScrollWrapper';
import { updateProfile } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../redux/Api/HelperFunction';
import { validateEmail } from '../../../utils';

const ProfileScreen = props => {
  const [fName, setfName] = useState(props?.route?.params?.user?.name);
  const [lName, setlName] = useState('Johnson');
  const [email, setemail] = useState(props?.route?.params?.user?.email);
  const [profile, setProfile] = useState("");
  const [address, setAddress] = useState(props?.route?.params?.user?.address);
  const [phone, setphone] = useState(props?.route?.params?.user?.phone);

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const update = () => {
    

   
    if (email == '') {
      showToast('Enter email');

    }
    else if (!validateEmail(email)) {
      showToast('Please Enter a Valid Email');
    }
    else if (phone == '') {
      showToast('Enter phone');

    }
    else if (address == '') {
      showToast('Enter Address');

    }
    else {
      const data = {
        name:fName,
        email: email,
        address:address,
        phone: phone,
        iamge:{
          uri:profile?.uri,
          fileName:profile?.fileName,
          type:profile?.type
        }
      };
      dispatch(updateProfile(data)).then(response => {
        console.log('response?.status', response);
        // if (response?.status) {
        //   // setVisible(!visible);
        //   props.navigation.navigate('DrawerNavigator')


        // }
      });
    }


  };


  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>
          <TouchableOpacity onPress={()=> setModalVisible(true)}>
            <Image source={profile==''? Icons.profile:{uri:profile?.uri}}
              style={styles.img} />
            <View style={styles.circle}>
              <Image source={Icons.camera}
                style={styles.imgIcon} />
            </View>

          </TouchableOpacity>

          <TextWrapper style={styles.shortdes}>{props?.route?.params?.user?.name}</TextWrapper>

          <View style={styles.fieldsView}>
            <AuthTextInput
              value={fName}
              icon
              onChangeText={text => setfName(text)}
              placeHolder=" First Name"
            />
           
            <AuthTextInput
              value={email}
              icon
              onChangeText={text => setemail(text)}
              placeHolder="Email address"

            />
              <AuthTextInput
              value={phone}
              icon
              onChangeText={text => setphone(text)}
              placeHolder="Phone Number"

            />
            <AuthTextInput
              value={address}
              icon
              style={{height:10*vh}}
              multiline
              onChangeText={text => setAddress(text)}
              placeHolder="Address"
              textConStyle={{height:10*vh}}
            />
           
          </View>


          <SubmitButton
          onPress={update}
            style={styles.submitButtonStyle}
            title="Save"
          />
        </View>

      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
  <ImagePicker
        modalVisible={modalVisible}
        profilepicture={setProfile}
        setModalVisible={setModalVisible}
      />
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