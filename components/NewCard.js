import React, { Component } from 'react'

import { Wrapper } from './style/Wrapper'
import { NewCardInput, AddCardQuestionText } from './style/Text'
import { AddCardQuestion } from './style/Button'

class NewCard extends Component {
  static navigationOptions = {
    title: 'Add Card'
   }

  render() {
    return (
      <Wrapper>
        <NewCardInput 
          placeholder={'Question'}
        />
        <NewCardInput
          style={{marginBottom: 10}}
          placeholder={'Response'}
        />
        <AddCardQuestion>
          <AddCardQuestionText>
            Add Card
          </AddCardQuestionText>
        </AddCardQuestion>
      </Wrapper>
    )
  }
}

export default NewCard