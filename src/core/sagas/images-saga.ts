import { ErrorType, ImageType } from './../types/common-types'
import { removeImage, setImages } from './../redux/images/images-actions'
import { ImagesActionTypes } from './../redux/images/images-types'
import { takeEvery, call, put } from '@redux-saga/core/effects'
import { all } from 'redux-saga/effects'
import { setErrorMessage } from '../redux/auth/auth-actions'
import {
	createNewImageReferenceInDB,
	deleteImageInDatabase,
	deleteImageInStorage,
	fetchAllImages,
	loadImageToStorage,
} from '../firebase/images-api'
import { AnyAction } from 'redux'

//workers
function* workerFetchImages(): Generator {
	try {
		const imagesArray: ImageType[] = []
		const querySnapshot: any = yield call(fetchAllImages)
		querySnapshot.forEach((doc: any) => imagesArray.push(doc.data()))
		yield put(setImages(imagesArray.reverse()))
	} catch (error: ErrorType) {
		yield put(setErrorMessage(error.message))
	}
}

function* workerDeleteImage(payload: AnyAction) {
	const { imagePath, imageId } = payload
	try {
		yield call(deleteImageInStorage, imagePath)
		yield call(deleteImageInDatabase, imageId)
		yield put(removeImage(imageId))
	} catch (error: ErrorType) {
		yield put(setErrorMessage(error.message))
	}
}

function* workerUploadImage(payload: AnyAction) {
	const { imagePath, imageURL } = payload
	try {
		yield call(loadImageToStorage, imagePath, imageURL)
	} catch (error: ErrorType) {
		yield put(setErrorMessage(error.message))
	}
}

function* workerCreateImageInstance(payload: AnyAction) {
	const { user, imageURL, imageId, imagePath } = payload
	try {
		yield call(
			createNewImageReferenceInDB,
			user,
			imageURL,
			imageId,
			imagePath
		)
	} catch (error: ErrorType) {
		yield put(setErrorMessage(error.message))
	}
}

//watchers
function* watchFetchImages() {
	yield takeEvery(ImagesActionTypes.FETCH_IMAGES, workerFetchImages)
}
function* watchDeleteImage() {
	yield takeEvery(ImagesActionTypes.DELETE_IMAGE, workerDeleteImage)
}
function* watchUploadImage() {
	yield takeEvery(ImagesActionTypes.UPLOAD_IMAGE, workerUploadImage)
}
function* watchCreateImageInstance() {
	yield takeEvery(
		ImagesActionTypes.CREATE_IMAGE_INSTANCE_IN_DATABASE,
		workerCreateImageInstance
	)
}

export default function* imagesSaga(): Generator {
	yield all([
		watchFetchImages(),
		watchDeleteImage(),
		watchUploadImage(),
		watchCreateImageInstance(),
	])
}
