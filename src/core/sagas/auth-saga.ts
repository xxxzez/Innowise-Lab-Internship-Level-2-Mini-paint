import { takeEvery, call, put } from '@redux-saga/core/effects'
import { all } from 'redux-saga/effects'
import {
	createNewUserInDB,
	getAuthDataFromEmailSignIn,
	getAuthDataFromEmailSignUp,
	getAuthDataFromGoogleSignIn,
	signOut,
} from '../firebase/auth-api'
import { setCurrentUser, setErrorMessage } from '../redux/auth/auth-actions'
import { AuthActionTypes } from '../redux/auth/auth-types'
import { AnyAction } from 'redux'

//workers
function* workerSignInWithGoogle() {
	try {
		const { user } = yield call(getAuthDataFromGoogleSignIn)
		const currentUser = {
			uid: user.uid,
			email: user.email,
			photo: user.photoURL,
		}
		yield call(createNewUserInDB, currentUser)
		yield put(setCurrentUser(currentUser))
	} catch (error) {
		if (error instanceof Error) {
			yield put(setErrorMessage(error.message))
		}
	}
}

function* workerSignInWithEmail(payload: AnyAction) {
	const { email, password } = payload
	try {
		const { user } = yield call(getAuthDataFromEmailSignIn, email, password)
		const currentUser = {
			uid: user.uid,
			email: user.email,
			photo: user.photoURL,
		}
		yield put(setCurrentUser(currentUser))
	} catch (error) {
		if (error instanceof Error) {
			yield put(setErrorMessage(error.message))
		}
	}
}
function* workerSignUpWithEmailAndPassword(payload: AnyAction) {
	const { email, password } = payload
	try {
		const { user } = yield call(getAuthDataFromEmailSignUp, email, password)
		const currentUser = {
			uid: user.uid,
			email: user.email,
			photo: user.photoURL,
		}
		yield call(createNewUserInDB, currentUser)
		yield put(setCurrentUser(currentUser))
	} catch (error) {
		if (error instanceof Error) {
			yield put(setErrorMessage(error.message))
		}
	}
}
function* workerSignOut() {
	try {
		yield call(signOut)
		yield put(setCurrentUser(null))
	} catch (error) {
		if (error instanceof Error) {
			yield put(setErrorMessage(error.message))
		}
	}
}

//watchers
function* watchSignInWithGoogle() {
	yield takeEvery(AuthActionTypes.SIGN_IN_WITH_GOOGLE, workerSignInWithGoogle)
}
function* watchSignInWithEmail() {
	yield takeEvery(AuthActionTypes.SIGN_IN_WITH_EMAIL, workerSignInWithEmail)
}
function* watchSignUpWithEmailAndPassword() {
	yield takeEvery(
		AuthActionTypes.SIGN_UP_WITH_EMAIL_AND_PASSWORD,
		workerSignUpWithEmailAndPassword
	)
}
function* watchSignOut() {
	yield takeEvery(AuthActionTypes.SIGN_OUT, workerSignOut)
}

export default function* authSaga() {
	yield all([
		watchSignInWithEmail(),
		watchSignUpWithEmailAndPassword(),
		watchSignInWithGoogle(),
		watchSignOut(),
	])
}
