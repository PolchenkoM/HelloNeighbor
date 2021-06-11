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

import {
  changeVisibility,
  getSelectedEvent,
} from "../../../redux/Actions/eventAC";
import { modalMatchVisibility } from "../../../redux/Actions/eventAC";
import { addAddressUserThunk } from "../../../redux/Actions/usersAC";
import { addEventSaga, getEventSaga } from "../../../redux/Actions/eventAC";

function MyComponent() {
  const dispatch = useDispatch();

  const [eventAuthor, setEventAuthor] = useState({});

  const selectedEvent = useSelector((state) => state.events.selectedEvent);
  const changeColor = useSelector((state) => state.events.changeCircleColor);

  const author = selectedEvent?.author;

  const adres = useSelector((state) => state.users.currentUser.address);
  const currentUser = useSelector((state) => state.users.currentUser);
  const events = useSelector((state) => state.events.allEvents);
  const addEventModal = useSelector((state) => state.events.addEventModal);

  const [userAddress, setUserAddress] = useState({});

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    draggable: false,
  };

  const centerCircle = {
    lat: userAddress.lat,
    lng: userAddress.lng,
  };

  const optionsCircle = {
    strokeColor: changeColor ? "#ffa31a" : "#008B8B",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: changeColor ? "#ffa31a" : "#E0FFFF",
    fillOpacity: changeColor ? 0.2 : 0.35,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 500,
    zIndex: 1,
  };

  const center = {
    lat: userAddress.lat,
    lng: userAddress.lng,
  };

  const decodingAdress = async (adres) => {
    if (adres) {
      const code = await getGeocode({ address: adres });
      const results = await getLatLng(code[0]);
      setUserAddress(results);
    }
    return "dsfsdfsdfds";
  };
  useEffect(() => {
    if (adres && window.google) {
      decodingAdress(adres);
    }
  }, [adres, window.google]);

  useEffect(() => {
    dispatch(getEventSaga());
  }, []);

  useEffect(() => {
    if (userAddress.lat) {
      const currentId = currentUser._id;
      dispatch(addAddressUserThunk(userAddress, currentId));
    }
  }, [userAddress]);

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

  useEffect(async () => {
    fetch("http://localhost:3001/eventAuthor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
      }),
    })
      .then((res) => res.json())
      .then((result) => setEventAuthor(result));
  }, []);

  const selectEvent = (event) => {
    dispatch(modalMatchVisibility());
    dispatch(getSelectedEvent(event));
  };

  return isLoaded ? (
    <>
      <div className="container--map">
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
                position={{
                  lat: event.coordinates.x,
                  lng: event.coordinates.y,
                }}
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
      </div>
    </>
  ) : null;
}
export default MyComponent;
