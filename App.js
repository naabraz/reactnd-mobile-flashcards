import React, { Component } from 'react'

import { steelTeal } from './components/style/utils/colors'

import MainStatusBar from './components/MainStatusBar'
import MainNavigator from './components/MainNavigator'
import { MainView } from './components/style/Wrapper'

export default class App extends Component {
  render() {
    return (
      <MainView>
        <MainStatusBar backgroundColor={steelTeal} barStyle={'light-content'}/>
        <MainNavigator />
      </MainView>
    )
  }
}