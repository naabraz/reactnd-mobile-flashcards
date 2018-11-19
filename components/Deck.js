import React, { Component } from 'react'

import { getDeck } from '../api/DeckStorage'

import { DeckName, DeckCardsQuantity, AddCardText, StartQuizText } from './style/Text'
import { AddCard, StartQuiz } from './style/Button'
import { Wrapper } from './style/Wrapper'
import { black } from './style/utils/colors'

export class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
   return {
      title: navigation.getParam('deckName')
    }
  }

  getDeckInfo() {
    const title = this.props.navigation.getParam('deckTitle')

    getDeck(title).then((deck) => {
      this.setState({ deck })
    })
  }

  willFocusSubscription = this.props.navigation.addListener(
    'willFocus', () => this.getDeckInfo()
  )

  componentWillUnmount() {
    this.willFocusSubscription.remove()
  }

  state = {
    deck: { title: '', questions: [] }
  }

  render() {
    const { navigation } = this.props
    const { deck } = this.state
    const { title, questions } = deck

    return(
      <Wrapper>
        <DeckName>{title}</DeckName>
        <DeckCardsQuantity style={{color: black}}>{`${questions.length} cards`}</DeckCardsQuantity>

        <AddCard onPress={() => navigation.navigate('NewCard', { deck })}>
          <AddCardText>Add Card</AddCardText>
        </AddCard>
        {questions.length > 0 && (
          <StartQuiz onPress={() => navigation.navigate('Quiz', { deck })}>
            <StartQuizText>Start a Quiz</StartQuizText>
          </StartQuiz>)
        }
      </Wrapper>
    )
  }
}

export default Deck