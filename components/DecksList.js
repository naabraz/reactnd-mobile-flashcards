import React, {
  Component,
} from 'react'

import {
  fetchDecks,
} from '../api/DeckStorage'

import {
  DeckList,
} from './style/List'

import {
  DeckNameButton,
  EmptyDeckText,
  DeckCardsQuantity,
} from './style/Text'

import {
  Wrapper,
} from './style/Wrapper'

import {
  DeckButton,
} from './style/Button'

class Decks extends Component {
  static navigationOptions = {
    title: 'My Decks',
  }

  state = {
    decks: {}
  }

  getAllDecks = () => fetchDecks().then((decks) => this.setState({decks}))

  willFocusSubscription = this.props.navigation.addListener(
    'willFocus', () => this.getAllDecks()
  )

  componentWillUnmount() {
    willFocusSubscription.remove()
  }

  render() {
    const decks = this.state.decks

    const {
      navigation,
    } = this.props

    return (
      <Wrapper>
          {
            decks === null
            ?
              <EmptyDeckText>No Decks were found</EmptyDeckText>
            :
              <DeckList
                data={Object.keys(decks)}
                renderItem={({ item }) =>
                  <DeckButton onPress={() => navigation.navigate('Deck', { deckTitle: decks[item].title })}>
                    <DeckNameButton>{decks[item].title}</DeckNameButton>
                    <DeckCardsQuantity>
                      {`${decks[item].questions.length} ${'cards'}`}
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