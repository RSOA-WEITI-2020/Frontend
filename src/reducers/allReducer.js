import isLogged from './isLogged';
import orders from './orders';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    isLogged: isLogged,
    orders: orders
});

export default allReducer;