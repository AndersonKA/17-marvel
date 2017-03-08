export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}
export function characterFindForId(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}
// export function comicsFindForId(findComics) {
//   return { type: 'COMICS@FIND_ALL_COMPLETE', data: findComics };
// }
// export function modalSet(modalUp) {
//   return { type: 'MODAL@SET', data: modalUp };
// }
// export function modalClear(modalDown) {
//   return { type: 'MODAL@CLEAR', data: modalDown };
// }

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
      // dispatch(comicsFindForId(comics));
    });
  };
}
