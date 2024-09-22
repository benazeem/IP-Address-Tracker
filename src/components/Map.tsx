import { MapContainer,Marker, TileLayer, useMap } from 'react-leaflet'
import styles from './style.module.css'
// import { useMap } from 'react-leaflet'

function Map(props) {

  const lat:number = props.state.geoData.lat || 51.505;
  const lon: number = props.state.geoData.lon || -0.09;

  function ChangeView({ center }) {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
  }

  return (
    <>
    <MapContainer className={styles.map} center={[lat,lon]} zoom={15} scrollWheelZoom={true}  attributionControl={false}   >
  <TileLayer 
   url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
   subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
   tileSize={512}
   zoomOffset={-1}
 />
  <ChangeView center={[lat, lon]} />
  <Marker position={[lat,lon]}>
   
  </Marker>
</MapContainer>
    </>
  )
}

export default Map