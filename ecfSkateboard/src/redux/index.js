import { combineReducers } from 'redux';
import powerReducer from './powerReducer';
import lightsReducer from './lightsReducer';
import authReducer from './authReducer';

export default combineReducers({
    power: powerReducer,
    lights: lightsReducer,
    auth: authReducer
});
