import { removeImage, setImages } from './../redux/images/images-actions'
import { ImagesActionTypes } from './../redux/images/images-types'
import { takeEvery, call, put } from '@redux-saga/core/effects'
import { all } from 'redux-saga/effects'
import { setErrorMessage } from '../redux/auth/auth-actions'
import {
	deleteImageInDatabase,
	deleteImageInStorage,
	fetchAllImages,
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

//watchers
function* watchFetchImages() {
	yield takeEvery(ImagesActionTypes.FETCH_IMAGES, workerFetchImages)
}
function* watchDeleteImage() {
	yield takeEvery(ImagesActionTypes.DELETE_IMAGE, workerDeleteImage)
}

export default function* imagesSaga() {
	yield all([watchFetchImages(), watchDeleteImage()])
}
