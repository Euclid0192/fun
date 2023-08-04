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
import ZINGCHART from '../../Screens/ZingChart/ZingChart'
import TrangCaNhan from '../../Screens/CaNhan/TrangCaNhan'
import NhacCaNhan from '../../Screens/CaNhan/NhacCaNhan'
import { TrangChu } from '../../Screens/TrangChu/TrangChu'

import { Avatar } from 'react-native-elements'
import HeaderBar from '../HeaderBar'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AlbumYeuThich from '../../Screens/CaNhan/AlbumYeuThich'
import BaiHatYeuThich from '../../Screens/CaNhan/BaiHatYeuThich'
import ScreenNames from '../scrrenNames'
const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName={ScreenNames.TabTrangChu}
            screenOptions={({navigation}) => ({ 
                headerTitle: () => <HeaderBar navigation={navigation} />,
                headerLeft: () => null
            })}
        >
            <Drawer.Screen name={ScreenNames.TabTrangChu} component={TabTrangChu} 
                options={{
                    drawerLabel: 'Trang Chủ'
                }}
            />
            <Drawer.Screen name={ScreenNames.ZingChart} component={ZINGCHART} 
                options={{
                    drawerLabel: 'Zing Chart'
                }}
            />
            <Drawer.Screen name={ScreenNames.TrangCaNhan} component={TrangCaNhan} 
                options={{
                    drawerLabel: 'Trang Cá Nhân'
                }}
            />
            <Drawer.Screen name={ScreenNames.NhacCaNhan} component={NhacCaNhan} 
                options={{
                    drawerLabel: 'Nhạc Cá Nhân'
                }}
            />
            <Drawer.Screen name={ScreenNames.AlbumYeuThich} component={AlbumYeuThich} 
                options={{
                    drawerItemStyle: { display: 'none'}
                }}
            />
            <Drawer.Screen name={ScreenNames.BaiHatYeuThich} component={BaiHatYeuThich} 
                options={{
                    drawerItemStyle: { display: 'none'}
                }}
            />
        </Drawer.Navigator>
    )
}

export default MainDrawer