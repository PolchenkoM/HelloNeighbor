import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import mapStyles from "./mapStyle";
import { addEventSaga, getEventSaga } from "../../redux/Actions/eventAC";

const containerStyle = {
  borderRadius: "400px",
  width: "800px",
  height: "800px",
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
  const dispatch = useDispatch();
  
  const events = useSelector((state) => state.events);
console.log("events",events);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM",
  });

  const [markers, setMarkers] = useState([]);

  const  onMapClick = useCallback ((event) => {
    
    const x = event.latLng.lat()
    const y = event.latLng.lng()


    dispatch(addEventSaga(x,y))

    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: Math.random()
      },
    ]);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
        onClick={onMapClick}
      >
        {/* {dfsfsfsdfsdfsd} */}
        <></>
        {markers.map((marker) => (
          <Marker
            key={marker.time}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/baloon.png",
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
