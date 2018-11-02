import React, { Component } from 'react'

import { mockDecks } from '../utils/mocks'

import { Title } from './style/Title'
import { DeckList } from './style/List'
import { DeckName } from './style/Text'
import { Wrapper } from './style/Wrapper'

class Decks extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Decks</Title>
          <DeckList
            data={Object.keys(mockDecks)}
            renderItem={({ item }) => <DeckName>{mockDecks[item].title}</DeckName>}
            keyExtractor={(index) => index.toString()}
          />
      </Wrapper>
    )
  }
}

export default Decks