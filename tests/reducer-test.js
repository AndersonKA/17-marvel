import reducer from '../app/reducer';

test('it is working', (assert) => {
  assert.ok(true);
});

test('loading series info for the first time', (assert) => {
  const oldState = { seriesData: null, comics: [], characters: [], modal: null };
  const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spiderman' } };
  const expectedState = { seriesData: { name: 'Spiderman' }, comics: [], characters: [], modal: null };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('when loading series info replace the old series info', (assert) => {
  const oldState = { seriesData: { name: 'Thor' }, comics: [], characters: [], modal: null };
  const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Ironman' } };
  const expectedState = { seriesData: { name: 'Ironman' }, comics: [], characters: [], modal: null };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('when loading character info replace the old character info', (assert) => {
  const oldState = { characters: { name: 'Thor' }, comics: [], seriesData: [], modal: null };
  const actionOne = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: { name: 'Ironman' } };
  const expectedState = { characters: { name: 'Ironman' }, comics: [], seriesData: [], modal: null };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('when loading comic info replace the old comic info', (assert) => {
  const oldState = { comics: { name: 'Thor' }, characters: [], seriesData: [], modal: null };
  const actionOne = { type: 'COMICS@FIND_ALL_COMPLETE', data: { name: 'Ironman' } };
  const expectedState = { comics: { name: 'Ironman' }, characters: [], seriesData: [], modal: null };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});

test('when adding modal data replace the old modal description', (assert) => {
  const oldState = { comics: [], characters: [], seriesData: [], modal: null };
  const actionOne = { type: 'MODAL@SET', data: { message: 'readmore' } };
  const expectedState = { comics: [], characters: [], seriesData: [], modal: { message: 'readmore' } };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});


test('when clearing modal data set the modal state to null', (assert) => {
  const oldState =  { comics: [], characters: [], seriesData: [], modal: { message: 'readmore' } };
  const actionOne = { type: 'MODAL@SET', data: null };
  const expectedState = { comics: [], characters: [], seriesData: [], modal: null };
  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});
