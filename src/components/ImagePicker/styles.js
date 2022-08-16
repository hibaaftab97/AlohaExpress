import { StyleSheet } from 'react-native';
import { vh, vw } from '../../units/index';
import theme from '../../utils/theme';

export default style = StyleSheet.create({
    modalTouchable: {
        backgroundColor: "rgba(0,0,0,.5)",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

        width: 100 * vw
    },
    modalContainer: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 20 * vw,
        paddingTop: 20 * vw,
        paddingBottom: 20 * vw,
        alignItems: "center",
        paddingHorizontal: 20 * vw
    },

    text: {
        color: 'black',
        fontSize: 2 * vh
    },
    cross: {
        width: 4 * vw,
        height: 4 * vw,

    },

    imageBg: {
        backgroundColor: "white",
        borderTopRightRadius: 15 * vw,
        borderTopLeftRadius: 20 * vw,
        position: "absolute",

        paddingBottom: 10 * vw,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },

        bottom: 0,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 25 * vh,
        width: 100 * vw,
        // minHeight:vh*20,
    },


    crossContainer: {
        alignItems: "flex-end",
        alignSelf: "flex-end",
        paddingTop: 10 * vw,
        paddingRight: 10 * vw
    },
    // cross:{
    //   width: vw * 3,

    // },
    container: {
        paddingHorizontal: 3 * vw,
        // marginTop:10*vw,
    },






});
