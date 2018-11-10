import React, { Component } from 'react'

import { fetchDecks } from '../api/DeckStorage'

import { DeckList } from './style/List'
import { DeckName, EmptyDeckText, DeckCardsQuantity } from './style/Text'
import { Wrapper } from './style/Wrapper'
import { DeckButton } from './style/Button'

class Decks extends Component {
  static navigationOptions = {
    title: 'My Decks',
  }

  getAllDecks = () => fetchDecks().then((decks) => this.setState({decks}))

  willFocusSubscription = this.props.navigation.addListener(
    'willFocus', () => this.getAllDecks()
  )

  state = {
    decks: {}
  }

  componentWillUnmount() {
    willFocusSubscription.remove()
  }

  getDeck = () => console.log('getDeck')

  render() {
    return (
      <Wrapper>
          {
            this.state.decks === null
            ?
              <EmptyDeckText>No Decks were found</EmptyDeckText>
            :
              <DeckList
                data={Object.keys(this.state.decks)}
                renderItem={({ item }) =>
                  <DeckButton onPress={this.getDeck}>
                    <DeckName>{this.state.decks[item].title}</DeckName>
                    <DeckCardsQuantity>
                      {`${this.state.decks[item].questions.length} ${'cards'}`}
                    </DeckCardsQuantity>
                  </DeckButton>
                }
                keyExtractor={(index) => index.toString()}
              />
          }
      </Wrapper>
    )
  }
}

export default Decks