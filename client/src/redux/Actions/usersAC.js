import { GET_CURRENT_USER, LOGOUT_USER } from "../Types/userTypes";

const getCurrentUser = (user) => {
  return {
    type: GET_CURRENT_USER,
    payload: user,
  };
};
const getCurrentUserGoogleThunk = (email) => (dispatch) => {
  fetch('http://localhost:3001/registration/google', {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({email})
  })
  .then(res => res.json())
  .then(response => dispatch(getCurrentUser(response)))
}

const logoutUser = () => {
  return {
    type: LOGOUT_USER, 
  }
}

export {
  getCurrentUserGoogleThunk,
  logoutUser
}
