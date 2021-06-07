import { ADD_EVENT, CHANGE_MODAL_VISIBILITY, GET_EVENT,} from "../Types/eventTypes";

export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [...state,action.payload];
      case GET_EVENT:
      return action.payload;
      
    default:
      return state;
  }
};
export default eventReducer;
