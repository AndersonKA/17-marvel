import { combineReducers } from 'redux';
import series from './reducer/series-info';
import characters from './reducer/character-data';
import comics from './reducer/series-data';
import modal from './reducer/modal';

export default combineReducers({
  series,
  characters,
  comics,
  modal
});

// export default function reducer(state, action) {
//   switch (action.type) {
//     // Replace old series info
//     case 'SERIES_INFO@LOAD_COMPLETE':
//       return data;
//     // replace old character info
//     case 'CHARACTERS@FIND_ALL_COMPLETE':
//       return data;
//     // replace old comics info
//     case 'COMICS@FIND_ALL_COMPLETE':
//       return data;
//     // replace old modal data
//     case 'MODAL@SET':
//       return data;
//     // clear old modal data and set it to null
//     case 'MODAL@CLEAR':
//       return null;
//     default:
//       return state || { contacts: [] };
//   }
// }
