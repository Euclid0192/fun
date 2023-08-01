import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { TrangChu } from '../../TrangChu/TrangChu';
import ZINGCHART from '../../ZingChart/ZingChart';
import NHACCANHAN from '../../Ca Nhan/TrangCaNhan';
import HeaderBar from '../StackNav/HeaderBar';

const Tab = createMaterialTopTabNavigator();

const TabTrangChu = ({navigation}: {navigation: any}) => {
    return (
      <Tab.Navigator
        initialRouteName='Trang Chu'
        screenOptions={{
          tabBarActiveTintColor: '#65509e',
          tabBarLabelStyle: { fontSize: 13 },
          tabBarStyle: { backgroundColor: '#eeeeee' },
        }}
      >
        <Tab.Screen
          name='Trang Chu'
          component={TrangChu}
          options={{ tabBarLabel: 'TRANG CHỦ'}}
        />
  
        <Tab.Screen
          name='ZingChart'
          component={ZINGCHART}
          options={{ tabBarLabel: '#ZINGCHART'}}
        />
  
        <Tab.Screen
          name='Nhac ca nhan'
          component={NHACCANHAN}
          options={{ tabBarLabel: 'TRANG CÁ NHÂN'}}
        />
      </Tab.Navigator>
    )
  }
  
  export default TabTrangChu