import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions,
} from 'react-native'

import { Avatar } from 'react-native-elements'
import { WIDTH, HEIGHT } from '../Screens/TrangChu/Slider/SliderList'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
import R from '../Assets/R'

const { width, height } = Dimensions.get('window')
const HeaderBar = ({navigation}: {navigation: any}) => {
// const HeaderBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesome5 
                name='hamburger'
                size={24}
                color='grey'
                onPress={() => navigation.openDrawer()}
            />
            <Image 
                source={R.images.logoZing}
                style={styles.logo}
            />
            <Avatar 
                size={30}
                rounded
                icon={{name: 'user', type: 'font-awesome'}}
                activeOpacity={0.7}
                containerStyle={{backgroundColor: '#bbbbbb'}}       
            />
        </View>
    )
}

export default HeaderBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 0,
        paddingRight: WIDTH(25),
        // backgroundColor: 'pink',
        width: width,
        paddingTop: HEIGHT(15),
    },
    logo: {
        width: WIDTH(100),
        height: HEIGHT(30),
    }
})