import React from 'react'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { darkGray, lightGray, white, orange } from './style/utils/colors'

import DecksList from './DecksList'
import NewDeck from './NewDeck'
import Deck from './Deck'
import NewCard from './NewCard'
import Quiz from './Quiz'
import QuizResult from './QuizResult'

const headerOptions = {
  headerStyle: {
    backgroundColor: darkGray,
  },
  headerTintColor: white,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const DecksListStack = createStackNavigator({
  DeckList: {
    screen: DecksList,
    navigationOptions: {
      ...headerOptions,
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      ...headerOptions,
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      ...headerOptions,
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      ...headerOptions,
    }
  },
  QuizResult: {
    screen: QuizResult,
    navigationOptions: {
      ...headerOptions,
    }
  }
})

const NewDeckStack = createStackNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      ...headerOptions,
    }
  },
})

export default MainNavigator = createBottomTabNavigator(
  {
    ['My Decks']: DecksListStack,
    ['New Deck']: NewDeckStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state

        const icons = routeName === 'NewDeck' ?
          <MaterialIcons name={'add-box'} size={30} color={tintColor} /> :
          <MaterialCommunityIcons name={'cards'} size={30} color={tintColor} />

        return icons
      },
    }),

    tabBarOptions: {
      activeTintColor: orange,
      inactiveTintColor: lightGray,
      style: {
        height: 60,
        backgroundColor: darkGray,
      }
    }
  }
)