import { CHANGE_MODAL_VISIBILITY } from '../Types/eventTypes';
import {GET_CURRENT_USER} from '../Types/userTypes'

const usersReducer = (state={}, action) => {
  console.log();
  switch (action.type) {
    case GET_CURRENT_USER:
      return {
        ...state,  currentUser: {...action.payload}
      }
      case CHANGE_MODAL_VISIBILITY:
      return {...state,modalVisibility:!state.modalVisibility}
      
    default:
      return state;
  }
}

export default usersReducer
