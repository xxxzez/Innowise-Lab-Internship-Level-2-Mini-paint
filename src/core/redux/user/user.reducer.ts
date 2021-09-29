const INITIAL_STATE = {
	currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'action.type':
			return {
				...state,
				currentUser: action.payload,
			}

		default:
			return state
	}
}
