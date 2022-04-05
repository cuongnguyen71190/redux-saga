import * as ACTION_TYPE from "../constants"

const initialState = {
    users: null,
    error: null,
    isFetching: false
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.FETCH_USER:
            return {...state, isFetching: true}
        case ACTION_TYPE.FETCH_USER_SUCCESS:
            return {...state, isFetching: false, users: action.payload}
        case ACTION_TYPE.FETCH_USER_FAILURE:
            return {...state, isFetching: false, error: action.payload}
        default:
            return state
    }
}