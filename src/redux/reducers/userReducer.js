import {
  API_USER_REQUEST,
  API_USER_SUCCESS,
  API_USER_ERROR,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  user: [],
  error: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_USER_REQUEST:
      return { ...state, loading: true };
    case API_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case API_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
