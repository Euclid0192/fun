import 'react-native-gesture-handler'
import React from 'react';
import {
  View,
  Text
} from 'react-native'

import TabTrangChu from './Components/TabMain/TabTrangChu';
import StackMain from './Components/StackNav/StackMain';

import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
      <NavigationContainer>
        {/* <MainDrawer /> */}
        <StackMain />
      </NavigationContainer>    
  )
}

export default App;
