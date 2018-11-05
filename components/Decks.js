import React, { Component } from 'react'

import { mockDecks } from '../utils/mocks'

import { Title } from './style/Title'
import { DeckList } from './style/List'
import { DeckName } from './style/Text'
import { Wrapper } from './style/Wrapper'
import { DeckButton } from './style/Button'

class Decks extends Component {
  getDeck = () => console.log('getDeck')

  render() {
    return (
      <Wrapper>
        <Title>Decks</Title>
          <DeckList
            data={Object.keys(mockDecks)}
            renderItem={({ item }) => <DeckButton onPress={this.getDeck}><DeckName>{mockDecks[item].title}</DeckName></DeckButton>}
            keyExtractor={(index) => index.toString()}
          />
      </Wrapper>
    )
  }
}

export default Decks