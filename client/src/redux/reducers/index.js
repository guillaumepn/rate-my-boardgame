import securityReducer from './security';
import registerReducer from './register';
import {combineReducers} from "redux";

export default combineReducers({
    security: securityReducer,
    register: registerReducer
})
