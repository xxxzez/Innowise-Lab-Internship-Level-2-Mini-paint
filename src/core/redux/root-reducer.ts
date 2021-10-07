import { imageReducer } from './images/images-reducer'
import { authReducer } from './auth/auth-reducer'
import { combineReducers } from 'redux'

export const rootReducer: any = combineReducers({
	auth: authReducer,
	images: imageReducer,
})
