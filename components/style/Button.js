import styled from 'styled-components/native'

import {
  StyleSheet
} from 'react-native'

import {
  orange,
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
  background: rgba(43, 119, 34, 1)
`

export const QuizIncorrectButton = styled.TouchableOpacity `
  ${Button}
  ${MediumButton}
  ${CenteredButton}
  background: rgba(168, 0, 0, 1)
`
export const QuizShowAnswer = styled.TouchableOpacity `
  ${MediumButton}
  ${CenteredButton}
`

export const RestartQuizButton = styled.TouchableOpacity`
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const BackToDeckButton = styled.TouchableOpacity`
  ${Button}
  ${MediumButton}
  ${CenteredButton}
`

export const styles = StyleSheet.create({
  disabledCorrect: {
    backgroundColor: 'rgba(43, 119, 34, 0.5)'
  },
  disabledIncorrect: {
    backgroundColor: 'rgba(168, 0, 0, 0.5)'
  },
})