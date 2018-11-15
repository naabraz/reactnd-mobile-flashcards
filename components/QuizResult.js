import React, { Component } from 'react'

import { Text } from 'react-native'

import {
  Wrapper,
} from './style/Wrapper'

class QuizResult extends Component {
  static navigationOptions = {
    title: 'Quiz Result',
  }

  render() {
    const result = this.props.navigation.getParam('result')

    return(
      <Wrapper>
        <Text>Quiz Result: {result}</Text>
      </Wrapper>
    )
  }

}

export default QuizResult