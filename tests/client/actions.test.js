import nock from 'nock'

import * as actions from '../../client/actions'

test('fetchDrummers', () => {
  const scope = nock('http://localhost')
    .get('/api/v1/users')
    .reply(200, [{ data: 'yay, drummers' }]);

  const dispatch = jest.fn();

  return actions
    .fetchDrummers('drummers')(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_DRUMMERS');
      scope.done();
    });
});

test('show error displays errorMessage', () => {
    let action = actions.showError('this is an error')
    expect(action.type).toBe('SHOW_ERROR')
    expect(action.errorMessage).toBe('this is an error')
})

