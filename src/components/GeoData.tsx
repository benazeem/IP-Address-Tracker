import { State } from '../store/IpReducer'
import styles from './style.module.css'

function GeoData({state}: {state: State}) {
    const {geoData} = state
    const {ip , location, isp } = geoData
    const {region,city, country, postalCode,timezone} = location

  return (
    <div className={styles.geoDataContainer}>
        <div className={styles.geoData} >
          <GeoDataField label='IP ADDRESS' value={ip} />
         <Divider />
         <GeoDataField label='LOCATION' value={`${city}, ${region}, ${country}  ${postalCode} `} />
         <Divider />
         <GeoDataField label='TIMEZONE' value={`UTC ${timezone}`} />
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