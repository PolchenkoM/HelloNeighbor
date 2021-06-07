import { ADD_EVENT, ADD_EVENT_SAGA, CHANGE_MODAL_VISIBILITY, GET_EVENT, GET_EVENT_SAGA } from "../Types/eventTypes";

export const addEvent = (coords) => {
  return {
    type: ADD_EVENT,
    payload: coords,
  };
};

export const addEventSaga = (valueX, ValueY) => {
  return {
    type: ADD_EVENT_SAGA,
    payload: {x:valueX, y:ValueY,}
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
}


