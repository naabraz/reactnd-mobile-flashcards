import React, { Component } from 'react'

import { addDayScore } from '../api/DeckStorage'

import { setLocalNotification, clearLocalNotification } from '../utils/notifications'

import { Wrapper } from './style/Wrapper'
import { QuizResultText, RestartQuizText, BackToDeckText } from './style/Text'
import { RestartQuizButton, BackToDeckButton } from './style/Button'

class QuizResult extends Component {
  static navigationOptions = {
    title: 'Quiz Result',
  }

  deck = this.props.navigation.getParam('deck')

  getCurrentDate() {
    const date = new Date()
    const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    return todayUTC.toISOString().split('T')[0]
  }

  deckScoreObject(percentage) {
    const score = {
      [this.getCurrentDate()]: percentage
    }

    this.deck.scores.length > 0 ? this.checkDuplicateScore(score) : this.deck.scores.push(score)

    clearLocalNotification()
    .then(setLocalNotification())
  
    return {
      ...this.deck
    }
  }

  checkDuplicateScore(dayScore) {
    this.deck.scores.map((score) => Object.getOwnPropertyNames(score)
      .map((item) => item !== this.getCurrentDate() ? this.deck.scores.push(score) : this.replaceCurrentScore(dayScore))
    )
  }

  replaceCurrentScore(dayScore) {
    this.deck.scores.map((score) => score[this.getCurrentDate()] = dayScore[this.getCurrentDate()])
  }

  render() {
    const { navigation } = this.props

    const result = navigation.getParam('result')
    const totalQuestions = navigation.getParam('totalQuestions')
    const deck = navigation.getParam('deck')

    const percentage = result / totalQuestions * 100

    addDayScore(this.deckScoreObject(percentage))

    return(
      <Wrapper>
        <QuizResultText>You got {percentage}% of the questions right!</QuizResultText>

        <RestartQuizButton onPress={() => navigation.navigate('Quiz', { deck })}>
          <RestartQuizText>Restart Quiz</RestartQuizText>
        </RestartQuizButton>

        <BackToDeckButton onPress={() => navigation.navigate('Deck', { deckTitle: deck.title })}>
          <BackToDeckText>Back To Deck</BackToDeckText>
        </BackToDeckButton>
      </Wrapper>
    )
  }

}

export default QuizResult