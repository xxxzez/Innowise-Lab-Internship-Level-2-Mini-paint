import { AnyAction } from 'redux'
import { ImagesStateType } from './../../types/common-types'
import { ImagesActionTypes } from './images-types'

const initialState: ImagesStateType = {
	images: [],
}

export const imageReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case ImagesActionTypes.SET_IMAGES:
			return {
				...state,
				images: action.payload,
			}
		case ImagesActionTypes.REMOVE_IMAGE:
			return {
				...state,
				images: state.images.filter(
					(image) => image.imageId !== action.payload
				),
			}

		default:
			return state
	}
}
