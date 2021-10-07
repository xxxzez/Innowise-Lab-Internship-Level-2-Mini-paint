import { ImageType } from './images-reducer'
import { ImagesActionTypes } from './images-types'

export const setCurrentUser = (images: ImageType[]) => ({
	type: ImagesActionTypes.SET_IMAGES,
	payload: images,
})
