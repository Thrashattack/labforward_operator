import { AnyAction } from 'redux';
import { camelCase } from 'lodash';

export interface Resource {
  [key: string]: number | Date | string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Channel extends Resource {
  deviceId: number;
  name: string;
}

export interface DataPoint extends Resource {
  channelId: number;
  value: number;
}

export interface Device extends Resource {
  name: string;
}

export interface State {
  [key: string]: Channel[] | DataPoint[] | Device[];
  channels: Channel[];
  dataPoints: DataPoint[];
  devices: Device[];
}

const initialState: State = {
  channels: [],
  dataPoints: [],
  devices: [],
};

export const normalize = (resources: Array<Resource>): Array<Resource> =>
  resources.map((resource) => {
    const final: Resource = {
      ...resource,
    };

    function normalizeKeys(key: string) {
      final[camelCase(key)] = resource[key];
    }

    Object.keys(resource).forEach(normalizeKeys);

    return final;
  });

const reducers = (
  state: State = initialState,
  action: AnyAction = { type: 'DUMMY' }
): State => {
  switch (action.type) {
    case 'API_FETCH_SUCCEEDED':
      return {
        ...state,
        [action.payload.model]: [
          ...(state[camelCase(action.payload.model)] as []),
          ...normalize(action.payload.resources),
        ],
      };
    default:
      return state;
  }
};

export default reducers;
