import {
    setHowToDocuments,
    setRuleBooks,
} from './Database'
import {
    setRoster,
    setStandings
} from '../pages'
import { setAllImages } from '../pages/ImageUpload/ImageUtil.jsx'

export const setData = () => {
    setRoster();
    setStandings();
    setAllImages();
    setHowToDocuments();
    setRuleBooks();
  };