import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  // fork 와 call 은 다름
  yield all([fork(postSaga), fork(userSaga)]);
}
