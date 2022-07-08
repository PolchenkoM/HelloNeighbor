import {
  ADD_EVENT,
  ADD_EVENT_MODAL,
  ADD_EVENT_SAGA,
  CHANGE_CIRCLE_COLOR,
  CHANGE_MATCH_MODAL_VISIBILITY,
  CHANGE_MODAL_VISIBILITY,
  GET_CIRCLE_EVENTS,
  GET_EVENT,
  GET_EVENT_SAGA,
  GET_SELECTED_EVENT,
} from "../Types/eventTypes";

export const addEvent = (coords) => {
  return {
    type: ADD_EVENT,
    payload: coords,
  };
};

export const addEventSaga = (valueX, ValueY) => {
  return {
    type: ADD_EVENT_SAGA,
    payload: { x: valueX, y: ValueY },
  };
};

export const getEvent = (coords) => {
  return {
    type: GET_EVENT,
    payload: coords,
  };
};

export const getEventSaga = () => {
  return {
    type: GET_EVENT_SAGA,
  };
};

export const changeVisibility = () => {
  return {
    type: CHANGE_MODAL_VISIBILITY,
  };
};

export const changeCircleColor = () => {
  return {
    type: CHANGE_CIRCLE_COLOR,
  };
};

export const addEventModal = () => {
  return {
    type: ADD_EVENT_MODAL,
  };
};

export const modalMatchVisibility = () => {
  return {
    type: CHANGE_MATCH_MODAL_VISIBILITY,
  };
};

export const getSelectedEvent = (event) => {
  return {
    type: GET_SELECTED_EVENT,
    payload: event,
  };
};

export const getCircleEvents = (circleEvents) => {
  return {
    type: GET_CIRCLE_EVENTS,
    payload: circleEvents,
  };
};

export const getCircleEventThunk = (currentUserId) => (dispatch) => {
  fetch("http://localhost:3001/event/circle", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ currentUserId }),
  }).then((res) =>
    res.json().then((result) => dispatch(getCircleEvents(result)))
  );
};
