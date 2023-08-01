import 'react-native-gesture-handler'
import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    FlatList,

} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import TabTrangChu from '../TabMain/TabTrangChu'
import ZINGCHART from '../../ZingChart/ZingChart';
import TrangCaNhan from '../../Ca Nhan/TrangCaNhan';
import NhacCaNhan from '../../Ca Nhan/NhacCaNhan'
import { TrangChu } from '../../TrangChu/TrangChu';

import { Avatar } from 'react-native-elements'
import HeaderBar from '../StackNav/HeaderBar'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Tab Trang Chu'
            screenOptions={({navigation}) => ({ 
                headerTitle: () => <HeaderBar navigation={navigation} />
            })}
        >
            <Drawer.Screen name='Tab Trang chu' component={TabTrangChu} 
                options={{
                    headerLeft: () => null,
                    drawerLabel: 'Trang Chủ'
                }}
            />
            <Drawer.Screen name='ZingChart' component={ZINGCHART} 
                options={{
                    headerLeft: () => null,
                    drawerLabel: 'Zing Chart'
                }}
            />
            <Drawer.Screen name='Trang Ca Nhan' component={TrangCaNhan} 
                options={{
                    headerLeft: () => null,
                    drawerLabel: 'Trang Cá Nhân'
                }}
            />
            <Drawer.Screen name='Nhac Ca Nhan' component={NhacCaNhan} 
                options={{
                    headerLeft: () => null,
                    drawerLabel: 'Nhạc Cá Nhân'
                }}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawer