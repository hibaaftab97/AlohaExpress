import { StyleSheet } from 'react-native';
import { vh, vw } from '../../../units/index';
import { Fonts } from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    marginTop: 5 * vh,
    width: 90 * vw,
    justifyContent: 'space-between',
  },

  searchTextStyle: {
    alignSelf: 'center',
    color:theme.primary,
    fontFamily: Fonts.AR_extrabold,
    fontSize: 2.5 * vh,
  },

  searchIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 7 * vw,
    height: 7 * vh,
  },

  searchIconButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 7 * vh,
    width: 7 * vw,
  },

  drawerIconStyle: {
    resizeMode: 'contain',
    height: 6 * vw,
    width: 6 * vw,
  },

  drawerButtonView: {
    justifyContent: 'center',
  },
});
