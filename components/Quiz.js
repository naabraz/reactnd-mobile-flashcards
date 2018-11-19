import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Wrapper } from './style/Wrapper'
import { QuestionText, QuestionAnswerOption, ShowAnswer, Answer, NextQuestionText } from './style/Text'
import { QuizCorrectButton, QuizIncorrectButton, QuizShowAnswer, QuizNextQuestionButton, styles } from './style/Button'

class Quiz extends Component {
  state = { number: 0, showAnswer: false, points: 0, isLastQuestion: false }

  deck = this.props.navigation.getParam('deck')

  willFocusSubscription = this.props.navigation.addListener(
    'willFocus', () => { 
      this.setState({ number: 0, points: 0, showAnswer: false, isLastQuestion: false })
    }
  )

  componentWillUnmount() {
    this.willFocusSubscription.remove()
  }
    
  sendAnswer(option) {
    const { number, points } = this.state

    this.deck.questions[number].answer === option 
    ? this.setState({ points: points + 1, showAnswer: true, rightAnswer: true })
    : this.setState({ showAnswer: true, rightAnswer: false })
  }

  toNextQuestion() {
    const { number } = this.state
    const quizResultParams = { result: this.state.points, totalQuestions: this.deck.questions.length, deck: this.deck }

    number + 1 < this.deck.questions.length ?
      this.setState({ number: number + 1, showAnswer: false }): 
      this.props.navigation.navigate('QuizResult', quizResultParams)
      this.setState({ isLastQuestion: true })
  }

  render() {
    const deck = this.deck
    const { number, showAnswer, isLastQuestion } = this.state
    const answer = deck.questions[number].answer === 'Correct' ? 'Yes!' : 'No!'

    return (
      <Wrapper>
        <Text>{`${number + 1} / ${deck.questions.length}`}</Text>

        {showAnswer ?
          <Answer>{`${answer}`}</Answer> :
          <View>
            <QuestionText>{deck.questions[number].question}</QuestionText>

            <QuizShowAnswer 
              onPress={() => this.setState({ showAnswer: !showAnswer })}
              style={{marginBottom: 25}}>
              <ShowAnswer>Show Answer</ShowAnswer>
            </QuizShowAnswer>
          </View>
        }

        <QuizCorrectButton
          onPress={() => { this.sendAnswer('Correct')}}
          disabled={showAnswer}
          style={[showAnswer && deck.questions[number].answer !== 'Correct' ? styles.disabled : '']}>
          <QuestionAnswerOption>Correct</QuestionAnswerOption>
        </QuizCorrectButton>

        <QuizIncorrectButton
          onPress={() => this.sendAnswer('Incorrect')}
          disabled={showAnswer}
          style={[showAnswer && deck.questions[number].answer !== 'Incorrect' ? styles.disabled : '']}>
          <QuestionAnswerOption>Incorrect</QuestionAnswerOption>
        </QuizIncorrectButton>

        {showAnswer && (
          <QuizNextQuestionButton onPress={() => this.toNextQuestion()}>
            <NextQuestionText>{`${!isLastQuestion ? 'Next Question' : 'See Result'}`}</NextQuestionText>
          </QuizNextQuestionButton>)
        }
      </Wrapper>
    )
  }
}

export default Quiz