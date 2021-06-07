import { ADD_EVENT,  ADD_EVENT_MODAL,  CHANGE_MODAL_VISIBILITY,  GET_EVENT,} from "../Types/eventTypes";

export const eventReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {...state, allEvents: [...state.allEvents, action.payload]}
      case GET_EVENT:
      return {...state, allEvents: action.payload}
      case CHANGE_MODAL_VISIBILITY:
      return {...state, modalVisibility: !state.modalVisibility}
      case ADD_EVENT_MODAL:
        return {...state, addEventModal: !state.addEventModal}
    default:
      return state;
  }
};
export default eventReducer;
