import { 
    GET_CATEGORIES,
     GET_CATEGORIES_FAILURE, 
     GET_CATEGORIES_SUCCESS } from '../actionTypes/category';

const initialState = {
categories: [],
error: '',
loading: false
}

const category = (state = initialState, action) => {
switch (action.type) {
   case GET_CATEGORIES:
       return { ...state, loading: true }
   case GET_CATEGORIES_SUCCESS:
       return { ...state, loading: false, categories: action.payload.data }
   case GET_CATEGORIES_FAILURE:
       return { ...state, loading: false, error: action.error.response.data }
   default:
       return state
}
}

export default category; 