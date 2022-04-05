import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import rootSaga from "../sagas"
import {UserReducer} from "../reducers";
import createSagaMiddleware from "redux-saga"

const sagaMiddleware = createSagaMiddleware()

const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware))

export const store = createStore(UserReducer, enhancers)

sagaMiddleware.run(rootSaga)