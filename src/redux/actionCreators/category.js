
import {GET_CATEGORIES, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS} from '../actionTypes/category'; 

export const getCategory = payload => ({
    type: GET_CATEGORIES,
    payload
})

export const getCategorySuccess = payload => ({
    type: GET_CATEGORIES_SUCCESS,
    payload
})

export const getCategoryFailure= error => ({
    type: GET_CATEGORIES_FAILURE,
    error
})