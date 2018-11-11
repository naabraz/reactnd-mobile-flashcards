import {
  AsyncStorage
} from 'react-native'

export const DECK_STORAGE_KEY = 'flashcards:decks'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((result) => JSON.parse(result))
}

export function addDeck(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck]: {
      title: deck,
      questions: []
    }
  }))
}

export function addCard(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: {
      questions: deck.questions
    }
  }))
}

export function removeDeck() {
  return AsyncStorage.clear()
}