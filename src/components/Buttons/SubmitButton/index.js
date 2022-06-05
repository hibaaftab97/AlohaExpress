import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const SubmitButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled ? props.disabled : false}
      style={[styles.touchableButtonStyle, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.titleTextStyle, props.textStyle]}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
