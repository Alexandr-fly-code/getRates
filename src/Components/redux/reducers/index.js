import {combineReducers} from 'redux';
import getExchangerateReducers from './getExchangerateReducers';

const rootReducer = combineReducers({
    getExchangerateReducers,
});

export default rootReducer;