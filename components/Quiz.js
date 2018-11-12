import React, { Component } from 'react'

import { Text, View } from 'react-native'

import { Wrapper } from './style/Wrapper'
import { QuestionText, QuestionAnswerOption, ShowAnswer, Answer } from './style/Text'
import { QuizCorrectButton, QuizIncorrectButton, QuizShowAnswer } from './style/Button'

class Quiz extends Component {
  state = {
    number: 0,
    showAnswer: false,
  }

  render() {
    const deck = this.props.navigation.getParam('deck')

    const { number, showAnswer } = this.state

    return (
      <Wrapper>
        <Text>{`${number} / ${deck.questions.length}`}</Text>

        {showAnswer
          ?
          <Answer>{deck.questions[number].answer}</Answer>
          :
          <View>
            <QuestionText>
              {deck.questions[number].question}
            </QuestionText>

            <QuizShowAnswer onPress={() => this.setState({showAnswer: !showAnswer})}>
              <ShowAnswer>Show Answer</ShowAnswer>
            </QuizShowAnswer>
          </View>
        }

        <QuizCorrectButton onPress={() => this.setState({ number: number + 1, showAnswer: false })}>
          <QuestionAnswerOption>Correct</QuestionAnswerOption>
        </QuizCorrectButton>

        <QuizIncorrectButton onPress={() => this.setState({ number: number + 1, showAnswer: false })}>
          <QuestionAnswerOption>Incorrect</QuestionAnswerOption>
        </QuizIncorrectButton>
      </Wrapper>
    )
  }
}

export default Quiz