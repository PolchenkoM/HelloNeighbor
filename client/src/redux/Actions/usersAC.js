import { GET_CURRENT_USER, LOGOUT_USER, UPDATE_USER } from "../Types/userTypes";

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

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user
  }
}
const updateUserThunk = (formData) => (dispatch) => {
  fetch('http://localhost:3001/user/addAvatar', {
    method: "POST",
    body: formData,
  }).then(res => res.json())
  .then(resault => console.log(resault))
  // .then(resault => dispatch(updateUser(resault)))

}

export {
  getCurrentUserGoogleThunk,
  logoutUser,
  updateUserThunk
}
