import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
import mapStyles from "./mapStyle";

import { changeVisibility, getSelectedEvent } from "../../../redux/Actions/eventAC";
import { modalMatchVisibility } from "../../../redux/Actions/eventAC";
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

  const events = useSelector((state) => state.events.allEvents);
  const addEventModal = useSelector((state) => state.events.addEventModal);
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwGnNMdsXI-Zrpp6kJLj1B_164V1_PFaM",
  });

  const [markers, setMarkers] = useState([]);

  const onMapClick = (event) => {
    if (addEventModal) {
      const x = event.latLng.lat();
      const y = event.latLng.lng();

      dispatch(changeVisibility());
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

  const selectEvent = (event) => {
    console.log(event._id);
    dispatch(modalMatchVisibility());
    dispatch(getSelectedEvent(event))
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
        <></>
        {events.length &&
          events.map((event) => (
            <Marker
              position={{ lat: event.coordinates.x, lng: event.coordinates.y }}
              icon={{
                url: "/baloon.png",
              }}
              key={Math.random()}
              onClick={() => selectEvent(event)}
              id={event._id}
              title={`
                          Название :${event.title}
 Время: ${event.eventTime}
 Создатель: ${event.author}`}
              value={event.title}
            />
          ))}
        <Circle
          center={centerCircle}
          options={optionsCircle}
          onClick={onMapClick}
        />
      </GoogleMap>
    </>
  ) : null;
}
export default MyComponent;
