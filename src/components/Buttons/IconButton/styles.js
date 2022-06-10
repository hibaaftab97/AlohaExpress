import {StyleSheet} from 'react-native';
// import {Fonts} from '../../../assets/fonts/index';
import theme from '../../../utils/theme';
import {vw, vh} from '../../../units/index';
import { Fonts } from '../../../assets/fonts';

export default style = StyleSheet.create({
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

      Icontitle:{
        color:'#969d9f',
        fontFamily:Fonts.Inter_SB,
        marginTop:2*vh,
        textAlign:'center',
        fontSize:1.7*vh
      },
      img:{
        width:6*vw,
        height:6*vw,
        resizeMode:'contain'
      }
    
});
