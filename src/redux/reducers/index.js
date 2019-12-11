import { combineReducers } from "redux";
import random from './random';
import category from './category'

const rootReducer = combineReducers({
    random,
    category
})
export default rootReducer;