import React, { useState, useEffect } from 'react';
import { View, Dimensions, Image, ImageBackground, RefreshControl, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import TextWrapper from '../../../components/TextWrapper';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Icons } from '../../../assets/images';
import CommonHeader from '../../../components/Headers/CommonHeader';
import { showToast } from '../../../redux/Api/HelperFunction';
import { getprofile } from '../../../redux/actions/appointments';
import { useDispatch } from 'react-redux';
import ScrollWrapper from '../../../components/ScrollWrapper';
import theme from '../../../utils/theme';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = props => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  const [refreshing, setrefreshing] = useState(true)


  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setemail] = useState('');

  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {

      getUpdatedProfile()
      return () => { };
    }, [])
  );


 


  const getUpdatedProfile = () => {
    setrefreshing(true)

    dispatch(getprofile()).then(response => {
      console.log('response?.status', response);
      if (response?.status == true) {
        setUser(response.data)
        setrefreshing(false)

      }
    });
  }
  const renderFields = () => {
    return (

      <View style={styles.fieldContainer}>

        <View style={styles.miniContainer}>
          <View style={{ alignItems: 'center' }}>
            <Image source={Icons.profile}
              style={styles.img} />
            <TextWrapper style={styles.shortdes}>{user?.name}</TextWrapper>
            <TouchableOpacity onPress={() => props.navigation.navigate('EditProfileScreen', {
              user: user
            })}>
              <TextWrapper style={styles.des}>Edit Profile</TextWrapper>

            </TouchableOpacity>
          </View>


          <View >
            <View style={{ marginTop: 2 * vh }}>
              <TextWrapper style={styles.title}>Full Name</TextWrapper>
              <TextWrapper style={styles.subtitle}>{user?.name}</TextWrapper>
            </View>

            <View style={{ marginTop: 2 * vh }}>
              <TextWrapper style={styles.title}>Email Address</TextWrapper>
              <TextWrapper style={styles.subtitle}>{user?.email}</TextWrapper>
            </View>
            <View style={{ marginTop: 2 * vh }}>
              <TextWrapper style={styles.title}>Phone Number</TextWrapper>
              <TextWrapper style={styles.subtitle}>{user?.phone}</TextWrapper>
            </View>

            <View style={{ marginTop: 2 * vh }}>
              <TextWrapper style={styles.title}>Address</TextWrapper>
              <TextWrapper style={styles.subtitle}>{user?.address}</TextWrapper>
            </View>

          </View>



        </View>

      </View>
    );
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[theme.primary]}
          tintColor={theme.defaultInactiveBorderColor}
          refreshing={refreshing}
          onRefresh={() => {
            getUpdatedProfile();
          }}
        />
      }
      style={{ flex: 1, backgroundColor: 'white' }}>
      {
        user !== null && <ScrollWrapper avoidKeyboard={true}

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
      }
    </ScrollView>

  );
};
export default ProfileScreen;