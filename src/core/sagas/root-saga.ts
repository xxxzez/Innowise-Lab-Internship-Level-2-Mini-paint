import { all } from 'redux-saga/effects'
import authSaga from './auth-saga'
import imagesSaga from './images-saga'

export default function* rootSaga() {
	yield all([authSaga(), imagesSaga()])
}
