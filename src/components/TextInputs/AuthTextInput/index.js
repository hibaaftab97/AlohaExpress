import React, {useState} from 'react';
import {View, TextInput, Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import {authIcons} from '../../../assets/images';
import { vw } from '../../../units';

const AuthTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => {
    setIsShow(!isShow);
  };
  return (
    <View
      style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
      {!props.icon&&<View style={styles.emailIconView}>
        <Image
          source={
            props.type === 'password' ? authIcons.password : authIcons.email
          }
          style={[
            styles.emailStyle,
            {
              tintColor: focus
                ? theme.activeTextInputColor
                : theme.defaultInactiveBorderColor,
            },
          ]}
        />
      </View>}
      <TextInput
        value={props.value}
        maxLength={props?.maxLength}
        onChangeText={props.onChangeText}
        style={[styles.textInputStyle,props?.secureTextEntry&& {width:60*vw},props?.textConStyle]}
        placeholder={props.placeHolder}
        placeholderTextColor={theme.defaultInactiveBorderColor}
        secureTextEntry={props.type ? true : false}
        onFocus={() => setFocus(true)}
        // keyboardType='email-address'
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry && !isShow}
        // {...props}
      />
      {props?.secureTextEntry && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handlePassword}>
            <Image
              source={isShow ? authIcons.eyeopen : authIcons.eyeclose}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
    </View>
  );
};

export default AuthTextInput;
