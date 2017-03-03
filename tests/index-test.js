/* eslint-env qunit */

test('it is working', (assert) => {
  assert.ok(true);

    test('When loading series info replace the old series info', (assert) => {
      const oldState = { series: [{ firstName: 'Spider', lastName: 'Girl' }] };
      const actionOne = { type: 'CONTACT@FIND_ALL', data: [{ firstName: 'John', lastName: 'Cena' }] };
      const expectedState =

      assert.deepEqual(reducer(emptyState, actionOne), { contacts: actionOne.data });
    });


});
