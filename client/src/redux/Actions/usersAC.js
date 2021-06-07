import { GET_CURRENT_USER } from "../Types/userTypes";

const getCurrentUser = (id) => {
  return {
    type: GET_CURRENT_USER,
    payload: id,
  };
};

const getCurrentUserThunk = (id) => (dispatch) => {
  fetch('http://localhost:3001/user/getCurrentUser', {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({id})
  })
  .then(res => res.json())
  .then(response => console.log(response))
}

export {
  getCurrentUserThunk,
}

