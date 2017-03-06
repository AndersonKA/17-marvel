import { combineReducers } from 'redux';
import series from './reducer/series-info';
import characters from './reducer/character-data';
import comics from './reducer/comic-data';
import modal from './reducer/modal';

export default combineReducers({
  series,
  characters,
  comics,
  modal
});
