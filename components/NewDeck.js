import React, { Component } from 'react'

import { Title } from './style/Title'
import { Wrapper } from './style/Wrapper'
import { NewDeckInput, AddDeckText } from './style/Text'
import { AddDeck } from './style/Button'

class NewDeck extends Component {

  state = { text: '' }

  render() {
    return (
      <Wrapper>
        <Title>New Deck</Title>
        <NewDeckInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Deck Name'}
        />
        <AddDeck>
          <AddDeckText>Add Deck</AddDeckText>
        </AddDeck>
      </Wrapper>
    )
  }
}

export default NewDeck