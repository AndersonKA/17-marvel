export function seriesInfoLoadComplete(addSeries) {
  return { type: 'SERIES_INFO@LOAD_COMPLETE', data: addSeries };
}
export function characterFindForId(findCharacters) {
  return { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: findCharacters };
}
export function comicsFindForId(findComics) {
  return { type: 'COMICS@FIND_ALL_COMPLETE', data: findComics };
}
export function modalSet(modalUp) {
  return { type: 'MODAL@SET', data: modalUp };
}
export function modalClear(modalDown) {
  return { type: 'MODAL@CLEAR', data: modalDown };
}

export function seriesInfoSearch(id) {
  return (dispatch) => {
    // need to fix link???
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE').then(r => r.json()).then((data) => {
      const series = data.data.results;
    });
    dispatch(seriesInfoLoadComplete(series));
  };
}

export function charactersInfoSearch(id) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/characters').then(r => r.json()).then((data) => {
      const characters = data.data.results;
    });
    dispatch(characterFindForId(characters));
  };
}

export function comicsInfoSearch(id) {
  return (dispatch) => {
    fetch('http://marvel-is-broke.herokuapp.com/series/ID/comics').then(r => r.json()).then((data) => {
      const comics = data.data.results;
    });
    dispatch(comicsFindForId(comics));
  };
}
