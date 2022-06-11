import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../../../components/TextWrapper';
import styles from './styles';
import { generalImages, Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const CommonHeader = props => {
  const navigation = useNavigation();
  const renderHeaderButton = () => {
    if (props.type === 'drawer') {
      return (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButtonView}>
          <Image source={Icons.menu} style={styles.drawerIconStyle} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.drawerButtonView}>
          <Image
            source={Icons.leftArrow}
            style={[
              styles.drawerIconStyle,
              {
                tintColor: props?.tintColor
                  ? props?.tintColor
                  : theme.black,
              },
            ]}
          />
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={{ alignItems: 'center', }}>
      <View style={styles.searchView}>
        {renderHeaderButton()}
        <TextWrapper
          numberOfLines={2}
          style={[styles.searchTextStyle, props.style]}>
          {props.title}
        </TextWrapper>

        <View style={styles.searchIconsView}>
          <TouchableOpacity
            onPress={props.onPress}
            style={styles.searchIconButtonView}>
            {props.profile ? (

              <TouchableOpacity onPress={()=>{navigation.navigate('ProfileStack')}}>
                <Image style={styles.searchIconStyle} source={Icons.profile} />

              </TouchableOpacity>
            ) : props.edit ? (
              <Image style={styles.searchIconStyle} source={Icons.edit} />
            ) : null}
            {/* <Image style={styles.searchIconStyle} source={icons.search} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommonHeader;
