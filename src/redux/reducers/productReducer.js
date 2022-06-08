import {
  API_PRODUCTS_SUCCESS,
  API_PRODUCTS_REQUEST,
  API_PRODUCTS_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  products: [],
  error: false
};

// const initialState = []

export const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case API_PRODUCTS_REQUEST:
        // console.warn('called')
      return ({ ...state, loading: true })
    case API_PRODUCTS_SUCCESS:
        // console.warn('clicked')
      return ({ ...state, products: action.payload, loading: false })
    case API_PRODUCTS_ERROR:
      return ({
        ...state,
        loading: false,
        error: action.payload,
      })
    default:
      return state;
  }
};
