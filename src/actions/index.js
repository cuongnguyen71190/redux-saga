import * as ACTION_TYPE from "../constants"

export const fetchUser = () => {
    return {
        type: ACTION_TYPE.FETCH_USER
    }
}

export const fetchUserSuccess = payload => {
    return {
        type: ACTION_TYPE.FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUserFailure = payload => {
    return {
        type: ACTION_TYPE.FETCH_USER_FAILURE,
        payload
    }
}