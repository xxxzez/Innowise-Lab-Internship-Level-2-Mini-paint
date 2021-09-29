import { AuthActionTypes } from './auth-types'

const initialState = {
	user: null,
	error: null,
}

export const authReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case AuthActionTypes.SET_CURRENT_USER:
			return {
				...state,
				user: action.payload,
			}
		case AuthActionTypes.SET_ERROR_MESSAGE:
			return {
				...state,
				error: action.errorMessage,
			}
		default:
			return state
	}
}
