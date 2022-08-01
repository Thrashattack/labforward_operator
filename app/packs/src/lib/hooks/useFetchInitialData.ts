import { useEffect } from 'react';

import { apiFetchRequested } from 'lib/store/actions';
import store from 'lib/store';

const useFetchInitialData = (): void => {
  useEffect(() => {
    store.dispatch(apiFetchRequested('devices'));
    store.dispatch(apiFetchRequested('channels'));
    store.dispatch(apiFetchRequested('data_points'));
  }, []);
};

export default useFetchInitialData;
