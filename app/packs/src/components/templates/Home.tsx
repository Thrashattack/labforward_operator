import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import Dashboard from 'components/organisms/Dashboard';
import store from 'lib/store';

const Home = (): ReactElement => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
);

export default Home;
