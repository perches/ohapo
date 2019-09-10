import { all } from "redux-saga/effects";
import healthCheckSaga from "./healthCheck";

export default function* rootSaga() {
  yield all([healthCheckSaga()]);
}
