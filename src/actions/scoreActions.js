import axios from "axios";

export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED";
export const FETCH_DATA_UPDATE_FULFILLED = "FETCH_DATA_UPDATE_FULFILLED";
export const FETCH_DATA_UPDATE_REJECTED = "FETCH_DATA_UPDATE_REJECTED"


export function getTableData() {
    return function(dispatch) {
        axios.get('table_data.json')
            .then((response) => {
                dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
            })
    }
}

export function getTableDataUpdate() {
    return function(dispatch) {
        axios.get('table_data_1.json')
            .then((response) => {
                dispatch({type: 'FETCH_DATA_UPDATE_FULFILLED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_DATA_UPDATE_REJECTED', payload: err})
            })
    }
}