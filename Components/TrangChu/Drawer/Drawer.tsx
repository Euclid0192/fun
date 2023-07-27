import 'react-native-gesture-handler'
import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    FlatList,

} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import TabTrangChu from '../TrangChu';
import ZINGCHART from '../../ZingChart/ZingChart';
import NHACCANHAN from '../../NhacCaNhan/NhacCaNhan';
import { TrangChu } from '../TrangChu';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
        >
            {/* <Drawer.Screen name='Trang chu' component={TrangChu} /> */}
            <Drawer.Screen name='ZingChart' component={ZINGCHART} />
            <Drawer.Screen name='Nhac ca nhan' component={NHACCANHAN} />
        </Drawer.Navigator>
    )
}

export default MainDrawer