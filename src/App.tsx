import 'react-native-gesture-handler'
import React from 'react';
import {
  View,
  Text
} from 'react-native'

import StackMain from './Navigation/StackNav/StackMain';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'

import { Provider } from 'react-redux';
import store from './Redux/Store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MainDrawer /> */}
        <StackMain />
      </NavigationContainer>          
    </Provider>

  )
}

export default App;
