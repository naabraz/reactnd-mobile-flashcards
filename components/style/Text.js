import styled from 'styled-components/native'

import { h2Size } from './utils/fontSizes'

import { white } from '../style/utils/colors'

export const DeckName = styled.Text`
  font-size: ${h2Size}
  text-align: center
  color: ${white}
  padding: 5%
`

export const NewDeckInput = styled.TextInput`
  font-size: ${h2Size}
  height: 50
  text-align: center
  padding-top: 50%
  padding-bottom: 10%
  color: black
`

export const AddDeckText = styled.Text`
  font-size: 18px
  text-align: center
  padding: 5%
  color: ${white}
`

export const EmptyDeckText = styled.Text`
  font-size: 18px
  text-align: center
`