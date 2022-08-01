import { renderHook } from '@testing-library/react';

import {
  mockComponent,
  mockFetch,
  mockRailsConsumerSubscriptionCreate,
} from 'test/testUtils';

import useSubscribeToChannel from './useSubscribeToChannel';

mockComponent('components/molecules/SampleRatePanel');
mockFetch();

describe('ActionCable subscription and unsubscription', () => {
  const [createSubscription, unsubscribe] =
    mockRailsConsumerSubscriptionCreate();

  it('calls subscribe to channel on component mount and unsubscribe after unmount', () => {
    const { unmount } = renderHook(() => useSubscribeToChannel({}));

    expect(createSubscription).toHaveBeenCalled();
    unmount();
    expect(unsubscribe).toHaveBeenCalled();
  });
});
