'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const mapContainerStyle = {
    width: '100%',
    height: '590px',
  };

  const center = {
    lat:  59.95,
    lng: 30.33,
  };


function Map() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={1}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map