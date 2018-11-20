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
      questions: [],
      scores: [],
    }
  }))
}

export function addCard(title, questions) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      questions
    }
  }))
}

export function getDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((result) => JSON.parse(result)[title])
}

export function addDayScore(deck) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: {
      ...deck
    }
  }))
}

export function removeDeck() {
  return AsyncStorage.clear()
}