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

test('when loading characters info replace the old character info', (assert) => {
  const oldState = { seriesData: { name: 'Thor' }, comics: [], characters: [], modal: null };
  const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Ironman' } };
  const expectedState = { seriesData: { name: 'Ironman' }, comics: [], characters: [], modal: null };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});
