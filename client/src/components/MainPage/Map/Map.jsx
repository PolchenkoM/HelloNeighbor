import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, Marker,Circle } from "@react-google-maps/api";
import mapStyles from "./mapStyle";

import { addEventSaga } from '../../../redux/Actions/eventAC'

const containerStyle = {
<<<<<<< HEAD:client/src/components/Map/Map.jsx
  borderRadius: "400px",
  width: "800px",
  height: "800px",
  
=======
  width: "100%",
  height: "100vh",
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  draggable: false,
  
};

const centerCircle = {
  lat: 55.702541,
  lng: 37.592007,
}

const optionsCircle = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FFFFFF',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 200,
  zIndex: 1
}

const center = {
  lat: 55.702541,
  lng: 37.592007,
};

function MyComponent() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events);
<<<<<<< HEAD:client/src/components/Map/Map.jsx

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);
=======
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM",
  });

<<<<<<< HEAD:client/src/components/Map/Map.jsx
  const [newEvent, setNewEvent] = useState(false);
  const [markers, setMarkers] = useState([]);

  const createEvent = () => {
    setNewEvent(!newEvent);
  };

  const onMapClick = (event) => {
    if (newEvent) {

=======
  const [eventt, setEventt] = useState(false);

  const createEvent = () => {
    setEventt(true);
  };

  const [markers, setMarkers] = useState([]);

  const onMapClick = useCallback((event) => {
    if (!eventt) {
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx
      const x = event.latLng.lat();
      const y = event.latLng.lng();

      dispatch(addEventSaga(x, y));
<<<<<<< HEAD:client/src/components/Map/Map.jsx

=======
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: Math.random(),
        },
      ]);
    }
<<<<<<< HEAD:client/src/components/Map/Map.jsx
  };
=======
  }, []);
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx

  console.log(eventt);

  return isLoaded ? (
    <>
      <GoogleMap 
      className='karta'
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
        onClick={onMapClick}
        
      >
<<<<<<< HEAD:client/src/components/Map/Map.jsx
        {/* {dfsfsfsdfsdfsd} */}
        <Circle
      center={centerCircle}
      options={optionsCircle}
    />
        <></>
        {events.map((event) => (
=======
        {markers.map((marker) => (
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx
          <Marker
            // key={marker.time}
            position={{ lat: event.coordinates.x, lng: event.coordinates.y }}
            icon={{
              url: "/baloon.png",
            }}
          />
        ))}
      </GoogleMap>
<<<<<<< HEAD:client/src/components/Map/Map.jsx
      <button onClick={createEvent}>добавить мероприятие</button>
    </div>
=======
      <button onClick={createEvent}>Создать встречу</button>
</>
    
>>>>>>> 8da6dad981eaa83af854fa26d3560602ae66d212:client/src/components/MainPage/Map/Map.jsx
  ) : (
    null
  );
}
export default MyComponent;
