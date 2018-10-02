import {combineReducers} from 'redux';
import getExchangerateReducers from './getExchangerateReducers';
import loginReducers from './inputLoginReducers';
import passReducers from './inputPassReducers';
import activeModalReducers from './activeModalReducers';

const rootReducer = combineReducers({
    getExchangerateReducers,
    loginReducers,
    passReducers,
    activeModalReducers,
});

export default rootReducer;