import React, { ReactElement, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { startCase } from 'lodash';

import { Channel, Device, State } from 'lib/store/reducers';
import Tag from 'components/atoms/Tag';

import SampleRatePanel from './SampleRatePanel';

export interface ChartProps {
  channel: Channel;
  device: Device;
}

const STEP = 30;

const Chart = ({ channel, device }: ChartProps): ReactElement => {
  const [sampleRate, setSampleRate] = useState(1);
  const dataPoints = useSelector((state: State) => state.dataPoints);

  const data = useMemo(
    () =>
      dataPoints.filter(
        (dataPoint, index) =>
          dataPoint.channelId === channel.id && index % sampleRate === 0
      ),
    [dataPoints, sampleRate]
  );

  const handleChange = useCallback(
    (value: number | number[]): void => {
      if (value > sampleRate) setSampleRate(sampleRate + STEP);
      if (value < sampleRate)
        setSampleRate(sampleRate - STEP > 1 ? sampleRate - STEP : 1);
    },
    [sampleRate]
  );

  return (
    <div
      style={{
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: 700,
        margin: 8,
      }}
    >
      <div
        style={{
          padding: 8,
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: 30,
          marginBottom: 42,
        }}
      >
        <Tag color="rgb(240, 250, 255)" textcolor="rgb(0, 0, 0)">
          Device: {device.name}{' '}
        </Tag>
        <Tag color="rgb(240, 250, 255)" textcolor="rgb(0, 0, 0)">
          Channel: {startCase(channel.name)}
        </Tag>
        <Tag color="rgb(240, 250, 255)" textcolor="rgb(0, 0, 0)">
          Current Value: {data && data[data.length - 1]?.value.toFixed(3)}
        </Tag>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 8,
        }}
      >
        <SampleRatePanel handleChange={handleChange} />
        <LineChart
          key={`device-${device.id}-channel-${channel.id}`}
          data={data}
          height={400}
          width={500}
        >
          <Line dataKey="value" />
          <CartesianGrid stroke="lightgray" strokeDasharray="5 5" />
          <XAxis dataKey="createdAt" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
