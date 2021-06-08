import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";

import { getGeocode, getLatLng } from "use-places-autocomplete";
import mapStyles from "./mapStyle";


import { changeVisibility, getSelectedEvent } from "../../../redux/Actions/eventAC";
import { modalMatchVisibility } from "../../../redux/Actions/eventAC";

import { addEventSaga, getEventSaga } from "../../../redux/Actions/eventAC";


function MyComponent() {
  const dispatch = useDispatch();
  
  const adres = useSelector((state) => state.users.currentUser.address);
  const events = useSelector((state) => state.events.allEvents);
  const addEventModal = useSelector((state) => state.events.addEventModal);
  
  const [userAddress, setUserAddress] = useState({});
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    draggable: false,
  };


  // const events = useSelector((state) => state.events.allEvents);
  // const addEventModal = useSelector((state) => state.events.addEventModal);
  const selectedEvent = useSelector((state) => state.events.selectedEvent);

  const centerCircle = {
    lat: userAddress.lat,
    lng: userAddress.lng
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
    radius: 500,
    zIndex: 1,
  };

  const center = {
    lat: userAddress.lat,
    lng: userAddress.lng
  };
  
  
  // console.log(userAddress);
  
  const decodingAdress = async (adres) => {
    if (adres) {
      const code = await getGeocode({ address: adres })
      const results = await getLatLng(code[0])
      setUserAddress(results)
      
    }
    return "dsfsdfsdfds";
  };
  
  useEffect(() => {
    decodingAdress(adres);
  }, [adres]);
  
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
    dispatch(modalMatchVisibility());
    dispatch(getSelectedEvent(event))
  };

  return isLoaded ? (
    <>
      <GoogleMap
        className="karta"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
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
