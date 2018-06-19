import {
    FETCH_USERS_FULFILLED,
    FETCH_USERS_REJECTED
    } from '../actions/scoreActions';

const initialStates = {
    fetching: false,
    fetched: false,
    error: null,
    tableData: {},
    data: {},
}

export default function reducer(state = initialStates, action) {
    switch (action.type) {
        case FETCH_USERS_FULFILLED: {
            state = Object.assign({}, state, {fatching: false, fetched: true, data: action.data});
            break;
        }
        case FETCH_USERS_REJECTED: {
            state = Object.assign({}, state, {fetching:false, fetched: false})
        }
    }
    return state;
}