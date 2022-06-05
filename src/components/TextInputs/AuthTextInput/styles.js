import {StyleSheet} from 'react-native';
import { Fonts } from '../../../assets/fonts';
import {vh, vw} from '../../../units/index';
// import {Fonts} from '../../../assets/fonts';
import theme from '../../../utils/theme';

export default style = StyleSheet.create({
  textInputView: {
    width: 80 * vw,
    height: 7 * vh,
    borderColor:'#e9e9e9',
    borderWidth: 0.1 * vw,
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },
  rightIconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: vh * 5,
    width: vw * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: vw * 5,
    width: vw * 5,
  },
  customStyle: {
    width: 80 * vw,
    height: 7 * vh,
    borderColor: theme.activeTextInputColor,
    borderWidth: 0.1 * vw,
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 1 * vw,
    marginTop: 2 * vh,
  },

  textInputStyle: {
    marginLeft: 2 * vw,
    color: theme.black,
    fontFamily:Fonts.AR_book,
    width: 66 * vw,
  },

  emailStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  emailIconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4 * vw,
  },
});
