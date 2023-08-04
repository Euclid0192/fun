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
// import { getAuth } from 'firebase/auth'
import { AUTH } from '../../Components/FirebaseConfig'
import {  updatePassword } from 'firebase/auth'



const { width, height } = Dimensions.get('window')

const DoiMatKhau = ({navigation, route}: {navigation : any, route : any}) => {
    const [ passwordOld, setPasswordOld ] = useState("")
    const [ passwordNew, setPasswordNew ] = useState("")
    const [ passwordRetype, setPasswordRetype ] = useState("")
    const [ retypeError, setRetypeError ] = useState(false)
    // const user = route.user
    // const correctOldPassword = user

    const [ showPasswordOld, setShowPasswordOld ] = useState(false)
    const [ showPasswordNew, setShowPasswordNew ] = useState(false)
    const [ showPasswordNewRetype, setShowPasswordNewRetype ] = useState(false)

    const handleSignUp = async () => {
        Keyboard.dismiss()
        if (!passwordOld || !passwordNew){
            console.log('Ô để trống!!!')
            return
        }
        if (passwordNew != passwordRetype){
            setRetypeError(true)
            return 
        }
        
        const auth = AUTH;
        const user = auth.currentUser
        try{
            const response = await updatePassword(user, passwordNew)
            console.log(response)
            console.log("Doi Mat Khau Thanh cong!")
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
                {/* Email  */}
                <View>
                    <Text style={styles.title}>Mật khẩu cũ</Text>
                    <Input 
                        placeholder='Nhập mật khẩu cũ'
                        onChangeText={(text) => setPasswordOld(text)}
                        inputContainerStyle={styles.input}
                        leftIcon={{name: 'lock', type: 'entypo', color: 'grey'}}
                        rightIcon={
                            <Pressable
                                onPress={() => setShowPasswordOld(!showPasswordOld)}
                            >
                                <Icon 
                                    name={showPasswordOld? 'eye': 'eye-with-line'}
                                    color='grey'
                                    size={24}
                                />
                            </Pressable>
                        }
                        secureTextEntry={!showPasswordOld}
                    />
                </View>
                {/* Mat khau */}
                <View>
                    <Text style={styles.title}>Mật khẩu mới</Text>
                    <Input 
                        placeholder='Nhập mật khẩu mới'
                        onChangeText={(text) => setPasswordNew(text)}
                        inputContainerStyle={styles.input}
                        leftIcon={{name: 'lock', type: 'entypo', color: 'grey'}}
                        rightIcon={
                            <Pressable
                                onPress={() => setShowPasswordNew(!showPasswordNew)}
                            >
                                <Icon 
                                    name={showPasswordNew? 'eye': 'eye-with-line'}
                                    color='grey'
                                    size={24}
                                />
                            </Pressable>
                        }
                        secureTextEntry={!showPasswordNew}
                    />
                </View>
                {/* Nhap lai mat khau */}
                <View>
                    <Text style={styles.title}>Nhập lại mật khẩu</Text>
                    <Input 
                        placeholder='Nhập lại mật khẩu'
                        onChangeText={(text) => setPasswordRetype(text)}
                        inputContainerStyle={styles.input}
                        leftIcon={{name: 'lock', type: 'entypo', color: 'grey'}}
                        rightIcon={
                            <Pressable
                                onPress={() => setShowPasswordNewRetype(!showPasswordNewRetype)}
                            >
                                <Icon 
                                    name={showPasswordNewRetype? 'eye': 'eye-with-line'}
                                    color='grey'
                                    size={24}
                                />
                            </Pressable>
                        }
                        secureTextEntry={!showPasswordNewRetype}
                    />
                </View>       
                {retypeError ?
                    <Text style={{color: 'white', fontSize: 16}}>Mật khẩu nhập lại không khớp</Text>:null
                }         
            </View>
            <TouchableOpacity
                onPress={handleSignUp}
            >
                <LinearGradient
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 0}}
                 colors={[ '#efadb1', '#4d4ea0']}
                 style={styles.linearGradient}
                >
                    <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Đổi mật khẩu</Text>                    
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default DoiMatKhau
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
})