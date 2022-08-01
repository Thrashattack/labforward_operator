import { renderHook } from '@testing-library/react';

import {
  mockActionApiFetchRequested,
  mockComponent,
  mockFetch,
  mockStoreDispatch,
} from 'test/testUtils';

import useFetchInitialData from './useFetchInitialData';

mockComponent('components/molecules/SampleRatePanel');
mockFetch();

describe('Store and actions calls to fetch initial data', () => {
  const dispatch = mockStoreDispatch();
  const action = mockActionApiFetchRequested();

  beforeEach(() => renderHook(() => useFetchInitialData()));

  it('calls dispatch with apiFetchRequested action for devices, channels and data_points', () => {
    expect(action).toHaveBeenCalledWith('devices');
    expect(action).toHaveBeenCalledWith('channels');
    expect(action).toHaveBeenCalledWith('data_points');
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
