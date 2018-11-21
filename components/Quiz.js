import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { Wrapper } from './style/Wrapper'
import { QuestionText, QuestionAnswerOption, Answer, NextQuestionText, QuizShowAnswerText } from './style/Text'
import { QuizCorrectButton, QuizIncorrectButton, QuizNextQuestionButton, QuizShowAnswerButton, styles } from './style/Button'

import QuizShowAnswer from './QuizShowAnswer';

class Quiz extends Component {
  state = {
    number: 0,
    showAnswer: false,
    points: 0,
    isLastQuestion: false,
    rightAnswer: true,
    answered: false,
  }

  deck = this.props.navigation.getParam('deck')

  willFocusSubscription = this.props.navigation.addListener(
    'willFocus', () => {
      this.setState({
        number: 0,
        points: 0,
        showAnswer: false,
        isLastQuestion: false,
        rightAnswer: false,
        answered: false,
      })
    }
  )

  componentWillUnmount() {
    this.willFocusSubscription.remove()
  }

  sendAnswer(option) {
    const {
      number,
      points,
    } = this.state

    this.deck.questions[number].answer === option
    ? this.setState({
      points: points + 1,
      showAnswer: true,
      rightAnswer: true,
      answered: true,
    })
    : this.setState({
      showAnswer: true,
      rightAnswer: false,
      answered: true,
    })
  }

  toNextQuestion() {
    const { number } = this.state
    const quizResultParams = {
      result: this.state.points,
      totalQuestions: this.deck.questions.length, deck: this.deck,
    }

    number + 1 < this.deck.questions.length
    ? this.setState({
      number: number + 1,
      showAnswer: false,
      answered: false,
    })
    : this.props.navigation.navigate('QuizResult', quizResultParams)
  }

  render() {
    const deck = this.deck
    const {
      number,
      showAnswer,
      rightAnswer,
      answered,
    } = this.state
    const answer = deck.questions[number].answer === 'Correct' ? 'Yes!' : 'No!'

    return (
      <Wrapper>
        <Text>{`${number + 1} / ${deck.questions.length}`}</Text>

        {showAnswer ?
          !answered && <Answer>{`${answer}`}</Answer> :
          <View>
            <QuestionText>{deck.questions[number].question}</QuestionText>

            <QuizCorrectButton
              onPress={() => this.sendAnswer('Correct')}
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
          </View>
        }

        {showAnswer ?
          <View>
            { answered && <QuizShowAnswer rightAnswer={rightAnswer} /> }
            <QuizNextQuestionButton onPress={() => this.toNextQuestion()}>
              <NextQuestionText>{`${number + 1 < this.deck.questions.length ? 'Next Question' : 'See Result'}`}</NextQuestionText>
            </QuizNextQuestionButton>
          </View>
          :
          <QuizShowAnswerButton onPress={() => this.setState({ showAnswer: !showAnswer })}>
            <QuizShowAnswerText>Show Answer</QuizShowAnswerText>
          </QuizShowAnswerButton>
        }
      </Wrapper>
    )
  }
}

export default Quiz