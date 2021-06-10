import { ADD_ADDRES_USER, GET_CURRENT_USER, LOGOUT_USER, UPDATE_USER } from "../Types/userTypes"

const getCurrentUser = (user) => {
	return {
		type: GET_CURRENT_USER,
		payload: user
	}
}
const getCurrentUserGoogleThunk = (email) => (dispatch) => {
	fetch("http://localhost:3001/registration/google", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email })
	})
		.then((res) => res.json())
		.then((response) => dispatch(getCurrentUser(response)))
}

const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}

const updateUser = (user) => {
	console.log(user)
	return {
		type: UPDATE_USER,
		payload: user
	}
}
const updateUserThunk = (formData) => (dispatch) => {
	fetch("http://localhost:3001/user/addAvatar", {
		method: "POST",
		body: formData
	})
		.then((res) => res.json())
		.then((resault) => dispatch(updateUser(resault)))
}

const addAddressUser = (currentUser) => {
	return {
		type: ADD_ADDRES_USER,
		payload: currentUser
	}
}
const addAddressUserThunk = (userAddress, currentUserId) => (dispatch) => {
	fetch("http://localhost:3001/user/addAddress", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ userAddress, currentUserId })
	})
		.then((res) => res.json())
		.then((result) => dispatch(addAddressUser(result)))
}

export { getCurrentUserGoogleThunk, logoutUser, updateUserThunk, addAddressUserThunk }
