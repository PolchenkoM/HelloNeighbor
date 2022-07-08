import { CLEAR_ERROR, SET_ERROR } from '../Types/errorTypes'

export const errorReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_ERROR:
			return { ...state, status: true, message: action.payload }
		case CLEAR_ERROR:
			return { ...state, status: false, message: '' }
		default:
			return state
	}
}
export default errorReducer
