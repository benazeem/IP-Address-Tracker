interface GeoData {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
  }
  
  export interface State {
    ip: string;
    geoData: GeoData;
    error: null | string;
  }


  export const initialState ={
    ip: '8.8.8.8',
    geoData: {
      "status": "success",
      "country": "United States",
      "countryCode": "US",
      "region": "VA",
      "regionName": "Virginia",
      "city": "Ashburn",
      "zip": "20149",
      "lat": 39.03,
      "lon": -77.5,
      "timezone": "America/New_York",
      "isp": "Google LLC",
      "org": "Google Public DNS",
      "as": "AS15169 Google LLC",
      "query": "8.8.8.8"
    },
    error: null,
  }

interface IpSetAction {
    type: 'IPSET';
    payload: string;
}

interface FetchedAction {
    type: 'FETCHED';
    payload: GeoData;
}

interface ErrorAction {
    type: 'ERROR';
    payload: Error;
}

export type Action = IpSetAction | FetchedAction | ErrorAction;

function IpReducer (state: State, action: Action): State {
    switch (action.type) {
        case 'IPSET': {
            return {
                ...state,
                ip: action.payload,
            };
        }

        case 'FETCHED': {
            return {
                ...state,
                geoData: action.payload,
                error: null
            };
        }

        case 'ERROR': {
            return {
                ...state,
                error: action.payload.message,
            };
        }

        default:
            return state;
    }
};
  
export default IpReducer