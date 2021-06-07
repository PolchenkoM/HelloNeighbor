import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  users: usersReducer,
});

export default rootReducer;
