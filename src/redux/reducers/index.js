import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from './userReducer';
import { searchReducer } from './searchReducer';


export default combineReducers({
  products: productReducer,
  user: userReducer,
  searchTerm : searchReducer
});
