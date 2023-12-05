'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const mapContainerStyle = {
    width: '100%',
    height: '590px',
  };

  const center = {
    lat: 41.40338,
    lng: 2.17403,
  };


function Map() {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map