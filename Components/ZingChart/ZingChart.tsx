import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'
import FloatingButton from '../Footer/FloatingButton'

const ZINGCHART = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eeeeee'}} >
        <Text style={{textAlign: 'center'}}>Zing Chart</Text>
        <FloatingButton />
      </View>
    )
}

export default ZINGCHART