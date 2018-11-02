import React, { Component } from 'react'
import styled from 'styled-components/native'

import { h1Size, h2Size } from '../utils/fontSizes'
import { nyanza } from '../utils/colors'
import { mockDecks } from '../utils/mocks'

const Wrapper = styled.View`
  flex: 2
  align-items: center
  background-color: ${nyanza}
`

const Title = styled.Text`
  margin-top: 50
  margin-bottom: 50
  font-size: ${h1Size}
  text-align: center;
`
const DeckList = styled.FlatList`
`

const DeckName = styled.Text`
  font-size: ${h2Size}
  margin-bottom: 50
`

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