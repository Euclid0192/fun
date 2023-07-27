import React, {useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import { WIDTH, HEIGHT } from './SliderList';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


const CarouselItem = ({item}: any) => {
    return (
        <View style={{flex: 1, backgroundColor: '#eeeeee', margin: 0, padding: 0}}>
            <Image 
                style={{flex: 1, width: '100%'}}
                source={{uri: item.banner}}
                resizeMode='contain'
             />
        </View>
    )
}

export default CarouselItem