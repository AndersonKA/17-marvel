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

export function seriesInfoSearch() {
  return (next) => {
    // need to fix link???
    fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=TITLE&apikey=APIKEY')
      .then(r => r.json())
      .then((data) => {
        next(seriesInfoLoadComplete(data));
      });
  };
}
