import { combineReducers } from 'redux';
import seriesData from './reducer/series-info';
import characters from './reducer/character-data';
import comics from './reducer/comic-data';
import modal from './reducer/modal';

export default combineReducers({
  seriesData,
  characters,
  comics,
  modal
});
