import {GET_CURRENT_USER} from '../Types/userTypes'

const usersReducer = (state={}, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,  users: {...action.payload}
      }

  
    default:
      return state;
  }
}

export default usersReducer
