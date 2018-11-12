import styled from 'styled-components/native'

import { h2Size, h3Size } from './utils/fontSizes'

import { white, black, orange } from '../style/utils/colors'

const ButtonText = `
  text-align: center
  color: ${white}
`

const MediumButtonText = `
  font-size: 18px
`

const DefaultText = `
  font-size: 18px
  text-align: center
`

const MediumText = `
  font-size: 30px
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
  margin-top: 30%
  margin-bottom: 5%
  margin-left: 5%
  color: black
  width: 90%
  padding: 5%
  border-radius: 5px
  border: solid 1px ${orange}
`

export const NewCardInput = styled.TextInput`
  font-size: ${h2Size}
  text-align: center
  border-radius: 5px
  border: solid 1px ${orange}
  margin-top: 5%
  margin-left: 5%
  width: 90%
  padding: 5%
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

export const AddCardQuestionText = styled.Text`
  ${ButtonText}
  ${MediumButtonText}
  padding: 5%
`

export const StartQuizText = styled.Text`
  ${ButtonText}
  ${MediumButtonText}
  padding: 5%
`

export const QuestionText = styled.Text`
  ${MediumText}
  margin-top: 10%
  margin-bottom: 10%
`

export const QuestionAnswerOption = styled.Text`
  ${MediumButtonText}
  padding: 5%
  color: ${white}
  text-align: center
`
export const ShowAnswer = styled.Text`
  ${MediumButtonText}
  padding: 5%
  color: red
  text-align: center
`

export const Answer = styled.Text`
  text-align: center
  font-size: 24px
`

export const SelectAnswer = styled.Picker`
  border: solid 1px ${orange}
  width: 100%
`