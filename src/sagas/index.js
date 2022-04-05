import {takeLatest, call, put} from "redux-saga/effects"
import axios from "axios";
import {fetchUserSuccess, fetchUserFailure} from "../actions";
import {FETCH_USER} from "../constants";

function fetchUser() {
    return axios("https://624ba8d071e21eebbcf4b433.mockapi.io/api/v1/users")
}

function* workerUser() {
    try {
        const {data} = yield call(fetchUser)
        yield put(fetchUserSuccess(data))
    } catch (error) {
        yield put(fetchUserFailure(error))
    }
}

export default function* watcherUser() {
    yield takeLatest(FETCH_USER, workerUser)
}