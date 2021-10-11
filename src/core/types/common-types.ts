import { UserType } from './user-types'

export type SetCurrentUserType = (user: UserType | null) => void

export type SetErrorMessageType = (error: string) => void

export type AuthStateType = {
	user: UserType
	error: string | null
}

export type RootStateType = {
    auth: AuthStateType
    images: ImagesStateType
}

export type ImageType = {
    imageId: number
    imagePath: string
    imageURL: string
    userEmail: string
}

export type ImagesStateType = {
    images: ImageType[] 
}

export type CreateImageInstanceType = {
	user: UserType,
	imageURL: string,
	imageId: number,
	imagePath: string,
}

export type DeleteImageWorkerType = {
    imagePath: string
    imageId: number
}
export type UploadImageWorkerType = {
    imagePath: string
    imageURL: string
}

export type MouseDownType = undefined | null  | number