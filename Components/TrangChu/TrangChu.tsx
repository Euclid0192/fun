import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  Pressable
} from 'react-native';

import { SearchBar } from '@rneui/themed';

import SliderList from './Slider/SliderList';
import KhongQuangCao from './BannerKhongQuangCao/KhongQuangCao';
import Chill from './Chill/Chill';
import BaiHatMoi from './BaiHatMoi/BaiHatMoi';
import AlbumHot from './AlbumHot/AlbumHot';
import { WIDTH, HEIGHT } from './Slider/SliderList';
import Footer from '../Footer/Footer';
import ZINGCHART from '../ZingChart/ZingChart';
import NHACCANHAN from '../NhacCaNhan/NhacCaNhan';

//Navigation
import FloatingButton from '../Footer/FloatingButton';


export const TrangChu = ({navigation}: {navigation: any}) => {
  const [data, setData ] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData =async () => {
    setLoading(true)
    await fetch('https://api-zingmp3-vercel.vercel.app/api/home')
    .then(res => res.json())
    .then(dat => {
        setData(dat?.data)
    })
    setLoading(false)
}

  if (loading){
    return (
      <View style={{flex: 1, backgroundColor: '#eeeeee', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'grey'} />
      </View>
    )
  } // of if

  else {
    const DATA = [
      {
        id: 0,
        content: <SliderList data={data}/>,
      },
      {
        id: 1,
        content: <KhongQuangCao />,
      },
      {
        id: 2,
        content: <Chill data={data} navigation={navigation} />
      },
      {
        id: 3,
        content: <BaiHatMoi data={data}/>
      },
      {
        id: 4,
        content: <AlbumHot data={data} navigation={navigation}/>
      },
      {
        id: 5,
        content: <Footer />
      }
    ]

    return (
      <View style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={({item}) => {
            return (
              item.content
            )
          }}
        />     
        <FloatingButton />
      </View>
    )
  } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eeeeee',
      justifyContent: 'center',
      alignItems: 'center',
    },
});