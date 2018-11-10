import React from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { darkGray, lightGray, white, orange } from './style/utils/colors'

import DecksList from './DecksList'
import NewDeck from './NewDeck'

const headerOptions = {
  headerStyle: {
    backgroundColor: darkGray,
  },
  headerTintColor: white,
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const DeckStack = createStackNavigator({
  Decks: {
    screen: DecksList,
    navigationOptions: {
      ...headerOptions,
      tabBarLabel: 'My Decks',
    }
  },
})

const NewDeckStack = createStackNavigator({
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      ...headerOptions,
      tabBarLabel: 'Add Deck',
    }
  },
})

export default MainNavigator = createBottomTabNavigator(
  {
    ['My Decks']: DeckStack,
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