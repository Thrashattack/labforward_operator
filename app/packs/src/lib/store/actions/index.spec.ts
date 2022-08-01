import { apiFetchRequested, apiFetchSucceeded } from '.';

describe('apiFetchRequested', () => {
  it('returns action description to fetch devices', () => {
    const action = apiFetchRequested('devices');

    expect(action).toEqual({
      type: 'API_FETCH_REQUESTED',
      payload: {
        model: 'devices',
        params: {},
      },
    });
  });
});

describe('apiFetchSucceeded', () => {
  it('returns action description to fetch devices', () => {
    const action = apiFetchSucceeded('devices', [{ id: 1 }, { id: 2 }]);

    expect(action).toEqual({
      type: 'API_FETCH_SUCCEEDED',
      payload: {
        model: 'devices',
        resources: [{ id: 1 }, { id: 2 }],
      },
    });
  });
});
