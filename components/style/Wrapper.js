import styled from 'styled-components/native'

import {
  lightGray
} from './utils/colors'

export const MainView = styled.View `
  flex: 1
`

export const Wrapper = styled.KeyboardAvoidingView `
  flex: 2
  background-color: ${lightGray}
`

export const QuizAnswerResult = styled.View `
  margin-top: 25%
  margin-bottom: 10%
`