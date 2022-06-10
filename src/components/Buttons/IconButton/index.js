import React from 'react';
import { Text, View, TouchableOpacity ,Image} from 'react-native';
import TextWrapper from '../../TextWrapper';
import styles from './styles';

const IconButton = props => {
    return (
        <View>

            <TouchableOpacity
                disabled={props.disabled ? props.disabled : false}
                style={[styles.circle, props.style]}
                onPress={props.onPress}>
                <Image source={props?.icon}
                    style={styles.img} />

            </TouchableOpacity>
            <TextWrapper style={styles.Icontitle}>{props.title}</TextWrapper>

        </View>

    );
};

export default IconButton;
