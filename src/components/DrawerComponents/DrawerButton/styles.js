import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
    borderBottomColor: '#e6e6e6',
    borderWidth: 0.2 * vh,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    paddingVertical: 1 * vh,
    width: 70 * vw
  },
  icon: {
    // tintColor: theme.whiteBackground,
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: theme.black,
    fontFamily:Fonts.AR_extrabold
  },
});

export default styles;
