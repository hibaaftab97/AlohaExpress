import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';
import IconButton from '../../../components/Buttons/IconButton'

const PaymentDetailScreen = props => {

  const list = [{
    date: "Blood Report 02/05/22",
    upload: 'Uploaded by Smith Jhonson at 4:02 PM'
  },
  {
    date: "CPR Report 02/05/22",

    upload: 'Uploaded by Smith Jhonson at 4:02 PM'
  },
  {
    date: "CPR Report 02/05/22",

    upload: 'Uploaded by Smith Jhonson at 4:02 PM'
  },
 
  ]


  const [activeIndex, setActive] = useState(-1)

  const patientDetails = () => {
    return (
      <View style={styles.box}>
        <TextWrapper style={styles.headertitle}>Patient Details</TextWrapper>

        <View style={{}}>
          <TextWrapper style={styles.title}>Name</TextWrapper>
          <TextWrapper style={styles.subtitle}>Smith Johnson</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Email</TextWrapper>
          <TextWrapper style={styles.subtitle}>smithjohnson@gmail.com</TextWrapper>

        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Contact</TextWrapper>
          <TextWrapper style={styles.subtitle}>+1 (000) 000 0009</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Address</TextWrapper>
          <TextWrapper style={styles.subtitle}>SYV House No F54/ M. USA</TextWrapper>
        </View>


      </View>
    )
  }

  const AppoinDetails = () => {
    return (
      <View style={styles.box}>
        <TextWrapper style={styles.headertitle}>Appointment Details</TextWrapper>

        <View style={{}}>
          <TextWrapper style={styles.title}>Date</TextWrapper>
          <TextWrapper style={styles.subtitle}>01 April, 2022</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Time</TextWrapper>
          <TextWrapper style={styles.subtitle}>04:20 PM</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Service Name</TextWrapper>
          <TextWrapper style={styles.subtitle}>{props.route?.params?.service}</TextWrapper>
        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Amount</TextWrapper>
          <TextWrapper style={[styles.subtitle, { color: theme.primary, fontSize: 2.5 * vh }]}>$238.92</TextWrapper>

        </View>
        <View style={{ marginTop: 2 * vh }}>
          <TextWrapper style={styles.title}>Payment Method</TextWrapper>
          <TextWrapper style={styles.subtitle}>Master Card</TextWrapper>
        </View>


      </View>
    )
  }
  const renderItem = ({ item, index }) => {
    return (
     
      <View style={{marginTop:2*vh}}>
      <TextWrapper style={styles.title}>PDF</TextWrapper>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View>
          <TextWrapper style={styles.subtitle}>{item.date}</TextWrapper>
          <TextWrapper style={styles.uploadtext}>{item.upload}</TextWrapper>

          </View>
          <TouchableOpacity>
          <Image  source={Icons.download}
          style={styles.img}/>
          </TouchableOpacity>
        
      </View>
    </View>
    )
  }
  const AttachDetails = () => {
    return (
      <View style={styles.box}>
        <TextWrapper style={[styles.headertitle,{marginBottom:0}]}>Attachments</TextWrapper>

       
        <FlatList
        data={list}
        renderItem={renderItem}

        showsVerticalScrollIndicator={false}
      />


      </View>
    )
  }

  return (
    <View style={styles.scroll}>
      <CommonHeader
        title={props.route?.params?.service}
        profile />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{flex:1,width:100*vw}}
      contentContainerStyle={{alignItems:'center'}}>
        {patientDetails()}
        {AppoinDetails()}
        {AttachDetails()}

        <View style={{ flexDirection: 'row',
        paddingBottom:5*vh,alignItems:'center',justifyContent:'space-between' }}>
          <View>
         <IconButton  title="Upload"
         icon={Icons.upload}/>

          </View>
        
        </View>
      </ScrollView>

    </View >
  );
};
export default PaymentDetailScreen;