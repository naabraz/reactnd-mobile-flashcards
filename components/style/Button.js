import styled from 'styled-components/native'

import {
  orange
} from '../style/utils/colors'

const Button = `
  background: ${orange}
  border-radius: 5px
  margin-left: 25%
  margin-bottom: 5%
`

const MediumButton = `
  width: 50%
`

const BigButton = `
  width: 55%
  padding: 5%
`

const CenteredButton = `
  margin-left: 25%
`

export const DeckButton = styled.TouchableOpacity `
  ${Button}
  ${BigButton}
`

export const AddDeck = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const AddCard = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const StartQuiz = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const AddCardQuestion = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const QuizCorrectButton = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
  background: green
`

export const QuizIncorrectButton = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
  background: red
`
export const QuizShowAnswer = styled.TouchableOpacity `
  ${MediumButton}
  ${CenteredButton}
`