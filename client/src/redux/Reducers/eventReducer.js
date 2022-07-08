import {
  ADD_EVENT,
  ADD_EVENT_MODAL,
  CHANGE_CIRCLE_COLOR,
  CHANGE_MATCH_MODAL_VISIBILITY,
  CHANGE_MODAL_VISIBILITY,
  GET_CIRCLE_EVENTS,
  GET_EVENT,
  GET_SELECTED_EVENT,
} from "../Types/eventTypes";

export const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return { ...state, allEvents: [...state.allEvents, action.payload] };
    case GET_EVENT:
      return { ...state, allEvents: action.payload };
    case CHANGE_MODAL_VISIBILITY:
      return { ...state, modalVisibility: !state.modalVisibility };
    case ADD_EVENT_MODAL:
      return { ...state, addEventModal: !state.addEventModal };
    case CHANGE_MATCH_MODAL_VISIBILITY:
      return { ...state, modalMatchVisibility: !state.modalMatchVisibility };
    case GET_SELECTED_EVENT:
      return { ...state, selectedEvent: action.payload };
    case GET_CIRCLE_EVENTS:
      return {
        ...state,
        circleEvents: action.payload,
      };
    case CHANGE_CIRCLE_COLOR:
      return { ...state, changeCircleColor: !state.changeCircleColor };
    default:
      return state;
  }
};
export default eventReducer;
