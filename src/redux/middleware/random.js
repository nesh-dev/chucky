import { put, call, takeEvery } from "redux-saga/effects";
import RandomService from '../../services/random'; 
import {getRandom, getRandomFailure, getRandomSuccess} from '../actionCreators/random'; 


export function* watchGetRandom() {
    yield takeEvery(getRandom().type, GetRandomAsync);
}

export function* GetRandomAsync({payload}) {
    try{
        const response = yield call(RandomService.getRandom, payload)
        yield put(getRandomSuccess({ ...response }))
    }catch(error){
        yield put(getRandomFailure({ ...error }))
    }
}