import { rootReducer } from './root-reducer'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas/root-saga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
