import IpHeader from './components/IpHeader'
import Map from './components/Map'
import { useReducer } from 'react'
import IpReducer ,{initialState}from './store/IpReducer'
import './App.css'

function App() {

  const [state, dispatch] = useReducer(IpReducer, initialState)
  return (
    <>
    <IpHeader state={state} dispatch={dispatch} />
    <Map state={state}/>
    </>
  )
}

export default App
