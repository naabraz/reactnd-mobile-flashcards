import React, { Component } from 'react'
import { Text } from 'react-native'

import { addDeck } from '../api/DeckStorage'

import { Wrapper } from './style/Wrapper'
import { NewDeckInput, AddDeckText } from './style/Text'
import { AddDeck } from './style/Button'

class NewDeck extends Component {
  static navigationOptions = {
    title: 'New Deck',
  }

  state = {
    name: '',
    nameError: false,
  }

  toHome = () => {
    this.props.navigation.navigate('Deck', {deckTitle: this.state.name})
  }

  checkDeckName = () => {
    if (this.state.name.trim() === '') {
      this.setState(() => ({ nameError: true }))
    } else {
      this.submitDeck()
    }
  }

  submitDeck = () => {
    if (!this.state.nameError) {
      addDeck(this.state.name)

      this.setState({name: ''})
      this.toHome()
    }
  }

  componentWillUnmount() {
    willFocusSubscription.remove()
  }

  render() {
    return (
      <Wrapper behavior="padding" enabled>
        <NewDeckInput
          onChangeText={(name) => this.setState({name, nameError: false})}
          value={this.state.name}
          placeholder={'Deck Name'}
        />

        {
          this.state.nameError && (<Text style={{color: '#f00'}}>{'You need to enter a Deck Name'}</Text>)
        }

        <AddDeck onPress={this.checkDeckName}>
          <AddDeckText>Add Deck</AddDeckText>
        </AddDeck>
      </Wrapper>
    )
  }
}

export default NewDeck