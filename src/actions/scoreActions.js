import axios from "axios";
import tableData from '../dataFiles/table_data.json';

export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED";
export const FETCH_USERS_REJECTED = "FETCH_USERS_REJECTED"

export function getTableData() {
    return function(dispatch) {
        axios.get('src/dataFiles/table_data.json')
            .then((response) => {
                dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
            })
    }
}