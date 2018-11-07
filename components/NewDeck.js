import React, { Component } from 'react'

import { addDeck, removeDeck } from '../api/DeckStorage'

import { Wrapper } from './style/Wrapper'
import { NewDeckInput, AddDeckText } from './style/Text'
import { AddDeck } from './style/Button'

class NewDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  }

  state = {
    name: ''
  }

  toHome = () => {
    this.props.navigation.navigate('Decks')
  }

  submitDeck = () => {
    addDeck(this.state.name)
    this.toHome()
  }

  render() {
    return (
      <Wrapper>
        <NewDeckInput
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder={'Deck Name'}
        />
        <AddDeck onPress={this.submitDeck}>
          <AddDeckText>Add Deck</AddDeckText>
        </AddDeck>
      </Wrapper>
    )
  }
}

export default NewDeck