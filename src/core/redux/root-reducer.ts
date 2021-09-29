import { userReducer } from './user/user.reducer'
import { combineReducers } from 'redux'

export const rootReducer: any = combineReducers({
	user: userReducer,
})
