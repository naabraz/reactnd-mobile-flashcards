import styled from 'styled-components/native'

import { h2Size, h3Size } from './utils/fontSizes'

import { white, black } from '../style/utils/colors'

const ButtonText = `
  text-align: center
  color: ${white}
`

const MediumButtonText = `
  font-size: 18px
`

const DefaultText = styled.Text`
  font-size: 18px
  text-align: center
`

export const DeckNameButton = styled.Text`
  ${ButtonText}
  font-size: ${h2Size}  
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
  ${ButtonText}
  ${MediumButtonText}
  padding: 5%
`

export const EmptyDeckText = styled.Text`
  ${DefaultText}
`

export const DeckCardsQuantity = styled.Text`
  ${ButtonText}
  font-size: ${h3Size}
  margin-bottom: 10%
`

export const DeckName = styled.Text`
  color: ${black}
  font-size: ${h2Size}
  text-align: center
  padding-top: 10%
  margin-bottom: 10%
`
export const AddCardText = styled.Text`
  ${ButtonText}
  ${MediumButtonText}
  padding: 5%
`

export const StartQuizText = styled.Text`
  ${ButtonText}
  ${MediumButtonText}
  padding: 5%
`