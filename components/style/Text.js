import styled from 'styled-components/native'

import { h2Size, h3Size } from './utils/fontSizes'

import { white } from '../style/utils/colors'

export const DeckName = styled.Text`
  font-size: ${h2Size}
  text-align: center
  color: ${white}
  padding: 5%
`

export const NewDeckInput = styled.TextInput`
  font-size: ${h2Size}
  text-align: center
  padding-top: 30%
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

export const DeckCardsQuantity = styled.Text`
  font-size: ${h3Size}
  color: ${white}
  text-align: center
`