import { ADD_EVENT, ADD_EVENT_SAGA } from "../Types/eventTypes";

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
