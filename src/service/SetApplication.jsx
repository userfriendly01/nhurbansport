import {
    setHowToDocuments,
    setRuleBooks,
} from './Database'
import {
    setRoster,
    setStandings
} from '../pages'
import { setAllImages } from './Storage.jsx'

export const setData = () => {
    setRoster();
    setStandings();
    setAllImages();
    setHowToDocuments();
    setRuleBooks();
  };