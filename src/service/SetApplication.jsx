import {
    setHowToDocuments,
    setRuleBooks,
} from './Database'
import {
    filterSessionsForRoster
} from '../pages'
import { setAllImages } from './Storage.jsx'

export const setData = () => {
    console.log(filterSessionsForRoster());
    setAllImages();
    setHowToDocuments();
    setRuleBooks();
  };