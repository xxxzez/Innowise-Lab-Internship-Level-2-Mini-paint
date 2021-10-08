import { ImageType } from './images-reducer'
import { ImagesActionTypes } from './images-types'

export const fetchImages = () => ({
	type: ImagesActionTypes.FETCH_IMAGES,
})

export const setImages = (images: ImageType[]) => ({
	type: ImagesActionTypes.SET_IMAGES,
	payload: images,
})

export const removeImage = (imageId: any) => ({
	type: ImagesActionTypes.REMOVE_IMAGE,
	payload: imageId,
})

export const deleteImage = (imagePath: any, imageId: any) => ({
	type: ImagesActionTypes.DELETE_IMAGE,
	imagePath,
	imageId,
})

// export const saveImage = () => ({

// })
