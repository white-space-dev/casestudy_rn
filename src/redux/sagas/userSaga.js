import { call, put } from "redux-saga/effects";

import {
  API_USER_REQUEST,
  API_USER_SUCCESS,
  API_USER_ERROR
} from "../actions/actionTypes";
import getUserApi from "../../services/api/userAPI";

export function* getUser() {
  try {
    yield put({ type: API_USER_REQUEST });
    let user = yield call(getUserApi);
    yield put({ type: API_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put({ type: API_USER_ERROR, payload: error });
  }
}
