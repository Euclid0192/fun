import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native'
import { WIDTH, HEIGHT } from '../Slider/SliderList'
import R from '../../../Assets/R'


const KhongQuangCao = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={R.images.BannerKhongQuangCao}
                style={styles.image}
                resizeMode='contain'
            />
            <Text>Hoặc nhập code VIP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: HEIGHT(190),
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
        padding: WIDTH(5),
        marginRight: WIDTH(10)
    },
    image: {
        // flex: 1,
        width: '95%',
        height: HEIGHT(125),
    },
    text: {
        color: 'grey',
        textDecorationLine: 'underline',
    }
})

export default KhongQuangCao