import 'react-native-gesture-handler'
import React from 'react';
import {
  View,
  Text
} from 'react-native'

import TabTrangChu from './Components/Navigation/TabMain/TabTrangChu';
import StackMain from './Components/Navigation/StackNav/StackMain';
import MainDrawer from './Components/Navigation/Drawer/Drawer';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'


const App = () => {
  return (
      <NavigationContainer>
        {/* <MainDrawer /> */}
        <StackMain />
      </NavigationContainer>    
  )
}

export default App;
