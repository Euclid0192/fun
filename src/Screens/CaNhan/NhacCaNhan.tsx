import React, { useState } from 'react'
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
import { AUTH } from '../../Components/FirebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import Footer from '../../Components/Footer/Footer'

const {width, height} = Dimensions.get('window')

const NhacCaNhan = ({navigation}: {navigation: any}) => {
    const handleGoToAlbumDaThich = () => navigation.navigate('Album Yeu Thich')
    const handleGoToBaiHatDaThich = () => navigation.navigate('Bai Hat Yeu Thich')
    const auth = AUTH;
    const [ signIn, setSignIn ] = useState(false)
    
    onAuthStateChanged(auth, (user) => {
        if(user){
            setSignIn(true)
        }
        else setSignIn(false)
    })

    if (signIn)
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.content} activeOpacity={0.4} onPress={handleGoToAlbumDaThich}>
                    <Text style={styles.text}>Album đã thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content} activeOpacity={0.4} onPress={handleGoToBaiHatDaThich}>
                    <Text style={styles.text}>Bài hát đã thích</Text>
                </TouchableOpacity>
            </View>
        )
    else 
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.textDangNhap}>Vui lòng đăng nhập!</Text>                    
                </View>
                <Footer />
            </View>
        )
}   

export default NhacCaNhan
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    textDangNhap: {
        fontSize: HEIGHT(30),
        fontWeight: 'bold'
    },
})