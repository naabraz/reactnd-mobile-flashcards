import React, { Component } from 'react'

import { addDeck } from '../api/DeckStorage'

import { Title } from './style/Title'
import { Wrapper } from './style/Wrapper'
import { NewDeckInput, AddDeckText } from './style/Text'
import { AddDeck } from './style/Button'

class NewDeck extends Component {

  state = { name: '' }

  submitDeck = () => {
    addDeck(this.state.name)
  }

  render() {
    return (
      <Wrapper>
        <Title>New Deck</Title>
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