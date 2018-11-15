import React, {
  Component
} from 'react'

import {
  Text,
  View
} from 'react-native'

import {
  Wrapper
} from './style/Wrapper'

import {
  QuestionText,
  QuestionAnswerOption,
  ShowAnswer,
  Answer
} from './style/Text'

import {
  QuizCorrectButton,
  QuizIncorrectButton,
  QuizShowAnswer,
  styles
} from './style/Button'

class Quiz extends Component {
  state = {
    number: 0,
    showAnswer: false,
    points: 0,
  }

  nextQuestion(option) {
    const deck = this.props.navigation.getParam('deck')
    const { number } = this.state

    if (deck.questions[number].answer === option) this.setState({ points: points + 1})

    number + 1 < deck.questions.length
      ? this.setState({ number: number + 1, showAnswer: false })
      : this.props.navigation.navigate('Deck', { deckTitle: deck.title })
  }

  render() {
    const deck = this.props.navigation.getParam('deck')

    const {
      number,
      showAnswer,
    } = this.state

    return (
      <Wrapper>
        <Text>{`${number + 1} / ${deck.questions.length}`}</Text>

        {showAnswer
          ?
            <Answer style={{marginBottom: 25}}>
              {`${deck.questions[number].answer}!`}
            </Answer>
          :
            <View>
              <QuestionText>
                {deck.questions[number].question}
              </QuestionText>

              <QuizShowAnswer 
                onPress={() => this.setState({ showAnswer: !showAnswer })}
                style={{marginBottom: 25}}>
                <ShowAnswer>Answer</ShowAnswer>
              </QuizShowAnswer>
            </View>
        }

        <QuizCorrectButton
          onPress={() => this.nextQuestion('Correct')}
          disabled={showAnswer}
          style={[showAnswer && deck.questions[number].answer !== 'Correct' ? styles.disabledCorrect : '']}>
          <QuestionAnswerOption>Correct</QuestionAnswerOption>
        </QuizCorrectButton>

        <QuizIncorrectButton
          onPress={() => this.nextQuestion('Incorrect')}
          disabled={showAnswer}
          style={[showAnswer && deck.questions[number].answer !== 'Incorrect' ? styles.disabledIncorrect : '']}>
          <QuestionAnswerOption>Incorrect</QuestionAnswerOption>
        </QuizIncorrectButton>
      </Wrapper>
    )
  }
}

export default Quiz