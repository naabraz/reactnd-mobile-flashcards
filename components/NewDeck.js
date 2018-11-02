import React, { Component } from 'react'

import { Title } from './style/Title'
import { Wrapper } from './style/Wrapper'

class NewDeck extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          New Deck
        </Title>
      </Wrapper>
    )
  }
}

export default NewDeck