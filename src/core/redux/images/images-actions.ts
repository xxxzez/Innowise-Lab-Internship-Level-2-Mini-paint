import { ImageType } from './../../types/common-types'
import { UserType } from './../../types/user-types'
import { ImagesActionTypes } from './images-types'

export const fetchImages = () => ({
	type: ImagesActionTypes.FETCH_IMAGES,
})

export const setImages = (images: ImageType[]) => ({
	type: ImagesActionTypes.SET_IMAGES,
	payload: images,
})

export const removeImage = (imageId: number) => ({
	type: ImagesActionTypes.REMOVE_IMAGE,
	payload: imageId,
})

export const deleteImage = (imagePath: string, imageId: number) => ({
	type: ImagesActionTypes.DELETE_IMAGE,
	imagePath,
	imageId,
})

export const saveImage = (imagePath: string, imageURL: string) => ({
	type: ImagesActionTypes.SAVE_IMAGE,
	imagePath,
	imageURL,
})

export const uploadImage = (imagePath: string, imageURL: string) => ({
	type: ImagesActionTypes.UPLOAD_IMAGE,
	imagePath,
	imageURL,
})

export const createImageInstanceInDB = (
	user: UserType,
	imageURL: string,
	imageId: number,
	imagePath: string
) => ({
	type: ImagesActionTypes.CREATE_IMAGE_INSTANCE_IN_DATABASE,
	user,
	imageURL,
	imageId,
	imagePath,
})
