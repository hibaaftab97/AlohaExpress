import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Animated, LayoutAnimation, ImageBackground } from 'react-native';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import AuthTextInput from '../../../components/TextInputs/AuthTextInput';
import CodeInput from '../../../components/TextInputs/CodeInput';
import { forgotpassword ,verifyCode,resetpassword} from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';

import SubmitButton from '../../../components/Buttons/SubmitButton';
import styles from './styles';
import { vh, vw } from '../../../units';
import { showToast } from '../../../redux/Api/HelperFunction';

const ForgotPasswordScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState();
  const dispatch = useDispatch();

  const code1Ref = useRef();
  const code2Ref = useRef();
  const code3Ref = useRef();
  const code4Ref = useRef();

  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");

  const [step, setStep] = useState(1);
  const [animation, setAnimation] = useState(new Animated.Value(20));
  const boxStyle = {
    width: animation,
  };

  const sendCode = () => {
    const data = {
      email: email,
    };


    if (email == '') {
      showToast('Enter email');

    }

    else if (!validateEmail(email)) {
      showToast('Please Enter a Valid Email');
    }
    else {
      dispatch(forgotpassword(data)).then(response => {
        console.log('response?.status', response);
        if (response) {
          // setVisible(!visible);\
          setStep(step + 1);
        }
      });
    }


  };

  const _verifyCode = () => {
    const data = {
      code: code1+code2+code3+code4,
    };


    if (code1 == ''||code2 == ''||code3 == ''||code4 == '') {
      showToast('Enter code');

    }

   
    else {
      dispatch(verifyCode(data)).then(response => {
        console.log('response?.status', response);
        if (response) {
          // setVisible(!visible);\
          setStep(step + 1);
        }
      });
    }


  };

  const _resetPassword = () => {
    const data = {
      password: password,
      code:code1+code2+code3+code4,
    };


    if (password == '') {
      showToast('Enter password');

    }

   
    else {
      dispatch(resetpassword(data)).then(response => {
        console.log('response?.status', response);
        if (response) {
          // setVisible(!visible);\
          props.navigation.navigate('LoginScreen')
        }
      });
    }


  };

  const onChange = (field_no, e) => {
    console.log("onChange==>", code2Ref)
    if (e.nativeEvent.text != undefined) {
      if (e.nativeEvent.text.length > 0) {
        switch (field_no) {
          case 0: {
            setCode1(e.nativeEvent.text);
            code2Ref.current.focus();
            return;
          }
          case 1: {
            code3Ref.current.focus();
            setCode2(e.nativeEvent.text);
            return;
          }
          case 2: {
            code4Ref.current.focus();
            setCode3(e.nativeEvent.text);
            return;
          }
          case 3: {
            setCode4(e.nativeEvent.text);
            return;
          }
        }
      } else {
        switch (field_no) {
          case 0: {
            setCode1(e.nativeEvent.text);
            return;
          }
          case 1: {
            setCode2(e.nativeEvent.text);
            return;
          }
          case 2: {
            setCode3(e.nativeEvent.text);
            return;
          }
          case 3: {
            setCode4(e.nativeEvent.text);
            return;
          }
        }
      }
    }
  };

  const onKeyPress = (field_no, e) => {
    console.log('onKeyPressonKeyPress', field_no, e);
    if (e.nativeEvent.text == undefined && e.nativeEvent.key == "Backspace") {
      switch (field_no) {
        case 0: {
          return;
        }

        case 1: {
          code1Ref.current.focus();

          return;
        }

        case 2: {
          code2Ref.current.focus();

          return;
        }

        case 3: {
          code3Ref.current.focus();

          return;
        }
      }
    }
  };

  const renderConditionalFields = () => {
    if (step == 1) {
      return (
        <View style={styles.fieldsView}>
          <TextWrapper style={styles.shortdes}>Forgot Password</TextWrapper>

          <TextWrapper style={styles.des}>Dont worry! We have got you covered</TextWrapper>

          <AuthTextInput
            value={email}
            onChangeText={text => setEmail(text)}

            placeHolder="Enter your Email"
          />
        </View>
      );
    }
    if (step == 2) {
      return (
        <View style={styles.fieldsView}>
          <TextWrapper style={styles.shortdes}>Enter OTP</TextWrapper>

          <TextWrapper style={styles.des}>A 4 digit number has been sent to your email</TextWrapper>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <CodeInput
              value={code1}
              onSubmitEditing={() => code2Ref.focus()}
              onKeyPress={(e) => onKeyPress(0, e)}
              onChange={(e) => onChange(0, e)}
              selectTextOnFocus={true}
              ref={code1Ref}
              maxLength={1}
              keyboardType='number-pad'
            />
            <CodeInput
              value={code2}
              onSubmitEditing={() => code3Ref.focus()}
              onKeyPress={(e) => onKeyPress(1, e)}
              onChange={(e) => onChange(1, e)}
              selectTextOnFocus={true}
              ref={code2Ref}
              maxLength={1}
              keyboardType='number-pad'
            />
            <CodeInput
              value={code3}
              onSubmitEditing={() => code4Ref.focus()}
              onKeyPress={(e) => onKeyPress(2, e)}
              onChange={(e) => onChange(2, e)}
              selectTextOnFocus={true}
              ref={code3Ref}
              maxLength={1}
              keyboardType='number-pad'
            />
            <CodeInput
              value={code4}
              onKeyPress={(e) => onKeyPress(3, e)}
              onChange={(e) => onChange(3, e)}
              selectTextOnFocus={true}
              ref={code4Ref}
              maxLength={1}
              keyboardType='number-pad'
            />
          </View>

        </View>
      );
    }
    if (step == 3) {
      return (
        <View style={styles.fieldsView}>
          <TextWrapper style={styles.shortdes}>Reset Password</TextWrapper>

          <TextWrapper style={styles.des}>Set a new password for your account</TextWrapper>
          <AuthTextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeHolder="New Password"
          />
          <AuthTextInput
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeHolder="Confirm Password"
          />
        </View>
      );
    }
  };

  const handleOnPress = () => {
    if (step == 1) {
      sendCode()
      // Animated.timing(animation, {
      //   toValue: 40,
      // }).start();
    }
    if (step == 2) {
      // Animated.timing(animation, {
      //   toValue: 60,
      // }).start();
      _verifyCode()

    }
  }
  const renderFields = () => {
    return (
      <View style={styles.fieldContainer}>
        <View style={styles.miniContainer}>



          {renderConditionalFields()}

          {step == 3 ? (
            <SubmitButton
              onPress={_resetPassword}

              style={styles.submitButtonStyle}
              titleTextStyle={styles.titleTextStyle}
              title="Update"
            />
          ) : (
            <SubmitButton
              onPress={handleOnPress}
              style={styles.submitButtonStyle}
              titleTextStyle={styles.titleTextStyle}
              title="Submit"
            />
          )}
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
export default ForgotPasswordScreen;
