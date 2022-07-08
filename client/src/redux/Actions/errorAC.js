import { SET_ERROR, CLEAR_ERROR } from '../Types/errorTypes'

export const setError = (payload) => {
	return {
		type: SET_ERROR,
    payload
	}
}
export const clearError = () => {
	return {
		type: CLEAR_ERROR,
	}
}
