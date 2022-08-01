import { mockFetch } from 'test/testUtils';

import toParams from './toParams';
import middleware from '.';
import store from '..';

store.dispatch = jest.fn();
const nextMock = jest.fn();
const fetchMock = mockFetch({
  json() {
    return { id: 1 };
  },
});

describe('middleware', () => {
  it('returns next action', () => {
    const action = { type: 'DUMMY' };

    middleware(store)(nextMock)(action);

    expect(nextMock).toHaveBeenCalledWith(action);
  });

  it('calls fetch when action is FETCH REQUESTED', () => {
    const action = {
      type: 'API_FETCH_REQUESTED',
      payload: {
        model: 'devices',
        params: { devices: [{ id: 1 }] },
      },
    };

    middleware(store)(nextMock)(action);

    expect(fetchMock).toHaveBeenCalledWith(
      `/api/${action.payload.model}.json?${toParams(action.payload.params)}`,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  });
});
