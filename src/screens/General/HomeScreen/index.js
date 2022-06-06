import React, { useState } from 'react';
import { View, FlatList, LayoutAnimation, ImageBackground, Image ,TouchableOpacity} from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import CommonHeader from '../../../components/Headers/CommonHeader';
import theme from '../../../utils/theme';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import { Icons } from '../../../assets/images';


const HomeScreen = props => {

  const list = [{
    title: "All Appointments",
    image: Icons.drawer1
  },
  {
    title: "Latest Appointments",
    image: Icons.drawer1
  },
  {
    title: "Completed Appointments",
    image: Icons.drawer1
  },
  {
    title: "Incomplete Appointments",
    image: Icons.drawer1
  },
  ]

  const [activeIndex,setActive]=useState(-1)
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.box,{backgroundColor:index==activeIndex?theme.primary:theme.whiteBackground}]}
      onPress={()=>setActive(index)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TextWrapper style={[styles.title,{color:index==activeIndex? theme.whiteBackground:'#aeaeae'}]}>{item.title}</TextWrapper>
          <Image source={item.image}
            style={[styles.img,{tintColor:index==activeIndex&&theme.whiteBackground}]} />
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.scroll}>
      <CommonHeader type='drawer'
        title="Home"
        profile />
      <FlatList
        data={list}
        renderItem={renderItem}
        contentContainerStyle={{ alignItems: 'center',paddingBottom: 10 * vh, }}

        keyExtractor={item => item.id}
        style={{ paddingBottom: 10 * vh, width: 100 * vw }}
        showsVerticalScrollIndicator={false}
      />



    </View >
  );
};
export default HomeScreen;