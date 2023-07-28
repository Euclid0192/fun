import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabTrangChu from '../TabMain/TabTrangChu';
import ChillDetails from '../TrangChu/Chill/ChillDetails';
import AlbumDetails from '../TrangChu/AlbumHot/AlbumDetails';
import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import { TrangChu } from '../TrangChu/TrangChu';
import DoiMatKhau from '../Authentication/DoiMatKhau';
import PlayingSong from '../PlayingSong/PlayingSong';

const Stack = createNativeStackNavigator();

const StackMain = () => {
    return (    
    <Stack.Navigator
        initialRouteName='Tab Trang Chu'
        screenOptions={{
            headerShown: true
        }}
    >
        <Stack.Screen 
            name="Tab Trang Chu"
            component={TabTrangChu}
        />
        <Stack.Screen
            name="Chill Details"
            component={ChillDetails}
        />
        <Stack.Screen 
            name='Album Details'
            component={AlbumDetails}
        />
        <Stack.Screen 
            name='Dang Ky'
            component={SignUp}
        />
        <Stack.Screen
            name='Dang Nhap'
            component={SignIn}
        />
        <Stack.Screen
            name='Trang Chu'
            component={TrangChu}
        />
        <Stack.Screen
            name='Doi Mat Khau'
            component={DoiMatKhau}
        />
        <Stack.Screen 
            name='Bai Hat'
            component={PlayingSong}
        />
    </Stack.Navigator>
    )
}

export default StackMain