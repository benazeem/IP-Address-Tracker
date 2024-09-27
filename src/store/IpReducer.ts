interface GeoData {
    ip: string;
    location: {
        country: string;
        region: string;
        city: string;
        lat: number;
        lng: number;
        postalCode: string;
        timezone: string;
        geonameId: number;
    };
    domains: string[];
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    };
    isp: string;
}
  
  export interface State {
    ip: string;
    geoData: GeoData;
    error: null | string;
  }


export const initialState: State = {
    ip: 'google.com',
    geoData: {
        ip: "142.250.72.142",
        location: {
            country: "US",
            region: "California",
            city: "The Greenhouse",
            lat: 37.41889,
            lng: -122.10361,
            postalCode: "",
            timezone: "-07:00",
            geonameId: 7150361
        },
        domains: [],
        as: {
            asn: 15169,
            name: "GOOGLE",
            route: "142.250.72.0/24",
            domain: "https://about.google/intl/en/",
            type: "Content"
        },
        isp: "Google LLC"
    },
    error: null,
};

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