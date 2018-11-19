import React, { Component } from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import { QuizAnswerResult } from './style/Wrapper'
import { AnswerResultText, AnswerResultTextIcon } from './style/Text'

class QuizShowAnswer extends Component {
  render() {
    const { rightAnswer } = this.props

    const iconIOS = rightAnswer ? 'ios-happy' : 'ios-sad'
    const iconAndroid = rightAnswer ? 'emoticon-happy' : 'emoticon-sad'
    const iconColor = rightAnswer ? 'green' : 'red'
    const greetings = rightAnswer ? "Congrats! Your answer is right!" : "Oh no! Your answer is wrong."
    
    return (
      <QuizAnswerResult>
        <AnswerResultTextIcon>
          {Platform.OS === 'ios' ? 
            <Ionicons name={iconIOS} size={80} color={iconColor} /> :
            <MaterialCommunityIcons name={iconAndroid} size={80} color={iconColor} />
          }
        </AnswerResultTextIcon>
        <AnswerResultText>{greetings}</AnswerResultText>
      </QuizAnswerResult>
    )
  }
}

export default QuizShowAnswer