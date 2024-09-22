import useUTCTime from '../hooks/useUTCTime'
import styles from './style.module.css'

function GeoData(props) {

    const {geoData} = props.state
    const {query, regionName, countryCode, zip, isp, timezone } = geoData
    const timeZone = useUTCTime(timezone);
  return (
    <div className={styles.geoDataContainer}>
        <div className={styles.geoData} >
         <div className={styles.geoDataField}>
              <h4>IP ADDRESS</h4>
              <h2>{query}</h2>
         </div>
         <div className={styles.divider}></div>
         <div className={styles.geoDataField}>
                <h4>LOCATION</h4>
                <h2>{`${regionName}, ${countryCode} - ${zip} `}</h2>
         </div>
            <div className={styles.divider}></div>
            <div className={styles.geoDataField}>
                <h4>TIMEZONE</h4>
            <h2>{`UTC ${timeZone}`}</h2>
            </div>
            <div className={styles.divider}></div>
            <div >
                <h4>ISP</h4>
                <h2>{isp}</h2>
                </div>  
        </div>
    </div>
  )
}

export default GeoData