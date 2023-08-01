import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Pressable,
    Image,
    Dimensions
} from 'react-native'

import { Avatar } from 'react-native-elements'
import { WIDTH, HEIGHT } from '../TrangChu/Slider/SliderList'
import FloatingButton from '../Footer/FloatingButton'
import { AUTH } from '../FirebaseConfig'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const { width, height } = Dimensions.get('window')

const TrangCaNhan = ({navigation}: {navigation: any}) => {
    const [ userSignin, setUserSignin ] = useState(false)

    const auth = AUTH;
    onAuthStateChanged(auth, (user) => {
      if (user){
        //User is signed in
        setUserSignin(true)
        const uid = user.uid;
        console.log(user)
      }
      else{
        //User is signed out
        setUserSignin(false)
      }
    })

    const handleDangXuat = async () => {
      try{
        const res = await signOut(auth)
        console.log(res)    
        setUserSignin(false)
        navigation.navigate('Dang Nhap')
      }
      catch (err){
        console.log("Có lỗi xảy ra ", err)
      }

    }

    const user = auth.currentUser
    const handleDoiMatKhau = () => {
      navigation.navigate('Doi Mat Khau', {
        user,
      })
    }

    return (
      <View style={styles.container} >
        <View style={styles.containerAvatar}>
          <Avatar 
            size={140}
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            activeOpacity={0.7}
            containerStyle={styles.avatar}
          />         
          {!userSignin ?
          <Text style={styles.info}>Chưa đăng nhập</Text> 
          : <Text style={styles.info}>{user?.email}</Text>      
        }

        </View>

        <Text style={styles.text}>Để sử dụng đầy đủ tất cả các tính năng, bạn vui lòng sử dụng ứng dụng Zing MP3</Text>
        <Pressable 
          style={styles.button}
        >
          <Image 
              source={require('../../Assets/Images/main_logo.png')}
              style={styles.image}
          />
          <Text style={styles.textButton}>Mở Zing MP3</Text>
        </Pressable>
        {/* Sign In Sign Up*/}
        {!userSignin ? 
        <View>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Dang Nhap')}
          >
            <Text style={styles.textButton}>Đăng nhập</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Dang Ky')}
          >
            <Text style={styles.textButton}>Đăng ký</Text>
          </Pressable>
        </View>
          : null
        }
        {/* User is signed in */}
        {userSignin ?
        <View>
          <Pressable
            style={styles.button}
            onPress={handleDangXuat}
          >
            <Text style={styles.textButton}>Đăng xuất</Text>
          </Pressable>  
          <Pressable
            style={styles.button}
            onPress={handleDoiMatKhau}
          >
            <Text style={styles.textButton}>Đổi mật khẩu</Text>
          </Pressable>  
        </View>
          :
          null      
        }
        {/* Sign Out Button */}

        <FloatingButton />
      </View>
    )
}

export default TrangCaNhan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    // paddingTop: HEIGHT(152),
    padding: WIDTH(15),
  },
  button: {
    backgroundColor: '#65509e',
    width: WIDTH(138.19),
    height: HEIGHT(33),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: HEIGHT(4),
    marginBottom: HEIGHT(20),
  },
  text: {
    color: '#888888',
    fontSize: 16,
    marginBottom: HEIGHT(20),
    textAlign: 'center',
    fontWeight: '400'
  },
  textButton: {
    color: '#fcfcfc',
    fontSize: 13,
    fontWeight: 'bold',
  },
  image: {
    width: WIDTH(25),
    height: HEIGHT(25),
    margin: WIDTH(5)
  },
  avatar:{
    // width: WIDTH(100),
    // height: HEIGHT(100),
    backgroundColor: '#bbbbbb',
    marginRight: WIDTH(10)
  },
  containerAvatar: {
    marginTop: HEIGHT(20),
    padding: HEIGHT(20),
    height: HEIGHT(200),
    width: WIDTH(350),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: HEIGHT(20),
    flexShrink: 1,
  }
})



// Current Account  
// 1. fredericchopoin404051@gmail.com
// Pass: 12345678  
// 2. hoho@gmail.com   
// Pass: helloroger -> hello1234
// 3. hellozing@gmail.com  
// Pass: zingmp3