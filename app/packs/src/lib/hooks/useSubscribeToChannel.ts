import { useEffect } from 'react';
import { createConsumer } from '@rails/actioncable';

import { apiFetchSucceeded } from 'lib/store/actions';
import { DataPoint } from 'lib/store/reducers';
import store from 'lib/store';

export interface SubscribeToChannelProps {
  channel?: string;
}

export const useSubscribeToChannel = ({
  channel = 'DownstreamChannel',
}: SubscribeToChannelProps): void => {
  useEffect(() => {
    const consumer = createConsumer();
    const sub = consumer.subscriptions.create(
      { channel },
      {
        received(data: DataPoint) {
          store.dispatch(apiFetchSucceeded('dataPoints', [data]));
        },
      }
    );

    return function cleanup() {
      sub.unsubscribe();
    };
  }, []);
};

export default useSubscribeToChannel;
