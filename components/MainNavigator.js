import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { steelTeal, white } from './style/utils/colors'

import Decks from './Decks'
import NewDeck from './NewDeck'

export default MainNavigator = createBottomTabNavigator({
    Decks: {
      screen: Decks, 
      navigationOptions: { 
        tabBarLabel: 'My Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} /> 
      }
    },
    NewDeck: { 
      screen: NewDeck,
      navigationOptions: { 
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} /> 
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 60,
        backgroundColor: steelTeal,
      }
    }
  }
)