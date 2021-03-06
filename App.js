import React, { Component } from 'react'

import { setLocalNotification } from './utils/notifications'

import { darkGray } from './components/style/utils/colors'

import MainStatusBar from './components/MainStatusBar'
import MainNavigator from './components/MainNavigator'
import { MainView } from './components/style/Wrapper'

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <MainView>
        <MainStatusBar backgroundColor={darkGray} barStyle={'light-content'}/>
        <MainNavigator />
      </MainView>
    )
  }
}