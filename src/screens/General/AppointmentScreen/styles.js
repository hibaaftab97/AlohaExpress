import { StyleSheet } from 'react-native';
import { Fonts } from '../../../assets/fonts';
import { vh, vw } from '../../../units/index';
import theme from '../../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 30 * vw,
    height:4*vh,
    marginTop: 3 * vh,
    backgroundColor:theme.black
  },
  smallbox:{
    width: 38 * vw,
    backgroundColor: theme.primary,
    paddingHorizontal: 4 * vw,
    paddingVertical: 1 * vh,
    alignItems:'center',
   borderRadius:vh,
    justifyContent:'center'
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
  headerbox:{
    width: 80 * vw,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 2 * vw,
    marginTop:3*vh,
    paddingVertical: 1 * vh,
   borderRadius:vh
   
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.whiteBackground,
    alignItems:'center'

  },
  content: {
    alignItems: 'center',
    // justifyContent:'flex-end'
    backgroundColor: theme.whiteBackground
  },
  title:{
    color:'#aeaeae',
    fontFamily:Fonts.AR_medium,
    fontSize:1.5*vh,
    textAlign:'left'
  },
  subtitle:{
    color:theme.black,
    fontFamily:Fonts.AR_medium,
    fontSize:2*vh
  },
  headertitle:{
    color:theme.whiteBackground,
    fontFamily:Fonts.Inter_SB,
    fontSize:1.5*vh
  },
  img:{
    width:6*vw,
    height:6*vw,
    resizeMode:'contain'
  }

});
export default styles;

