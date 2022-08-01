import { mockFetch } from 'test/testUtils';

import toParams from './toParams';
import middleware from '.';
import store from '..';

describe('middleware', () => {
  it('returns next action', () => {
    const next = jest.fn();
    const action = { type: 'DUMMY' };

    middleware(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });

  it('calls fetch when action is FETCH REQUESTED', () => {
    const next = jest.fn();
    const fetchMock = mockFetch();
    const action = {
      type: 'API_FETCH_REQUESTED',
      payload: {
        model: 'devices',
        params: {},
      },
    };

    middleware(store)(next)(action);

    expect(fetchMock).toHaveBeenCalledWith(
      `/api/${action.payload.model}.json?${toParams(action.payload.params)}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  });
});
