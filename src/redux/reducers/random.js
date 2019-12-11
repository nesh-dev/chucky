import { GET_RANDOM, 
         GET_RANDOM_SUCCESS,
        GET_RANDOM_FAILURE } from '../actionTypes/random';

const initialState = {
    chuckNorrisJokes: [],
    chuckNorrisJoke: {},
    error: '',
    loading: false
}

const random = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANDOM:
            return { ...state, loading: true }
        case GET_RANDOM_SUCCESS:
            return { ...state, loading: false, chuckNorrisJoke: action.payload.data }
        case GET_RANDOM_FAILURE:
            return { ...state, loading: false, error: action.error.response.data }
        default:
            return state
    }
}

export default random; 