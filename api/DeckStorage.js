import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'flashcards:decks'

export function fetchDecks () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => console.log(results))
}