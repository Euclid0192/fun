import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { TrangChu } from '../../Screens/TrangChu/TrangChu';
import ZINGCHART from '../../Screens/ZingChart/ZingChart';
import NhacCaNhan from '../../Screens/CaNhan/NhacCaNhan';
import ScreenNames from '../scrrenNames';
import TrangCaNhan from '../../Screens/CaNhan/TrangCaNhan';

const Tab = createMaterialTopTabNavigator();

const TabTrangChu = ({navigation}: {navigation: any}) => {
    return (
      <Tab.Navigator
        initialRouteName={ScreenNames.TrangChu}
        screenOptions={{
          tabBarActiveTintColor: '#65509e',
          tabBarLabelStyle: { fontSize: 13 },
          tabBarStyle: { backgroundColor: '#eeeeee' },
        }}
      >
        <Tab.Screen
          name={ScreenNames.TrangChu}
          component={TrangChu}
          options={{ tabBarLabel: 'TRANG CHỦ'}}
        />
  
        <Tab.Screen
          name={ScreenNames.ZingChart}
          component={ZINGCHART}
          options={{ tabBarLabel: '#ZINGCHART'}}
        />
  
        <Tab.Screen
          name={ScreenNames.TrangCaNhan}
          component={TrangCaNhan}
          options={{ tabBarLabel: 'TRANG CÁ NHÂN'}}
        />
      </Tab.Navigator>
    )
  }
  
  export default TabTrangChu