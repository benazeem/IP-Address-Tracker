import IpHeader from './components/IpHeader'
import Map from './components/Map'
import { useReducer } from 'react'
import './App.css'

function App() {
const initialState ={
  ip: 'facebook.com',
  geoData: {},
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    
    case 'IPSET':{
      return{...state,
        ip: action.payload
      }
    }
    
    case 'FETCHED': {
      return{...state,
        geoData: action.payload,
      }
    }
    case 'ERROR': {
      return{...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
}
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <IpHeader state={state} dispatch={dispatch} />
    
    <Map state={state} dispatch={dispatch} />
    </>
  )
}

export default App
