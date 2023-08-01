import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    Dimensions,
    Pressable,
    TouchableOpacity
} from 'react-native'
import { HEIGHT, WIDTH } from '../TrangChu/Slider/SliderList'

const {width, height} = Dimensions.get('window')

const NhacCaNhan = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} activeOpacity={0.4}>
                <Text style={styles.text}>Album đã thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.content} activeOpacity={0.4}>
                <Text style={styles.text}>Bài hát đã thích</Text>
            </TouchableOpacity>
        </View>
    )
}   

export default NhacCaNhan
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH(280),
        height: HEIGHT(60),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dddddd',
        marginBottom: HEIGHT(50),
        borderRadius: WIDTH(10),
    },
    text: {
        fontSize: HEIGHT(20),
        fontWeight: 'bold',
    }
})