import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import eventSagaWatcher from './Sagas/eventSaga'
import getSagaWatcher from './Sagas/getEventSaga'
import initState from './initState'
import rootReducer from './Reducers/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	rootReducer,
	initState,
	composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
)
sagaMiddleware.run(eventSagaWatcher)
sagaMiddleware.run(getSagaWatcher)

export default store
