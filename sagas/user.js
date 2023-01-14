import { all, fork, put, delay, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
} from "../reducers/user";

function changeNicknameAPI(data) {
  return axios.patch("/user/nickname", { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data); // call 은 동기, fork 는 비동기
    yield put({ type: CHANGE_NICKNAME_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: CHANGE_NICKNAME_FAILURE, error: err.response.data });
  }
}

function loadMyInfoAPI() {
  return axios.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield call(loadMyInfoAPI, action.data); // call 은 동기, fork 는 비동기
    yield put({ type: LOAD_MY_INFO_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: LOAD_MY_INFO_FAILURE, error: err.response.data });
  }
}
function followAPI(data) {
  return axios.post("/api/follow", data);
}

function* follow(action) {
  try {
    // const result = yield call(followAPI, action.data); // call 은 동기, fork 는 비동기
    yield delay(1000);
    yield put({ type: FOLLOW_SUCCESS, data: action.data });
  } catch (err) {
    yield put({ type: FOLLOW_FAILURE, error: err.response.data });
  }
}

function unfollowAPI(data) {
  return axios.delete("/api/follow", data);
}

function* unfollow(action) {
  try {
    // const result = yield call(followAPI, action.data); // call 은 동기, fork 는 비동기
    yield delay(1000);
    yield put({ type: UNFOLLOW_SUCCESS, data: action.data });
  } catch (err) {
    yield put({ type: UNFOLLOW_FAILURE, error: err.response.data });
  }
}

function logInAPI(data) {
  return axios.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data); // call 은 동기, fork 는 비동기
    yield put({ type: LOG_IN_SUCCESS, data: result.data });
  } catch (err) {
    yield put({ type: LOG_IN_FAILURE, error: err.response.data });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI); // call 은 동기, fork 는 비동기
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (err) {
    yield put({ type: LOG_OUT_FAILURE, error: err.response.data });
  }
}

function signUpAPI(data) {
  return axios.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data); // call 은 동기, fork 는 비동기
    console.log(result);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE, error: err.response.data });
  }
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchChangeNickname),
    fork(watchLoadMyInfo),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
