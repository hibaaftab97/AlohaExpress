import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';


const PaymentDetailScreen = props => {

  const list = [{
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92'
  },
  ]

  const [activeIndex, setActive] = useState(-1)

  return (
    <View style={styles.scroll}>
      <CommonHeader 
        title="Payment Details"
        profile />
      <View style={styles.box}>
        <View style={{}}>
          <TextWrapper style={styles.title}>Date</TextWrapper>
          <TextWrapper style={styles.subtitle}>01 April, 2022</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Amount</TextWrapper>
          <TextWrapper style={[styles.subtitle, { color: theme.primary, fontSize: 2.5 * vh }]}>$238.92</TextWrapper>

        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Payment Method</TextWrapper>
          <TextWrapper style={styles.subtitle}>Master Card</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Phasellus mollis felis vel nulla sodales, in blandit lacus elem</TextWrapper>

        </View>

      </View>



    </View >
  );
};
export default PaymentDetailScreen;