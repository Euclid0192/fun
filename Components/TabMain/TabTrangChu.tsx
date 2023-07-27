import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { TrangChu } from '../TrangChu/TrangChu';
import ZINGCHART from '../ZingChart/ZingChart';
import NHACCANHAN from '../NhacCaNhan/NhacCaNhan';

const Tab = createMaterialTopTabNavigator();

const TabTrangChu = () => {
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
          options={{ tabBarLabel: 'NHẠC CÁ NHÂN'}}
        />
      </Tab.Navigator>
    )
  }
  
  export default TabTrangChu