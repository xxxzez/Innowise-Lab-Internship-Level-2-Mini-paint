import { ImageType } from './images-reducer'
import { ImagesActionTypes } from './images-types'

export const setImages = (images: ImageType[]) => ({
	type: ImagesActionTypes.SET_IMAGES,
	payload: images,
})

export const deleteImage = (imageId: number) => ({
	type: ImagesActionTypes.DELETE_IMAGE,
	payload: imageId,
})
