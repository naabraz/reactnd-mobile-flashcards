import React, { Component } from 'react'

import { addCard } from '../api/DeckStorage'

import { Wrapper } from './style/Wrapper'
import { NewCardInput, AddCardQuestionText, SelectAnswer, styles } from './style/Text'
import { AddCardQuestion } from './style/Button'

class NewCard extends Component {
  static navigationOptions = {
    title: 'Add Card',
   }

  state = { question: '', questionError: false, answer: 'Correct' }

  toDeckList = () => this.props.navigation.navigate('DeckList')

  checkCard = () => this.state.question.trim() === '' ? this.setState(() => ({ questionError: true })) : this.addNewCard()

  addNewCard = () => {
    const deck = this.props.navigation.getParam('deck')
    const question = { question: this.state.question, answer: this.state.answer }

    deck.questions.push(question)

    addCard(deck.title, deck.questions)
    this.toDeckList()
  }

  render() {
    const { questionError } = this.state

    return (
      <Wrapper>
        <NewCardInput
          placeholder={'Question'}
          value={this.state.question}
          onChangeText={(question) => this.setState({ question, questionError: false })}
          style={[questionError ? styles.invalid : '']} />

        <SelectAnswer
          selectedValue={this.state.answer}
          onValueChange={(itemValue) => this.setState({answer: itemValue})}>
          <SelectAnswer.Item label="Correct" value="Correct" />
          <SelectAnswer.Item label="Incorrect" value="Incorrect" />
        </SelectAnswer>

        <AddCardQuestion onPress={this.checkCard}>
          <AddCardQuestionText>Add Card</AddCardQuestionText>
        </AddCardQuestion>

      </Wrapper>
    )
  }
}

export default NewCard