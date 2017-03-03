import reducer from '../app/reducer';

test('it is working', (assert) => {
  assert.ok(true);
});

test('When loading series info replace the old series info', (assert) => {
  const oldState = { character: [{ firstName: 'Spider', lastName: 'Girl', id: 1 }] };
  const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE' };
  const expectedState = { character: [{ firstName: 'Captain', lastName: 'America', id: 2 }] };

  assert.deepEqual(reducer(oldState, actionOne), expectedState);
});
