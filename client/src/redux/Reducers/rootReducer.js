import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import usersReducer from "./usersReducer";
import modalsReducer from "./modalsReducer"
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  users: usersReducer,
  modals: modalsReducer,
  error: errorReducer,
});

export default rootReducer
