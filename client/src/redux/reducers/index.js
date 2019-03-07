import securityReducer from './security';
import registerReducer from './register';
import gameListingReducer from './game-listing';
import {combineReducers} from "redux";

export default combineReducers({
    security: securityReducer,
    register: registerReducer,
    gameListing: gameListingReducer,
})
