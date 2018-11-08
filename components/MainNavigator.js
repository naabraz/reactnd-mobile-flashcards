import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { darkGrey, white } from './style/utils/colors'

import Decks from './Decks'
import NewDeck from './NewDeck'

const headerOptions = {
  headerStyle: {
    backgroundColor: darkGrey,
  },
  headerTintColor: white,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const DeckStack = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      ...headerOptions,
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
})

const NewDeckStack = createStackNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      ...headerOptions,
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
})

export default MainNavigator = createBottomTabNavigator(
  {
    Decks: DeckStack,
    NewDeck: NewDeckStack,
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 60,
        backgroundColor: darkGrey,
      }
    }
  }
)