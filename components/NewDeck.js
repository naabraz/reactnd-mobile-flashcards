import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'

import { addDeck } from '../api/DeckStorage'

import { Title } from './style/Title'
import { Wrapper } from './style/Wrapper'
import { NewDeckInput, AddDeckText } from './style/Text'
import { AddDeck } from './style/Button'

class NewDeck extends Component {

  state = { name: '' }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'Deck'
    }))
  }

  submitDeck = () => {
    addDeck(this.state.name)
    this.toHome()
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