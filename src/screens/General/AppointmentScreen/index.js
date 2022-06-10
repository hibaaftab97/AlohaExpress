import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { Fonts } from '../../../assets/fonts';


const AppointmentScreen = props => {

  const list = [{
    date: "01 April, 2022",
    amount: '$238.92',
    time: "04:20 PM",
    service: 'BP - Blood Pressure'
  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    time: "04:20 PM",
    service: 'BP - Blood Pressure'


  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    time: "04:20 PM",
    service: 'BP - Blood Pressure'


  },
  {
    date: "01 April, 2022",
    amount: '$238.92',
    time: "04:20 PM",
    service: 'BP - Blood Pressure'


  },
  ]

  const [schedule,showSchedule]=useState(true)

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.box}
      onPress={()=> props.navigation.navigate('AppointmentDetailScreen',{
        service:item?.service
      })}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

          <View>
            <TextWrapper style={styles.title}>Date</TextWrapper>
            <TextWrapper style={styles.subtitle}>{item.date}</TextWrapper>

          </View>
          <View>
            <TextWrapper style={styles.title}>Time</TextWrapper>

            <TextWrapper style={styles.subtitle}>{item.time}</TextWrapper>
          </View>

        </View>

        <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', }}>

          <View>
            <TextWrapper style={styles.title}>Service Name</TextWrapper>
            <TextWrapper style={styles.subtitle}>{item.service}</TextWrapper>

          </View>

          <View>
            <SubmitButton
              style={styles.submitButtonStyle}
              textStyle={{ fontFamily: Fonts.Inter_SB, fontSize: 1.5 * vh }}
              title="RESCHEDULE"
            />
          </View>

        </View>

      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader type='drawer'
        title="Appointments"
        profile />
      <View style={styles.headerbox}>
        <View style={{flexDirection:'row',}}>
        <TouchableOpacity 
        onPress={()=>showSchedule(!schedule)}
        style={[styles.smallbox,{backgroundColor:schedule? theme.primary:'transparent'}]}>
          <TextWrapper style={[styles.headertitle,{color:schedule? theme.whiteBackground:'#767676'}]}>Schedules</TextWrapper>

        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>showSchedule(!schedule)}
        style={[styles.smallbox,{backgroundColor:!schedule? theme.primary:'transparent'}]}>
          <TextWrapper style={[styles.headertitle,{color:!schedule? theme.whiteBackground:'#767676'}]}>History</TextWrapper>

        </TouchableOpacity>
        </View>
       
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh, }}

        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default AppointmentScreen;