import { UserType } from './user-types'

export type HeaderPropsType = {}

export type SetCurrentUserType = (user: UserType | null) => void

export type SetErrorMessageType = (error: string) => void

export type SignInPagePropsType = {}

export type SignUpPagePropsType = {}

export type ToastPropsType = {}

export type ErrorType = any

export type AuthStateType = {
	user: UserType
	error: ErrorType
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