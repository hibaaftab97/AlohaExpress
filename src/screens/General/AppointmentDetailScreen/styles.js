import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 3 * vh,
  },
  box: {
    width: 80 * vw,
    backgroundColor: theme.whiteBackground,
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    paddingVertical: 2 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:1.5*vh,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  circle:{
    width: 16 * vw,
    backgroundColor: theme.whiteBackground,
    height: 16 * vw,
alignItems:'center',
justifyContent:'center',
    paddingHorizontal: 4 * vw,
    marginTop:3*vh,
    paddingVertical: 2 * vh,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    borderRadius:8*vw,
    shadowRadius: 4 * vw,
    elevation: 4,
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.whiteBackground,
    alignItems:'center',
    width:100*vw

  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:'#aeaeae',
    fontFamily:Fonts.AR_medium,
    fontSize:1.5*vh
  },
  headertitle:{
    color:theme.primary,
    fontFamily:Fonts.Inter_SB,
    marginBottom:2*vh,
    fontSize:2*vh
  },
  Icontitle:{
    color:'#969d9f',
    fontFamily:Fonts.Inter_SB,
    textAlign:'center',
    fontSize:1.7*vh
  },
  subtitle:{
    color:theme.black,
    fontFamily:Fonts.AR_medium,
    fontSize:2*vh
  },
  uploadtext:{
    color:'#4879ca',
    fontFamily:Fonts.AR_regular,
    fontSize:1.3*vh
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

