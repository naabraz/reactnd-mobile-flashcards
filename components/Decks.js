import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { h1Size } from '../utils/fontSizes'
import { mockDecks } from '../utils/mocks'

const Wrapper = styled.View`
  margin-top: 50px;
`

const Title = styled.Text`
  font-size: ${h1Size}
  text-align: center;
`

class Decks extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Decks</Title>
      </Wrapper>
    )
  }
}

export default Decks