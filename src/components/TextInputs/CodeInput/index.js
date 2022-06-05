import React, {useState,useRef, useImperativeHandle} from 'react';
import {View, TextInput, Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import {authIcons} from '../../../assets/images';
import { vw } from '../../../units';

const CodeInput = React.forwardRef((props,ref) => {
  const [focus, setFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => {
    setIsShow(!isShow);
  };

  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <View
      style={[focus ? styles.customStyle : styles.textInputView, props.style]}>
    
      <TextInput
        value={props.value}
        maxLength={1}
        ref={inputRef}
        onChangeText={props.onChangeText}
        style={[styles.textInputStyle,props?.secureTextEntry&& {width:60*vw}]}
        placeholder={props.placeHolder}
        placeholderTextColor={theme.defaultInactiveBorderColor}
        secureTextEntry={props.type ? true : false}
        // onFocus={() => setFocus(true)}
        {...props}
        // keyboardType='email-address'
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry && !isShow}
      />
  
    </View>
  );
});

export default CodeInput
