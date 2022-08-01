/* eslint-disable camelcase */
import reducers, { Resource, normalize } from '.';

describe('reducers', () => {
  it('returns initial state', () => {
    const state = reducers();

    expect(state).toEqual({
      channels: [],
      dataPoints: [],
      devices: [],
    });
  });

  it('returns state with channels', () => {
    const state = reducers(undefined, {
      type: 'API_FETCH_SUCCEEDED',
      payload: {
        model: 'channels',
        resources: [{ id: 1 }, { id: 2 }],
      },
    });

    expect(state).toEqual({
      channels: [{ id: 1 }, { id: 2 }],
      dataPoints: [],
      devices: [],
    });
  });
});

describe('normalize', () => {
  it('returns normalized resources', () => {
    const resources = [
      { id: 1, created_at: '', updated_at: '' },
      { id: 2, created_at: '', updated_at: '' },
    ];
    const normalized = normalize(resources as unknown as Resource[]);

    expect(normalized).toEqual([
      { id: 1, createdAt: '', updatedAt: '', created_at: '', updated_at: '' },
      { id: 2, createdAt: '', updatedAt: '', created_at: '', updated_at: '' },
    ]);
  });
});
