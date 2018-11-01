import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Text = styled.Text`
  color: blue
`

class Decks extends Component {
  render() {
    return (
      <View>
        <Text>
          Decks will live here
        </Text>
      </View>
    )
  }
}

export default Decks