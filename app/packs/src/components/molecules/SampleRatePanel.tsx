// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!rc-slider/assets/index.css';

import React, { ReactElement } from 'react';
import Slider, { SliderProps } from 'rc-slider';

import Tag from 'components/atoms/Tag';

const defaultMarks = {
  1: {
    style: {
      fontWeight: 'bold',
    },
    label: 'Real Time',
  },
  31: '0,5 minutes',
  61: '1 minute',
  91: '1,5 minutes',
  121: '2 minutes',
};

const SampleRatePanel = ({
  handleChange,
  marks = defaultMarks,
  min = 1,
  max = 121,
  step = 30,
}: {
  handleChange: SliderProps['onChange'];
  marks?: SliderProps['marks'];
  min?: SliderProps['min'];
  max?: SliderProps['max'];
  step?: SliderProps['step'];
}): ReactElement => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      borderRadius: 8,
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      width: 200,
      height: 400,
    }}
  >
    <Tag color="rgba(0, 0, 0, 0.7)" textcolor="lightcyan">
      Sample Rate
    </Tag>
    <div
      style={{
        height: 300,
      }}
    >
      <Slider
        reverse
        vertical
        min={min}
        startPoint={min}
        max={max}
        marks={marks}
        step={step}
        onChange={handleChange}
        defaultValue={min}
      />
    </div>
  </div>
);

export default SampleRatePanel;
