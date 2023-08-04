import React from "react";
import {
    StyleSheet,
    View, 
    Text,
    Image,
    Pressable
} from 'react-native'
import { WIDTH, HEIGHT } from "../../Screens/TrangChu/Slider/SliderList";
import R from "../../Assets/R";

const Footer = () => {
    return (
        <View style={styles.container}>
            {/* Seperator */}
            <View style={styles.seperator}></View>
            {/* View */}
            <View style={styles.containerContent}>
                <View style={styles.lineContainer}>
                    <Image 
                        source={R.images.mainLogo}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Một sản phẩm của Zalo</Text>
                </View>

                <View style={styles.lineContainer}>
                    <Text style={styles.text}>Giới thiệu</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.text}>Liên hệ</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.text}>Quảng cáo</Text>
                </View>

                <View style={styles.lineContainer}>
                    <Text style={styles.text}>Góp ý</Text>
                    <Text style={styles.dot}>•</Text>
                    <Text style={styles.text}>Thoả thuận sử dụng</Text>
                </View>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    seperator: {
        width: WIDTH(330),
        height: HEIGHT(1),
        backgroundColor: '#cccccc',
        marginBottom: HEIGHT(60)
    },
    container: {
        flex: 1,
        height: HEIGHT(250),
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: HEIGHT(20)
    },
    containerContent: {
        width: WIDTH(180),
        justifyContent: 'center',
        alignItems: 'center'
    },
    lineContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: HEIGHT(5),
        width: WIDTH(180)
    },
    image: {
        width: WIDTH(40),
        height: HEIGHT(40),
    },
    text: {
        color: '#888888',
        fontSize: 12,
    },
    dot: {
        color: '#aaaaaa',
        fontSize: 22
    },
})