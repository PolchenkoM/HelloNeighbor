import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import usersReducer from "./usersReducer";
import modalsReducer from "./modalsReducer"

const rootReducer = combineReducers({
  events: eventReducer,
  users: usersReducer,
  modals: modalsReducer,
  // modalVisibility:eventReducer
});

export default rootReducer;
