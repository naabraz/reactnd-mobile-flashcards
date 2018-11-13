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