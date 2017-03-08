export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}
export function charactersFindForId(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}
export function comicsFindForId(data) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data, };
}
export function modalSet(data) {
  return {
    type: 'MODAL@SET',
    data, };
}
export function modalClear(data) {
  return {
    type: 'MODAL@CLEAR',
    data, };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(r => r.json())
    .then((data) => {
      const series = data.data.results[0];
      dispatch(seriesInfoLoadComplete(series));
      dispatch(charactersFindForId(series.id));
      dispatch(comicsFindForId(series.id));
    });
  };
}

export function charactersInfoSearch(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
    .then(r => r.json())
    .then((data) => {
      const characters = data.data.results;
      dispatch(charactersFindAllComplete(characters));
    });
  };
}

export function comicsInfoSearch(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
    .then(r => r.json())
    .then((data) => {
      const comics = data.data.results;
      dispatch(comicsFindAllComplete(comics));
    });
  };
}
