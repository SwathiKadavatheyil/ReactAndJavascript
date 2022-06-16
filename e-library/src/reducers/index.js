import {combineReducers} from "redux";
import users from './users';

const rootReducers = combineReducers({
    users:users
})

export default rootReducers;