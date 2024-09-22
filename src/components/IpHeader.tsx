import GeoData from './GeoData'
import styles from './style.module.css'
import { useGetIpData } from '../hooks/useGetIpData'
import { useEffect, useRef } from 'react'


function IpHeader(props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const {state, dispatch} = props
  const {ip} = state;
  const getIpData = useGetIpData( inputRef.current?.value || ip);
  
  const handleSearch = () => {
    if(inputRef.current?.value === '') return alert('Please enter an IP address')
    dispatch({type:'IPSET', payload: inputRef.current?.value})
  }
 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    }
    inputRef.current?.addEventListener('keydown', handleKeyDown)

    return () => {
      inputRef.current?.removeEventListener('keydown', handleKeyDown)
    }
  }, [inputRef.current?.value]);

   useEffect(() => {
    getIpData
    .then(response => { 
      if(response.status === 'fail') throw new Error("Invalid IP address")
      dispatch({type: 'FETCHED', payload: response})
    })
    .catch(error => {
      dispatch({type: 'ERROR', payload: error})
      console.log(error)
    } )
    }, [ip]) 

 

  return (<>
    <div className={styles.header}>
      <h2>IP Address Tracker</h2>
      <div className={styles.search}>
        <input ref={inputRef} className={styles.searchInput} defaultValue={'facebook.com'} type='text' placeholder='Search for any IP address or domain' />
        <button onClick={handleSearch} className={styles.searchBtn}>&gt;</button>
        </div></div>
        <GeoData state={state} />
        </>
  )
}

export default IpHeader