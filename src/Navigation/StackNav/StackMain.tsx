import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabTrangChu from '../TabMain/TabTrangChu';
import ChillDetails from '../../Screens/TrangChu/Chill/ChillDetails';
import AlbumDetails from '../../Screens/TrangChu/AlbumHot/AlbumDetails';
import SignUp from '../../Screens/Authentication/SignUp';
import SignIn from '../../Screens/Authentication/SignIn';
import { TrangChu } from '../../Screens/TrangChu/TrangChu';
import DoiMatKhau from '../../Screens/Authentication/DoiMatKhau';
import PlayingSong from '../../Components/PlayingSong/PlayingSong';
import MainDrawer from '../Drawer/Drawer';
import NhacCaNhan from '../../Screens/CaNhan/NhacCaNhan';
import AlbumYeuThich from '../../Screens/CaNhan/AlbumYeuThich';
import BaiHatYeuThich from '../../Screens/CaNhan/BaiHatYeuThich';
import ScreenNames from '../scrrenNames';

const Stack = createNativeStackNavigator();

const StackMain = () => {
    return (    
    <Stack.Navigator
        initialRouteName='Tab Trang Chu'
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name={ScreenNames.TabTrangChu} component={MainDrawer} />
        <Stack.Screen name={ScreenNames.ChillDetails} component={ChillDetails} />
        <Stack.Screen name={ScreenNames.AlbumDetails} component={AlbumDetails}/>
        <Stack.Screen name={ScreenNames.DangKy} component={SignUp}/>
        <Stack.Screen name={ScreenNames.DangNhap} component={SignIn}/>
        {/* <Stack.Screen name={ScreenNames.TrangChu} component={TrangChu} /> */}
        <Stack.Screen name={ScreenNames.DoiMatKhau} component={DoiMatKhau}/>
        <Stack.Screen name={ScreenNames.BaiHat} component={PlayingSong}/>
        <Stack.Screen name={ScreenNames.NhacCaNhan} component={NhacCaNhan} />
        <Stack.Screen name={ScreenNames.AlbumYeuThich} component={AlbumYeuThich} />
        <Stack.Screen name={ScreenNames.BaiHatYeuThich} component={BaiHatYeuThich} />
    </Stack.Navigator>
    )
}

export default StackMain