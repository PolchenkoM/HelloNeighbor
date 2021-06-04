import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyle";

const containerStyle = {
  borderRadius: "200px",
  width: "400px",
  height: "400px",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  draggable: false,
};

const center = {
  lat: 55.702541,
  lng: 37.592007,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM",
  });

  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback(() => {}, [])

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
       
        {/* {dfsfsfsdfsdfsd} */}
        <></>
        {markers.map((marker) => (
          <Marker
            key={marker.time}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url:"/baloon.png"
            }}
          />
        ))}
      </GoogleMap>
      
    </div>
  ) : (
    <></>
  );
}
export default MyComponent;
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
