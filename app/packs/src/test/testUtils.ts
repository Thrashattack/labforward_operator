import { createElement } from 'react';
import * as railsConsumer from '@rails/actioncable';

import * as actions from 'lib/store/actions';
import store from 'lib/store';

export const mockStoreDispatch = (): jest.Mock => {
  const dispatch = jest.fn();

  jest
    .spyOn(store, 'dispatch')
    .mockImplementationOnce(dispatch)
    .mockImplementationOnce(dispatch)
    .mockImplementationOnce(dispatch);

  return dispatch;
};

export const mockActionApiFetchRequested = (): jest.Mock => {
  const mockApiFetchRequested = jest.fn((model: string, params?: unknown) => ({
    type: 'API_FETCH_REQUESTED_MOCK',
    payload: {
      model,
      params,
    },
  }));

  jest
    .spyOn(actions, 'apiFetchRequested')
    .mockImplementationOnce(mockApiFetchRequested)
    .mockImplementationOnce(mockApiFetchRequested)
    .mockImplementationOnce(mockApiFetchRequested);

  return mockApiFetchRequested;
};

export const mockRailsConsumerSubscriptionCreate = (): jest.Mock[] => {
  const unsubscribe = jest.fn();
  const create = jest.fn(() => ({
    unsubscribe,
  }));

  const mockConsumer = jest.fn(
    () =>
      ({
        subscriptions: {
          create,
        },
      } as unknown as railsConsumer.Consumer)
  );

  jest.spyOn(railsConsumer, 'createConsumer').mockImplementation(mockConsumer);

  return [create, unsubscribe];
};

export const mockFetch = (result?: unknown): jest.Mock => {
  const fetchMock = jest.fn(() => Promise.resolve(result));

  global.fetch = fetchMock as unknown as typeof global.fetch;

  return fetchMock;
};

export const mockComponent = (module: string): typeof jest =>
  jest.mock(module, () => createElement('div'));
