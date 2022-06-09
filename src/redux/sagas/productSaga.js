import { call, put } from "redux-saga/effects";

import {
  API_PRODUCTS_REQUEST,
  API_PRODUCTS_SUCCESS,
  API_PRODUCTS_ERROR
} from "../actions/actionTypes";
import getProductsApi from "../../services/api/productAPI";

export function* getProducts() {
  try {
    yield put({ type: API_PRODUCTS_REQUEST });
    let products = yield call(getProductsApi);
    yield put({ type: API_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    yield put({ type: API_PRODUCTS_ERROR, payload: error });
  }
}
