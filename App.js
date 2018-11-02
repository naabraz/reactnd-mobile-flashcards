import React, { Component } from 'react'
import { View } from 'react-native'

import { inchWorm } from './utils/colors'

import MainStatusBar from './components/MainStatusBar'
import MainNavigator from './components/MainNavigator'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainStatusBar backgroundColor={inchWorm} barStyle={'light-content'}/>
        <MainNavigator />
      </View>
    )
  }
}