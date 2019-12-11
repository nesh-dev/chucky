
import {GET_RANDOM, GET_RANDOM_FAILURE, GET_RANDOM_SUCCESS} from '../actionTypes/random'; 

export const getRandom = payload => ({
    type: GET_RANDOM,
    payload
})

export const getRandomSuccess = payload => ({
    type: GET_RANDOM_SUCCESS,
    payload
})

export const getRandomFailure= error => ({
    type: GET_RANDOM_FAILURE,
    error
})