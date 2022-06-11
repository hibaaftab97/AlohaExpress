import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 3 * vh,
  },
  circle:{
      height:7*vw,
      width:7*vw,
      borderRadius:3.5*vw,
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      right:2*vw,
      bottom:0,
      backgroundColor:theme.primary
  },
  fieldContainer: {
    // backgroundColor: theme.whiteBackground,
    paddingVertical: 6 * vh,
    width: 100 * vw,
    borderTopRightRadius: 15 * vw,
  },
  scroll: {
    flex: 1,

  },
  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
  },
  shortdes: {
    color: theme.black,
    fontSize: 2.5 * vh,
    textAlign: 'center',

    marginTop:1.5*vh,
    fontFamily: Fonts.AR_regular

  },
  des: {
    color: theme.primary,
    fontSize: 2 * vh,
    textAlign: 'center',
    marginTop: 1 * vh,
    fontFamily: Fonts.AR_medium

  },
  img: {
      width:30*vw,
      height:30*vw,
      resizeMode:'contain'
  },
  imgIcon: {
    width:4*vw,
    height:4*vw,
    resizeMode:'contain',
    tintColor:'white'
},
  miniContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },
});
export default styles;
