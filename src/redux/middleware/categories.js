import { put, call, takeEvery } from "redux-saga/effects";
import RandomService from '../../services/random'; 
import {getCategory, getCategoryFailure, getCategorySuccess} from '../actionCreators/category'; 


export function* watchCategory() {
    yield takeEvery(getCategory().type, GetCategoryAsync);
}

export function* GetCategoryAsync({payload}) {
    try{
        const response = yield call(RandomService.getCategories, payload)
        yield put(getCategorySuccess({ ...response }))
    }catch(error){
        yield put(getCategoryFailure({ ...error }))
    }
}