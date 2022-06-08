import { put } from "redux-saga/effects";
import productsdata from "../../data";

import {
  API_PRODUCTS_SUCCESS,
  API_PRODUCTS_ERROR,
} from "../actions/actionTypes";

const products = productsdata;

export function* getProducts() {
  try {
    yield put({ type: API_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    yield put({ type: API_PRODUCTS_ERROR, payload: error });
  }
}
