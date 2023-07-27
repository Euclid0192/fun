import React from "react";
import {
    Image, 
    Pressable,
    StyleSheet,
    View,
    Text 
} from 'react-native'

import LinearGradient from "react-native-linear-gradient";

import { WIDTH, HEIGHT } from "../TrangChu/Slider/SliderList";

const FloatingButton = () => {
        return (
            <Pressable
                style={styles.floatingButton}
            >
                <LinearGradient
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 0}}
                 colors={[ '#efadb1', '#4d4ea0']}
                 style={styles.linearGradient}
                >
                    <Image 
                        source={require('../../Assets/Images/main_logo.png')}
                        style={styles.image}
                    />
                    <Text style={{color: 'white', fontSize: 14}}>Trải nghiệm Zing MP3 tốt nhất trên app</Text>                    
                </LinearGradient>
            </Pressable>
    )
}

export default FloatingButton
const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: HEIGHT(15),
      },
      linearGradient: {
        width: WIDTH(352.5),
        height: HEIGHT(50),
        backgroundColor: 'pink',
        borderRadius: HEIGHT(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: WIDTH(40),
        height: HEIGHT(40),
      },
})