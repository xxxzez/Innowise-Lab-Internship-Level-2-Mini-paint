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

//workers
function* workerFetchImages(): any {
	try {
		const imagesArray: any = []
		const querySnapshot = yield call(fetchAllImages)
		querySnapshot.forEach((doc: any) => imagesArray.push(doc.data()))
		yield put(setImages(imagesArray.reverse()))
	} catch (error: any) {
		yield put(setErrorMessage(error.message))
	}
}
function* workerDeleteImage({ imagePath, imageId }: any) {
	try {
		yield call(deleteImageInStorage, imagePath)
		yield call(deleteImageInDatabase, imageId)
		yield put(removeImage(imageId))
	} catch (error: any) {
		yield put(setErrorMessage(error.message))
	}
}
function* workerSaveImage({ imagePath, imageURL }: any) {
	try {
		yield call(loadImageToStorage, imagePath, imageURL)
	} catch (error: any) {
		yield put(setErrorMessage(error.message))
	}
}
function* workerUploadImage({ userId, date }: any) {
	try {
		yield call(loadImageToStorage, userId, date)
	} catch (error: any) {
		yield put(setErrorMessage(error.message))
	}
}
function* workerCreateImageInstance({
	user,
	imageURL,
	imageId,
	imagePath,
}: any) {
	try {
		yield call(
			createNewImageReferenceInDB,
			user,
			imageURL,
			imageId,
			imagePath
		)
	} catch (error: any) {
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
function* watchSaveImage() {
	yield takeEvery(ImagesActionTypes.SAVE_IMAGE, workerSaveImage)
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

export default function* imagesSaga() {
	yield all([
		watchFetchImages(),
		watchDeleteImage(),
		watchSaveImage(),
		watchUploadImage(),
		watchCreateImageInstance(),
	])
}
