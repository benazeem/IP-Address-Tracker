import { State } from '../store/IpReducer'
import useUTCTime from '../hooks/useUTCTime'
import styles from './style.module.css'

function GeoData({state}: {state: State}) {
    const {geoData} = state
    const {query, regionName, countryCode, zip, isp, timezone } = geoData
    const timeZone = useUTCTime(timezone);

  return (
    <div className={styles.geoDataContainer}>
        <div className={styles.geoData} >
          <GeoDataField label='IP ADDRESS' value={query} />
         <Divider />
         <GeoDataField label='LOCATION' value={`${regionName}, ${countryCode} - ${zip} `} />
         <Divider />
         <GeoDataField label='TIMEZONE' value={`UTC ${timeZone}`} />
            <Divider />
            <GeoDataField label='ISP' value={isp} />
        </div>
    </div>
  )
}

const Divider = () =>{
  return (
    <div className={styles.divider}></div>
  )
}

const GeoDataField = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.geoDataField}>
    <p>{label}</p>
    <h2>{value}</h2>
  </div>
);

export default GeoData