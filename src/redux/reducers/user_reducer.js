import {
	USER_SIGN_UP,
	USER_SIGN_IN,
	USER_DELETE,
	USER_CHANGE_PASSWORD,
	USER_CHANGE_INFO
} from '../action_types/user_action_types'

export default function(user = {}, action) {
	switch (action.type) {
		case USER_SIGN_UP:
			return {
				id: action.user_id,
				username: action.username,
				password: action.password,
				email: "",
				phone_number: ""
			}
		case USER_SIGN_IN:
			return {
				...action.user
			}
		case USER_DELETE:
			return {
				id: action.user_id,
				username: user.username,
				password: action.password,
				email: user.email,
				phone_number: user.phone_number
			}
		case USER_CHANGE_PASSWORD:
			return {
				id: action.user_id,
				username: user.username,
				password: action.password,
				email: user.email,
				phone_number: user.phone_number
			}
		case USER_CHANGE_INFO:
			return {
				id: action.user_id,
				username: action.username,
				password: user.password,
				email: action.email,
				phone_number: action.phone_number
			}
		default:
			return user
	}
}