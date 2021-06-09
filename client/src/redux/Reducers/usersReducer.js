import {GET_CURRENT_USER, LOGOUT_USER, UPDATE_USER} from '../Types/userTypes'

const usersReducer = (state={}, action) => {
  console.log();
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,  currentUser: {...action.payload}
      }
      case UPDATE_USER:
        return {
          ...state,
          currentUser: action.payload
        }
      case LOGOUT_USER: 
      return {
        ...state, currentUser: {}
      }    
    default:
      return state;
  }
}

export default usersReducer
