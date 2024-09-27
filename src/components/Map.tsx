import { MapContainer,Marker, TileLayer, useMap } from 'react-leaflet'
import styles from './style.module.css'
import { State } from '../store/IpReducer'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationSVG from '../assets/icon-location.svg'


const customIcon = new L.DivIcon({
  html: `<img src="${locationSVG}" width="46" height="56" />`,
  className: 'custom-marker-icon', iconSize: [46, 56],
  iconAnchor: [23, 56],  
  popupAnchor: [0, -56],
})

function Map({state}: {state: State}) {

  const lat:number = state.geoData.lat || 51.505;
  const lon: number = state.geoData.lon || -0.09;

  function ChangeView({ center }: { center: [number, number] }) {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
  }

  return (
    <>
    <MapContainer className={styles.map} center={[lat,lon]} zoom={15} scrollWheelZoom={false}  attributionControl={false}   >
  <TileLayer 
   url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
   subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
   tileSize={512}
   zoomOffset={-1}
 />
  <ChangeView center={[lat, lon]} />
  <Marker position={[lat,lon]} icon={customIcon}>
  {/* <Popup>{"Kya Hua Hila Dala NAA..."}</Popup> */}
  </Marker>

</MapContainer>
    </>
  )
}

export default Map