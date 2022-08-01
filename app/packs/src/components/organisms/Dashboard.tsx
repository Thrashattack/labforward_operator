import React, { ReactElement, useCallback } from 'react';
import { useSelector } from 'react-redux';

import Chart from 'components/molecules/Chart';
import Container from 'components/molecules/Container';
import { Device, State } from 'lib/store/reducers';
import useFetchInitialData from 'lib/hooks/useFetchInitialData';
import useSubscribeToChannel from 'lib/hooks/useSubscribeToChannel';

const Dashboard = (): ReactElement => {
  useFetchInitialData();
  useSubscribeToChannel({});
  const devices = useSelector((state: State) => state.devices);
  const channels = useSelector((state: State) => state.channels);

  const getChannelsByDevice = useCallback(
    (device: Device) =>
      channels.filter((channel) => channel.deviceId === device.id),
    [channels]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h2> Real Time Dashboard </h2>
      <Container>
        {devices.map((device) =>
          getChannelsByDevice(device).map((channel) => (
            <Chart key={channel.id} channel={channel} device={device} />
          ))
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
