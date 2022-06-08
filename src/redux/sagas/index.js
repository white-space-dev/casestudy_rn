import { all, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS_REQUEST } from "../actions/actionTypes";
import { getProducts } from "./productSaga";

const sagas = [
  takeEvery(GET_PRODUCTS_REQUEST, getProducts),
];

export default function* rootSaga() {
  yield all([...sagas]);
}
