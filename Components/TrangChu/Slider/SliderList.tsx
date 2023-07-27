import React, { useEffect ,useState} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window')
export const WIDTH = (w: number) => w * width / 375;
export const HEIGHT = (h: number) => h * height / 812;

import CarouselItem from './CarouselItem';
import Swiper from 'react-native-swiper';

const SliderList = ({data}: {data: any}) => {
    let Slides = [];
    const SliderData = data?.items?.[0].items;
    // console.log(SliderData)
    if (SliderData){
        for (let i = 0; i < SliderData.length; i++){
            Slides.push(<CarouselItem item={SliderData[i]} />);
        }            
    } // of if

    return (
        <SafeAreaView style={styles.containerLoading}>
            <Swiper
                loop={true}
                autoplay={true}
                autoplayTimeout={5}
            >
                {Slides}
            </Swiper>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    containerLoading: {
        width: width,
        height: HEIGHT(220),
        justifyContent: 'center', 
        alignItems: 'center', 
        // backgroundColor: 'red',
    }
})
export default SliderList