import { all, takeEvery } from "redux-saga/effects";
import { GET_PRODUCTS_REQUEST } from "../actions/actionTypes";
import { FETCH_USER_REQUEST } from "../actions/actionTypes";
import { getProducts } from "./productSaga";
import { getUser } from "./userSaga";

const sagas = [
  takeEvery(GET_PRODUCTS_REQUEST, getProducts),
  takeEvery(FETCH_USER_REQUEST, getUser),
];

export default function* rootSaga() {
  yield all([...sagas]);
}
