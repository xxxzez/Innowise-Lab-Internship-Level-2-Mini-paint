import { ImagesActionTypes } from './images-types'

export type ImageType = {
    imageId: number
    imagePath: string
    imageURL: string
    userEmail: string
}

type ImageStateType = {
    images: ImageType[]
}

const initialState: ImageStateType = {
	images: []
}

export const imageReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ImagesActionTypes.SET_IMAGES:
			return {
				...state,
				images: action.payload,
			}
		case ImagesActionTypes.DELETE_IMAGE:
			return {
				...state,
				// images: images.filter(),
			}

		default:
			return state
	}
}
