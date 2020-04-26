import counter from './counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    counter: counter,
    isLogged: isLogged
});

export default allReducer;