import { all } from "redux-saga/effects";
import healthCheckSaga from "./healthCheck";
import weatherForecastSaga from "./weatherForecast";
import newsSaga from "./news";

export default function* rootSaga() {
  yield all([healthCheckSaga(), weatherForecastSaga(), newsSaga()]);
}
