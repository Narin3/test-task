import {combineReducers} from 'redux';
import table from './scoreReducer'


const stores = combineReducers({
  table
});

export default stores;
