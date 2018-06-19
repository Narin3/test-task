import {
    FETCH_USERS_FULFILLED,
    FETCH_USERS_REJECTED,
    FETCH_DATA_UPDATE_FULFILLED,
    FETCH_DATA_UPDATE_REJECTED
    } from '../actions/scoreActions';

const initialStates = {
    fetching: false,
    fetched: false,
    error: null,
    data: {},
    updatedData: {}

}

export default function reducer(state = initialStates, action) {
    switch (action.type) {
        case FETCH_USERS_FULFILLED: {
            state = Object.assign({}, state, {fatching: false, fetched: true, data: action.payload});
            break;
        }
        case FETCH_USERS_REJECTED: {
            state = Object.assign({}, state, {fetching:false, fetched: false})
            break;
        }
        case FETCH_DATA_UPDATE_FULFILLED: {
            state = Object.assign({}, state, {updateFetching: true, updateFetched: false, updatedData: action.payload})
            break;
        }
        case FETCH_DATA_UPDATE_REJECTED: {
            state = Object.assign({}, state, {updateFetching: false, updateFetched: true})
            break;
        }
    }
    return state;
}