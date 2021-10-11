import { AnyAction } from 'redux'
import { AuthStateType } from './../../types/common-types'
import { AuthActionTypes } from './auth-types'

const initialState: AuthStateType = {
	user: null,
	error: null,
}

export const authReducer = (state = initialState, action: AnyAction) => {
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
