import { useEffect, useRef, useState, Dispatch } from 'react';
import GeoData from './GeoData';
import styles from './style.module.css';
import { useGetIpData } from '../hooks/useGetIpData';
import { Action, State } from '../store/IpReducer';
import arrow from '../assets/icon-arrow.svg';

type PropType = {
  state: State,
  dispatch: Dispatch<Action>
}

function IpHeader({state, dispatch}:PropType) {
  const inputRef = useRef<HTMLInputElement>(null)
  const {ip} = state;
  const getIpData = useGetIpData;
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleSearch = () => {
    const inputValue = inputRef.current?.value
    if(!inputValue)  { dispatch({type: 'ERROR', payload: {name: 'ValidationError', message:'Please enter an IP address'}});
     return;}
      dispatch({type:'IPSET', payload: inputValue})
    setIsButtonDisabled(true)
  }
 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isButtonDisabled) {
       handleSearch()
      }
    }
    const inputElement = inputRef.current;
    inputElement?.addEventListener('keydown', handleKeyDown)
    return () => {
      inputElement?.removeEventListener('keydown', handleKeyDown)
    }
  }, [isButtonDisabled]);

   useEffect(() => {
     getIpData(ip)
    .then(response => { 
      if(response.status === 'fail') 
    throw new Error("Invalid IP address");
      dispatch({type: 'FETCHED', payload: response})
    })
    .catch(error => {
      dispatch({type: 'ERROR', payload: error}) 
    } )
    }, [ip, dispatch, getIpData]) 

  return (<>
    <div className={styles.header}>
      <h2>IP Address Tracker</h2>
      <div className={styles.search}>
        <input ref={inputRef} className={styles.searchInput}  type='text' placeholder='Search for any IP address or domain' onChange={()=>setIsButtonDisabled(false)} />
        <button   disabled={isButtonDisabled}  onClick={handleSearch} className={styles.searchBtn}><img src={arrow} alt='Arrow Image'/></button>
        </div>
       <GeoData state={state} />
       </div>
        {state.error&&<div className={styles.errorArea}><p>{state.error}</p></div>}       
       
        </>
  )
}

export default IpHeader



