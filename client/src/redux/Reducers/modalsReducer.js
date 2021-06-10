import { CHANGE_CHAT_MODAL_VISIBILITY } from '../Types/modalTypes'

export const modalsReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGE_CHAT_MODAL_VISIBILITY:
			return { ...state, chatModalVisible: !state.chatModalVisible }
		default:
			return state
	}
}
export default modalsReducer
