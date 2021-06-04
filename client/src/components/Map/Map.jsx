import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from './mapStyle'

const containerStyle = {
  borderRadius:'200px',
  width: '400px',
  height: '400px'
};

const options = {
  styles:mapStyles,
  disableDefaultUI:true,
  draggable: false,
}

const center = {
    lat: 55.702541,
    lng: 37.592007,
  };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: ("AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM")
  })


  return isLoaded ? (
    <div>

      <GoogleMap 
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
        
        >
        {  }
        <></>
      </GoogleMap>
        </div>
  ) : <></>
}
export default MyComponent
  // const mapContainerStyle = {
  //   height: "100px",
  //   width: "100px",
  // };
  // const options = {
  //   disableDefaultUI: true,
  //   zoomControl: true,
  // };
  // const center = {
  //   lat: 55.706541,
  //   lng: 37.597007,
  // };
