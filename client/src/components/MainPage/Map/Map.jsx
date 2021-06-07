import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import mapStyles from "./mapStyle";

import { changeVisibility } from '../../../redux/Actions/eventAC';
import { addEventSaga, getEventSaga } from "../../../redux/Actions/eventAC";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  draggable: false,
};

const centerCircle = {
  lat: 55.702541,
  lng: 37.592007,
};

const optionsCircle = {
  strokeColor: "#008B8B",
  strokeOpacity: 0.8,
  strokeWeight: 5,
  fillColor: "#E0FFFF",
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 200,
  zIndex: 1,
};

const center = {
  lat: 55.702541,
  lng: 37.592007,
};



function MyComponent() {
  const dispatch = useDispatch();

  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM",
  });


  const [newEvent, setNewEvent] = useState(false);
  const [markers, setMarkers] = useState([]);

  const createEvent = () => {
    setNewEvent(!newEvent);
  };

  const onMapClick = (event) => {
    if (newEvent) {


      const x = event.latLng.lat();
      const y = event.latLng.lng();


      dispatch(changeVisibility())
      dispatch(addEventSaga(x, y));
      setMarkers((current) => [
        ...current,
        {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
          time: Math.random(),
        },
      ]);
    }
  };


  return isLoaded ? (
    <>
      <GoogleMap
        className="karta"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        options={options}
      >
        {/* {dfsfsfsdfsdfsd} */}

        <></>
        {events.map((event) => (
          <Marker
            // key={marker.time}
            position={{ lat: event.coordinates.x, lng: event.coordinates.y }}
            icon={{
              url: "/baloon.png",
            }}
          />
        ))}
        <Circle
          center={centerCircle}
          options={optionsCircle}
          onClick={onMapClick}
        />
      </GoogleMap>
      <button onClick={createEvent}>добавить мероприятие</button>
    </>
  ) : null;

}
export default MyComponent;
