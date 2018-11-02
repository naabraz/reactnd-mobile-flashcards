import React, { Component } from 'react'
import styled from 'styled-components/native'

import { h1Size, h2Size } from '../utils/fontSizes'

const Title = styled.Text`
  margin-top: 50
  margin-bottom: 50
  font-size: ${h1Size}
  text-align: center;
`

class NewDeck extends Component {
  render() {
    return (
      <Title>New Deck</Title>
    )
  }
}

export default NewDeck