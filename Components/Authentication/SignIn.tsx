import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Pressable,
    TouchableOpacity,
    Keyboard
} from 'react-native'

import { Input } from 'react-native-elements'
import { HEIGHT, WIDTH } from '../TrangChu/Slider/SliderList'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Entypo'
// import { firebaseApp, auth } from '../FirebaseConfig'
// import { signInWithEmailAndPassword } from 'firebase/auth'
import { AUTH } from '../FirebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


const { width, height } = Dimensions.get('window')

const SignIn = ({navigation}: {navigation: any}) => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState(false)


    const handleSignIn = async () => {
        Keyboard.dismiss()
        if (!username || !password){
            console.log('Ô để trống!!!')
            return
        }
        
        const auth = AUTH;
        try{
            const response = await signInWithEmailAndPassword(auth, username, password)
            console.log(response)
            navigation.navigate('Tab Trang Chu', {screen: 'Trang Chu'})
        }
        catch (err:any)  {
            const errorCode = err.code;
            const messageError = err.message;
            console.log("Error with code ", errorCode, " and message ", messageError)
        }

        // navigation.navigate('Tab Trang Chu')
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../Assets/Images/main_logo.png')}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                {/* Ten  */}
                <View>
                    <Text style={styles.title}>Email</Text>
                    <Input 
                        placeholder='Email'
                        onChangeText={(text) => setUsername(text)}
                        inputContainerStyle={styles.input}
                        leftIcon={{name: 'mail', type: 'entypo', color: 'grey'}}
                    />
                </View>
                {/* Mat khau */}
                <View>
                    <Text style={styles.title}>Mật khẩu</Text>
                    <Input 
                        placeholder='Mật khẩu'
                        onChangeText={(text) => setPassword(text)}
                        inputContainerStyle={styles.input}
                        leftIcon={{name: 'lock', type: 'entypo', color: 'grey'}}
                        rightIcon={
                            <Pressable
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Icon 
                                    name={showPassword? 'eye': 'eye-with-line'}
                                    color='grey'
                                    size={24}
                                />
                            </Pressable>
                        }
                        secureTextEntry={!showPassword}
                    />
                </View>
                {/* Chua co tai khoan*/}       
                <Pressable
                    onPress={() => navigation.navigate('Dang Ky')}
                    style={styles.dangky}
                >
                    <Text style={styles.text}>Chưa có tài khoản? Đăng ký ngay!</Text>
                </Pressable> 
            </View>
            <TouchableOpacity
                onPress={handleSignIn}
            >
                <LinearGradient
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 0}}
                 colors={[ '#efadb1', '#4d4ea0']}
                 style={styles.linearGradient}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Đăng nhập</Text>                    
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#65509e',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: HEIGHT(15),
        fontWeight: 'bold',
        color: '#f2f2f2',
    },
    image: {
        width: WIDTH(250),
        height: HEIGHT(250),
    },
    contentContainer: {
        width: width,
        justifyContent: 'flex-start',
        // backgroundColor: 'pink',
        padding: WIDTH(15)
    },
    input: {
        height: HEIGHT(40),
        backgroundColor: '#eeeeee',
        marginTop: HEIGHT(12),
        padding: WIDTH(10),
        borderRadius: HEIGHT(5),
        borderBottomWidth: 0,
    },
    linearGradient: {
        width: WIDTH(150),
        height: HEIGHT(40),
        backgroundColor: 'pink',
        borderRadius: HEIGHT(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: 'white',
        marginBottom: HEIGHT(5), 
        textDecorationLine:'underline',
    },
    dangky: {
        width: WIDTH(200),
    }
})