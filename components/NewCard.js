import React, { Component } from 'react'

import { addCard } from '../api/DeckStorage'

import { Wrapper } from './style/Wrapper'
import { NewCardInput, AddCardQuestionText } from './style/Text'
import { AddCardQuestion } from './style/Button'

class NewCard extends Component {
  static navigationOptions = {
    title: 'Add Card'
   }

   state = {
     question: '',
     answer: ''
   }

  toHome = () => {
    this.props.navigation.navigate('Decks')
  }

  addNewCard = () => {
    const deck = this.props.navigation.getParam('deck')

    const question = {
      question: this.state.question, 
      answer: this.state.answer 
    }

    deck.questions.push(question)
    
    addCard(deck.title, deck.questions)

    this.toHome()
  }

  render() {
    return (
      <Wrapper>
        <NewCardInput 
          placeholder={'Question'}
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <NewCardInput
          style={{marginBottom: 10}}
          placeholder={'Answer'}
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
        />
        <AddCardQuestion onPress={this.addNewCard}>
          <AddCardQuestionText>
            Add Card
          </AddCardQuestionText>
        </AddCardQuestion>
      </Wrapper>
    )
  }
}

export default NewCard