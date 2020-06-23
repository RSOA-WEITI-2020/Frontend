import isLogged from './isLogged';
import orders from './orders';
import viewOrder from './viewOrder';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    isLogged: isLogged,
    orders: orders,
    currentOrder: viewOrder
});

export default allReducer;