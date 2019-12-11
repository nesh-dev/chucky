import { all, fork } from "redux-saga/effects";
import {watchGetRandom} from "../middleware/random"; 
import {watchCategory} from "../middleware/categories"

function* rootSaga() {
    yield all([
        fork(watchGetRandom), 
        fork(watchCategory)
    ])
}

export default rootSaga;