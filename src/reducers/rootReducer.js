import { combineReducers } from 'redux';
import apjAcademyReducer from './apjAcademyReducer';
 

const rootReducer = combineReducers({
    apjAcademyReducer: apjAcademyReducer
});

export default rootReducer;
